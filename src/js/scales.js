import { scaleSequential } from "d3-scale";
import { interpolateYlGnBu } from "d3-scale-chromatic";

export const getCountryColor = (numLaureates) => {
  const countryColorScale = scaleSequential(interpolateYlGnBu)
    .domain([0, 100])

  return countryColorScale(numLaureates);
};
