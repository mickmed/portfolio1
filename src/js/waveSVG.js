import { cecl } from "./Helpers/domHelper"
// const anime = require("animejs")

export const waveSVG = () => {
  let svg = cecl("object", "wave-svg")
  svg.setAttribute("type", "image/svg+xml")
  svg.setAttribute("data", "../src/img/wav.svg")
  let svg1 = cecl('img', 'wave-svg')
  svg1.src = '../src/img/wav.svg'

     
  return svg
}
