
import { cl, cecl, ca, qs } from '../Helpers/domHelper'
import { Burger } from "../Shared/Burger.js"
import { MailTo } from '../Shared/MailTo.js'

import { Footer } from '../Shared/Footer.js'
import "./mainContent.scss"


export const MainContent = () => {
    
    const mainContent = cecl('div', 'main-content')
    mainContent.appendChild(Burger())
    console.log(MailTo())
    mainContent.appendChild(MailTo())

    while (mainContent.childNodes.length > 2) {
        mainContent.removeChild(mainContent.lastChild)
      }
      let projects = mainContent.appendChild(cecl("div", "projects"))
   
    // console.log(MiniNav())
    return mainContent

}