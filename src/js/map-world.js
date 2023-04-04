import { select, selectAll } from "d3-selection";
import { geoEqualEarth, geoPath, geoGraticule } from "d3-geo";
import { transition } from "d3-transition";
import { max, min } from "d3-array";
import { zoom, zoomIdentity } from "d3-zoom";
import { scaleLinear } from "d3-scale";
import { axisBottom } from "d3-axis";
import { format } from "d3-format";
import { brushX } from "d3-brush";
import { countryColorScale, getCityRadius } from "./scales";
import { drawLegend } from "./legend";

export const drawWorldMap = (laureates, countries) => {

  // Perform calculations
  const birthCities = [];
  laureates.forEach(laureate => {
    if (laureate.birth_country !== "" && laureate.birth_city !== "") {
      const country =  countries.features.find(f => f.properties.name === laureate.birth_country);
      if (country.properties.laureates) {
        country.properties.laureates.push(laureate);
      } else {
        country.properties["laureates"] = [laureate];
      }

      if (birthCities.find(city => city.city === laureate.birth_city) && birthCities.find(city => city.country === laureate.birth_country)) {
        birthCities.find(city => city.city === laureate.birth_city).laureates.push(laureate);
      } else {
        birthCities.push({
          city: laureate.birth_city,
          country: laureate.birth_country,
          latitude: laureate.birt_city_latitude,
          longitude: laureate.birt_city_longitude,
          laureates: [laureate]
        });
      }
    }

  });
  console.log("birthCities", birthCities);
  const maxLaureatesPerCity = max(birthCities, d => d.laureates.length);
  drawLegend(maxLaureatesPerCity);

  // Dimensions
  const width = 1230;
  const height = 620;

  const minYear = min(laureates, d => d.year);
  const maxYear = max(laureates, d => d.year);
  let brushMin = minYear;
  let brushMax = maxYear;

  // Append SVG container
  const svg = select("#map")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // Define projection
  const projection = geoEqualEarth()
    .scale(220)
    .translate([width/2, height/2]);

  // Initialize the path generator
  const geoPathGenerator = geoPath()
    .projection(projection);

  // Append graticules
  const graticule = geoGraticule();

  const graticules = svg
    .append("g")
      .attr("fill", "transparent")
      .attr("stroke", "#09131b")
      .attr("stroke-opacity", 0.2)
  graticules
    .append("path")
    .datum(graticule)
      .attr("class", "graticule line")
      .attr("d", geoPathGenerator);
  graticules
    .append("path")
    .datum(graticule.outline)
      .attr("class", "graticule outline")
      .attr("d", geoPathGenerator);

  // Append country fills
  svg
    .selectAll(".path-mercator")
    .data(countries.features)
    .join("path")
      .attr("class", "countries path-mercator")
      .attr("d", geoPathGenerator)
      .attr("fill", "#f8fcff")
      .attr("stroke", "#09131b")
      .attr("stroke-opacity", 0.4);
  
  const showCountryTooltip = (d) => {
    select("#map-tooltip")
      .text(d.laureates
        ? `${d.name}, ${d.laureates.length} laureate${d.laureates.length > 1 ? "s" : ""}`
        : `${d.name}, 0 laureate`
      )
      .transition()
      .style("opacity", 1);
  };

  const showCityTooltip = (d) => {
    select("#map-tooltip")
      .text(`${d.city}, ${d.laureates.length} laureate${d.laureates.length > 1 ? "s" : ""}`)
      .transition()
      .style("opacity", 1);
  };

  const hideTooltip = () => {
    select("#map-tooltip")
      .transition()
      .style("opacity", 0);
  };

  const updateCountryFills = () => {
    const selectedData = JSON.parse(JSON.stringify(countries.features));
      selectedData.forEach(d => {
        if (d.properties.laureates) {
          d.properties.laureates = d.properties.laureates.filter(l => l.year >= brushMin && l.year <= brushMax);
        }
      });

      selectAll(".path-mercator")
        .data(selectedData)
        .on("mouseenter", (e, d) => showCountryTooltip(d.properties))
        .on("mouseleave", hideTooltip)
        .transition()
        .attr("fill", d =>  d.properties.laureates && d.properties.laureates.length > 0
          ? countryColorScale(d.properties.laureates.length)
          : "#f8fcff");
  };

  const updateCityCircles = () => {
    const selectedData = JSON.parse(JSON.stringify(birthCities));
      selectedData.forEach(city => {
        city.laureates = city.laureates.filter(l => l.year >= brushMin && l.year <= brushMax);
      });

      selectAll(".circle-city")
        .data(selectedData)
        .on("mouseenter", (e, d) => showCityTooltip(d))
        .on("mouseleave", hideTooltip)
        .transition()
        .attr("r", d => getCityRadius(d.laureates.length, maxLaureatesPerCity));
  };

  let isCountryMap = true;

  // Display laureates' countries
  const displayCountries = () => {

    isCountryMap = true;

    // Remove city circles
    selectAll(".circle-city")
      .transition()
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0)
      .remove();

    updateCountryFills();

    // Show related legend
    select(".legend-cities")
      .style("display", "none");
    select(".legend-countries")
      .style("display", "flex");

  };

  const displayCities = () => {

    isCountryMap = false;

    // Remove country styles and events
    selectAll(".path-mercator")
      .on("mouseenter", null)
      .on("leave", null)
      .transition()
      .attr("fill", "#f8fcff");

    // Show birth cities
    svg
      .selectAll(".circle-city")
      .data(birthCities)
      .join("circle")
        .attr("class", "circle-city")
        .attr("cx", d => projection([d.longitude, d.latitude])[0])
        .attr("cy", d => projection([d.longitude, d.latitude])[1])
        .attr("fill", "#35a7c2")
        .attr("fill-opacity", 0.5)
        .attr("stroke", "#35a7c2");

    updateCityCircles();

    // Show related legend
    select(".legend-countries")
      .style("display", "none");
    select(".legend-cities")
      .style("display", "block");
    
  };

  // Listen to radio buttons selection
  selectAll("input#countries, input#cities")
    .on("click", e => {
      if (e.target.id === "countries") {
        displayCountries();
      } else if (e.target.id === "cities") {
        displayCities();
      }
    });

  // On project load, display countries
  displayCountries();

  // Handle zoom
  const zoomHandler = zoom()
    .scaleExtent([1, 5])
    .translateExtent([[-width/2, -height/2], [3*width/2, 3*height/2]])
    .on("zoom", (e) => {
      console.log(e);
      svg
        .attr("transform", e.transform);

      if (select("#map-reset").classed("hidden")) {
        select("#map-reset")
          .classed("hidden", false);
      }
    });
  select(".map-container")
    .call(zoomHandler);

  select("#map-reset")
    .attr("class", "hidden")
    .on("click", () => {
      select(".map-container")
        .transition()
        .call(zoomHandler.transform, zoomIdentity);
    });


  // Add years selector
  const yearsWidth = 1000;
  const yearsHeight = 80;
  const yearsMargin= { top: 0, right: 10, bottom: 0, left: 0 };
  const yearsInnerWidth = yearsWidth - yearsMargin.right - yearsMargin.left;

  const xScale = scaleLinear()
    .domain([minYear, maxYear])
    .range([0, yearsInnerWidth]);

  const yearsSelector = select("#years-selector")
    .append("svg")
      .attr("viewBox", `0 0 ${yearsWidth} ${yearsHeight}`);

  const xAxisGenerator = axisBottom(xScale)
    .tickFormat(format(""))
    .tickSizeOuter(0);;
  yearsSelector
    .append("g")
      .attr("class", "axis-x")
      .attr("transform", `translate(0, 30)`)
      .call(xAxisGenerator);

  const handleBrush = (e) => {
    console.log(e);

    brushMin = Math.round(xScale.invert(e.selection[0]));
    brushMax = Math.round(xScale.invert(e.selection[1]));

    if (isCountryMap) {
      updateCountryFills();
    } else {
      updateCityCircles();
    }
  };

  const brushHandler = brushX() // Always capture the full height with the brush
    .extent([[0, 0], [yearsInnerWidth, yearsHeight]]) // Initialize the brush area
    .on("brush", handleBrush);
  yearsSelector
    .call(brushHandler)
    .call(brushHandler.move, [xScale(minYear), xScale(maxYear)]); // Initial brushed zone
  // Note that can also pan and resize area!

};