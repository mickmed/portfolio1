import { cecl, makeElement, qs } from "./Helpers/domHelper"
import { Router } from "../Router/Router"

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

      // console.log(Object.keys(array[i]))
      // let iconClass = Object.keys(array[i])[0] === "about" ? "far" : "fas"
      // // console.log(iconClass)
      // icon.classList.add(iconClass)
      // if (type === Object.keys(array[i])[0]) {
      //   let moreText = data
      //     ? ce("div", "more-text", div, { innerText: " - " + ext })
      //     : document.createTextNode(" ")
      //   div.appendChild(moreText)
      //   div.style.color = "yellow"
      // div.style.position = "absolute"
      // div.style.top = 0
      // div.style.left = '2%'
    })

    return nav
  }

  return render()
}
