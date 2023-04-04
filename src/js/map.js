import { select, selectAll } from "d3-selection";
import { geoEqualEarth, geoPath, geoGraticule } from "d3-geo";
import { transition } from "d3-transition";
import { max } from "d3-array";
import { countryColorScale, getCityRadius } from "./scales";
import cities from "../data/cities.json";

export const drawMap = (laureates, countries) => {

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
  // console.log(cities)
  // laureates.forEach(laureate => {
  //   if (laureate.birth_country !== "" && laureate.birth_city !== "") {
  //     const city = cities.find(c => c.name === laureate.birth_city && c.country === laureate.birth_country_code);
  //     laureate["birt_city_latitude"] = city.lat;
  //     laureate["birt_city_longitude"] = city.lng;
  //   }
  // });

  // const key = "1yBIkguJRyW3ydYPlTE3Gg==g5W0pQxghNrKpRqI";
  // async function fetchData(city, country) {
  //   const url = 'https://api.api-ninjas.com/v1/geocoding?city=' + city + '&country=' + country;
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     headers: { 'X-Api-Key': key},
  //     contentType: 'application/json',
  //     });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  
  // laureates.forEach(laureate => {
  //   fetchData(laureate.birth_city, laureate.birth_country_code).then((data) => {
  //     laureate["latitude"] = data[0].latitude;
  //     laureate["longitude"] = data[0].longitude;
  //     console.log(laureate)
  //     console.log(data);
  //   });
  // });

  // Dimensions
  const width = 1400;
  const height = 700;

  // Append SVG container
  const svg = select("#map")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // Define projection
  const projection = geoEqualEarth()
    .scale(250)
    .translate([width/2, height/2]);

  // Initialize the path generator
  const geoPathGenerator = geoPath()
    .projection(projection);

  // Append graticules
  const graticule = geoGraticule();

  const graticules = svg
    .append("g")
      .attr("fill", "transparent")
      .attr("stroke", "#242424")
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
      .attr("stroke", "#242424")
      .attr("stroke-opacity", 0.5)
      

  // Display laureates' countries
  const displayCountries = () => {

    // Color birth countries
    selectAll(".path-mercator")
      .on("mouseenter", (e, d) => {
        select("#map-tooltip")
          .text(`${d.properties.name}, ${d.properties.laureates ? d.properties.laureates.length : 0} laureates`)
          .transition()
          .style("opacity", 1);
      })
      .on("mouseleave", () => {
        select("#map-tooltip")
          .transition()
          .style("opacity", 0);
      })
      .transition()
      .attr("fill", d =>  d.properties.laureates
        ? countryColorScale(d.properties.laureates.length)
        : "#f8fcff");
  };

  const displayCities = () => {

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
        .attr("r", d => getCityRadius(d.laureates.length, maxLaureatesPerCity))
        .attr("fill", "#4cb7c1")
        .attr("fill-opacity", 0.4)
        .attr("stroke", "#4cb7c1");
    
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

};