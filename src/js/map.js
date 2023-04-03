import { select } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";
import { transition } from "d3-transition";
import { getCountryColor } from "./scales";

export const drawMap = (laureates, countries) => {

  // Perform calculations
  laureates.forEach(laureate => {
    if (laureate.birth_country !== "") {
      const country =  countries.features.find(f => f.properties.name === laureate.birth_country);
      if (country.properties.laureates) {
        country.properties.laureates.push(laureate);
      } else {
        country.properties["laureates"] = [laureate];
      }
    }
  });

  // Dimensions
  const width = 1400;
  const height = 800;

  // Append SVG container
  const svg = select("#map")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // Define projection
  const projection = geoEqualEarth()
    .scale(300)
    .translate([width/2, height/2]);

  // Initialize the path generator
  const geoPathGenerator = geoPath()
    .projection(projection);

  // Append country fills
  svg
    .selectAll(".path-mercator")
    .data(countries.features)
    .join("path")
      .attr("class", "countries path-mercator")
      .attr("d", geoPathGenerator)
      .attr("fill", d =>  d.properties.laureates
        ? getCountryColor(d.properties.laureates.length)
        : "#f8fcff")
      .attr("stroke", "#242424")
      .attr("stroke-opacity", 0.5)
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
      });

};