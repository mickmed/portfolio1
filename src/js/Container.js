import { Sidebar } from "./Sidebar.js"
import { MainContent } from "./MainContent.js"
import { verify } from './Helpers/apiHelper.js'

import { cl, cecl, ce, ca, ac, qs } from "./Helpers/domHelper"

import { Router } from "../Router/Router.js"
// import * as Home from './home.js'

export const Container = () => {
  const container = cecl("div", "container")

  container.appendChild(Sidebar())
  container.appendChild(MainContent())
  



  // let getCurrentUser = async() => {
  //     let user = await verify()
  //     console.log(user)
  //     return user
  // }
  // let currentUser = getCurrentUser()
  // console.log('jwt', localStorage.getItem('authToken'))
  Router()
 
  return container
}
