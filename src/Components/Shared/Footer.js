import {cecl} from '../Helpers/domHelper'
import "./footer.scss"
const Footer = () => {
    let footer = cecl('footer', 'footer')
    footer.innerText = 'Website Mick Roth'
    return footer
}

export default Footer