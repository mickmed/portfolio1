import { cecl } from './domHelper.js'

export const Form = (obj, handleChange) => {
   
  let form = cecl(`form`, `add-project-form`)
  let inputs = Object.keys(obj)
  
  inputs.map((el) => {
    let input = cecl(`input`, `add-project-name`)
    form.appendChild(input)
    input.name = el
    input.value = obj ? obj[el] : ''
    input.placeholder = el

    input.addEventListener(`keyup`, (e) => {
      handleChange(e)

    })

    
  })




  
  return form
}
