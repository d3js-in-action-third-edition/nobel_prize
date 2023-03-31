import { select } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";

export const drawMap = (laureates, countries) => {

  console.log(countries.features.find(c => c.properties.name.includes("Taiwan")))

  // Perform calculations
  laureates.forEach(laureate => {
    if (laureate.birth_country !== "") {
      console.log(laureate.birth_country);
      const country =  countries.features.find(f => f.properties.name === laureate.birth_country);
      if (country.laureates) {
        country.laureates.push(laureate);
      } else {
        country["laureates"] = [laureate];
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

  // Append country paths
  svg
    .selectAll(".path-mercator")
    .data(countries.features)
    .join("path")
      .attr("class", "countries path-mercator")
      .attr("d", geoPathGenerator);

};