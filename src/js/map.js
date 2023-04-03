import { select, selectAll } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";
import { transition } from "d3-transition";
import { getCountryColor } from "./scales";
import cities from "../data/cities.json";

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
      .attr("fill", "#f8fcff")
      .attr("stroke", "#242424")
      .attr("stroke-opacity", 0.5)
      

  // Display laureates' countries
  const displayCountries = () => {
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
        ? getCountryColor(d.properties.laureates.length)
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

};