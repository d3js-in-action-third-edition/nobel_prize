import { select } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";

export const drawMap = (laureates, countries) => {

  // Perform calculations

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

  // Append country paths
  svg
    .selectAll(".path-mercator")
    .data(countries.features)
    .join("path")
      .attr("class", "countries path-mercator")
      .attr("d", geoPathGenerator);

};