import { cecl, makeElement, qs } from "./Helpers/domHelper"
import { Router } from "../Router/Router"


export function Navbar(parentDiv, data, type = "about") {
 
  const array = [
  
    { about: "fa-address-card" },
    { resume: "fa-address-card" },
    { projects: "fa-project-diagram" },
    
  ]

  let render = () => {
   

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
       
        for(let i=0;i<nav.children.length;i++){
          nav.children[i].firstChild.style.color = 'white'
          nav.children[i].firstChild.style.fontWeight = '400'

        }
        e.target.style.color = 'yellow'
        e.target.style.fontWeight = '600'
              
        let mainContent = qs(".main-content")
        mainContent.innerHTML = ""
                 
        // while (mainContent.lastElementChild) {
        //   x.removeChild(mainContent.lastElementChild);
        // }
        
        Router(Object.keys(array[i])[0])
        // router.navigate('resume')
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

//   div.addEventListener("click", e => {
//     //  console.log('keys', Object.keys(array[i])[0])
//     if (Object.keys(array[i])[0] === "projects") {

//       render("projects")
//       // technologies('technologies')
//       projects("projects")
//     }
//     if (Object.keys(array[i])[0] === "about") {
//       render("about")
//       about()
//       // aboutAside()
//     }
//     if (Object.keys(array[i])[0] === "resume") {
//       render(Object.keys(array[i])[0])
//       resume()
//       // resumeAside()
//     }
//     let spliced = array.splice(array.indexOf(e.target.innerText), 1)
//     array.push(spliced[0])
//   })
// })
// }
// render(type, data)
// }
