import { cecl } from './Helpers/domHelper'


export const waveSVG = () => {
   
    let svg = cecl("object", "wave-svg")
    svg.setAttribute('type', 'image/svg+xml')
    svg.setAttribute('data', '../src/img/wave1.svg')
    // mainDiv.appendChild(svg)
    // , mainDiv, {type:"image/svg+xml", data:"../img/waveSVG.svg"})
    // console.log(svg)
    return svg
}