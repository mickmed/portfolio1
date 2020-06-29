import { cecl } from './domHelper.js'

export const Form = (body, inputs, e) => {
  let form = cecl(`form`, `add-project-form`)

  inputs.map((el) => {
    let input = cecl(`input`, `add-project-name`)
    form.appendChild(input)
    input.name = el
    input.value = e ? e[el] : ''

    input.placeholder = el

    input.addEventListener(`keyup`, (e) => {
      body.project[e.target.name] = e.target.value
    })
  })
  return form
}
