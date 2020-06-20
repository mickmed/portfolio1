import { cecl } from './Helpers/domHelper'

export const Burger = () => {

    let burger = cecl('div', 'burger')
    for(let i=0;i<3;i++){
        let div = cecl('div', 'line')
        burger.appendChild(div)
    }

    return burger
   



  
}