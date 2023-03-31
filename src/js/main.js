import { drawMap } from "./map";

import countries from "../data/world.geojson";
import laureates from "../data/laureates.json";

console.log("countries", countries);
console.log("laureates", laureates);

drawMap(laureates, countries);