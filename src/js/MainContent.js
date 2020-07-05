
import { cl, cecl, ca, qs } from './Helpers/domHelper'
import { Burger } from "./Burger"
import { MailTo } from './MailTo.js'

import { Footer } from './Footer'
import { MiniNav } from './MiniNav'



export const MainContent = () => {
    
    const mainContent = cecl('div', 'main-content')
    mainContent.appendChild(Burger())
    console.log(MailTo())
    mainContent.appendChild(MailTo())
   
    console.log(MiniNav())
    return mainContent

}