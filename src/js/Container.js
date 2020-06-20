import { Sidebar } from "./Sidebar.js"
import { MainContent } from "./MainContent.js"

import { cl, cecl, ce, ca, ac, qs } from "./Helpers/domHelper"

import { Router } from "../Router/Router.js"
// import * as Home from './home.js'

export const Container = () => {
  const container = cecl("div", "container")

  container.appendChild(Sidebar())
  container.appendChild(MainContent())
  Router()
 
  return container
}
