import "./Helpers/Image"
import { qs, cecl } from "./Helpers/domHelper"
import { Footer } from "./Footer"
import { Burger } from "./Burger"

// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function About() {
  let text =
    "<a> I am an Instructional Associate for the Software Engineering Immersive program at <span class='ga'>General Assembly's</span> New York campus. I also freelance as a React Developer. I recently had the pleasure of working on the data vizualization components for <span class='onehunmill'>the 100 Million Project</span>, which launched on <span class='cspan'>CSPAN February 2020.</span></a>"

  let text1 =
    "With some self-taught experience, I graduated from the codeBridge program at <span class='perscholas'>Per Scholas</span> in 2018, and in turn General Assembly's Web Development Immersive program in 2019. For the past year I have worked as a Teaching Assistant and an Instructional Associate at General Assembly."

  let text2 =
    "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox. This site was built with Vanilla Javascript and comprizes of a Rails backend."
  console.log("ABOUT")
  let mainContent = qs(".main-content")
  mainContent.innerHTML = ""

  let switchBurger = { showSidebar: true }
  let burger = cecl("div", "burger")
  for (let i = 0; i < 3; i++) {
    let div = cecl("div", "line")
    burger.appendChild(div)
  }
  mainContent.appendChild(burger)

  burger = qs(".burger")
 let sidebar = qs(".sidebar")
 console.log(sidebar)
  burger.addEventListener("click", () => {
    if (switchBurger.showSidebar === true) {
     
      sidebar.style.display = "block"

      let count = -100
      let slider = setInterval(() => {
        count += 10
        sidebar.style.transform = `translate(${count}%, 0)`
    
       
        if (count === 0) {
          clearTimeout(slider)
          switchBurger.showSidebar = false
        }else{
          console.log('counter', 100/count)
          mainContent.style.width = `${-1000/count}%`

        }
      }, 40)
    } else {
      let count = 10
      let slider = setInterval(() => {
        count -= 10
        sidebar.style.transform = `translate(${count}%, 0)`
        console.log('count ', -count)
        mainContent.style.width = `${-count}%`
        if (count === -100) {
          console.log("here", sidebar)
          sidebar.style.display = "none"
          clearTimeout(slider)
          switchBurger.showSidebar = true
        }
      }, 40)
    }
  })

  // let paraWrap = cecl("div", "para-wrap")

  let about = mainContent.appendChild(cecl("div", "about"))

  let paraWrap = about.appendChild(cecl("div", "para-wrap"))

  let description = paraWrap.appendChild(cecl("div", "text"))
  description.innerHTML = text

  let ga = qs(".text .ga")
  ga.style.color = "blue"
  ga.style.cursor = "pointer"

  let cspan = qs(".text .cspan")
  cspan.style.color = "blue"
  cspan.style.cursor = "pointer"

  let oneHunMil = qs(".text .onehunmill")
  oneHunMil.style.color = "blue"
  cspan.style.cursor = "pointer"

  ga.addEventListener("click", () => {
    window.open("https://generalassemb.ly/", "_blank")
  })
  cspan.addEventListener("click", () => {
    console.log("here")
    window.open(
      "https://www.c-span.org/video/?469449-1/2020-elections-nonvoters/",
      "_blank"
    )
  })

  oneHunMil.addEventListener("click", () => {
    window.open("https://the100million.org/", "_blank")
  })

  let project = paraWrap.appendChild(cecl("div", "project-img"))

  let imgWrapper = project.appendChild(cecl("div", "img-wrapper"))
  // imgWrapper.style.transform = 'scale(1.5)'

  imgWrapper.addEventListener("click", (e) => {
    console.log("here")
    window.open("https://the100million.org/", "_blank")

    // target = "_blank"
  })

  let img = project.childNodes[0].appendChild(cecl("img", "img"))
  img.src = "src/img/100mill8.png"

  // console.log(e.local_url)

  let description1 = paraWrap.appendChild(cecl("div", "text"))
  description1.innerHTML = text1
  let perScholas = qs(".text .perscholas")
  perScholas.style.color = "blue"
  perScholas.style.cursor = "pointer"
  perScholas.addEventListener("click", () => {
    window.open("https://perscholas.org/", "_blank")
  })

  let description2 = paraWrap.appendChild(cecl("div", "text"))
  description2.innerHTML = text2
  about.appendChild(Footer())
}
