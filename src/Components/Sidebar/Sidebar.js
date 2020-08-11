import { cl, cecl, ca, qs } from "../Helpers/domHelper"
import { Header } from "../Header/Header.js"
import { Navbar } from "../Navbar/Navbar.js"

import "./sidebar.scss"

// import { waveSVG } from "../waveSVG.js"

export const Sidebar = () => {
  const sidebar = cecl("div", "sidebar")
  sidebar.appendChild(Header())

  sidebar.appendChild(Navbar())

  // sidebar.appendChild(waveSVG())

  // let pic = cecl("object", "leaf-pic")
  // pic.type = "image/svg+xml"
  // pic.data = "../src/img/oliveLeaves.svg"
  // sidebar.appendChild(pic)

  return sidebar
}
