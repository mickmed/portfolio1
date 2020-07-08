import {cecl} from '../Helpers/domHelper.js'

export const Checkbox = (obj, el, checked) => {

    let chkBox = cecl("input", "tech-chkBox")
        chkBox.type = "checkbox"
        chkBox.id = "tech-chkBox"
        chkBox.name = obj.name
        chkBox.value = el.id
        checked === 'checked' && chkBox.setAttribute("checked", "")


       

        return chkBox
}