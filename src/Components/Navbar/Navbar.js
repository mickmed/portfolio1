import { cecl, makeElement, qs } from "../Helpers/domHelper"
import { Router } from "../../Router/Router"
import "./navbar.scss"

export function Navbar(parentDiv, data, type = "about") {
  const array = [
    { about: "fa-address-card" },
    { resume: "fa-address-card" },
    { projects: "fa-project-diagram" },
  ]

  let render = () => {
    // sidebar.style.display = 'none'
    let nav = cecl("div", "navbar")

    array.forEach((opt, i) => {
      let div = cecl("div", "option")
      nav.appendChild(div)

      let text = cecl("div", "text")
      let a = cecl("a", "link")

      a.innerText = Object.keys(array[i])
      a.setAttribute("href", Object.keys(array[i]))

      div.appendChild(a)

      a.addEventListener("click", (e) => {
        e.preventDefault()
        // console.log(nav.children)
        for (let i = 0; i < nav.children.length; i++) {
          nav.children[i].firstChild.style.color = "white"
          nav.children[i].firstChild.style.fontWeight = "400"
        }
        e.target.style.color = "yellow"
        e.target.style.fontWeight = "600"

        Router(Object.keys(array[i])[0])
       
      })

    })

    return nav
  }

  return render()
}
