import { cl, cecl, ca, qs } from "../Helpers/domHelper"
import { Burger } from "../Shared/Burger.js"
import { MailTo } from "../Shared/MailTo.js"
import { Router } from '../../Router/Router.js'

import { Footer } from "../Shared/Footer.js"
import "./mainContent.scss"

export const MainContent = () => {
  const mainContent = cecl("div", "main-content")
  mainContent.appendChild(Burger())
  console.log(MailTo())
  mainContent.appendChild(MailTo())

  mainContent.appendChild(cecl("div", "main-content-scrollable"))



  
  return mainContent
}
