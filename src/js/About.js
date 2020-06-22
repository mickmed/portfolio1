import "./Helpers/Image"
import { qs, cecl, Image } from "./Helpers/domHelper"
import { Footer } from "./Footer"

export async function About() {
  let text =
    "<a> I am an Instructional Associate for the Software Engineering Immersive program at <span class='ga'>General Assembly's</span> New York campus. I also freelance as a React Developer. I recently had the pleasure of working on the data vizualization components for <span class='onehunmill'>the 100 Million Project</span>, which launched on <span class='cspan'>CSPAN February 2020.</span></a>"

  let text1 =
    "With some self-taught experience, I graduated from the codeBridge program at <span class='perscholas'>Per Scholas</span> in 2018, and in turn General Assembly's Web Development Immersive program in 2019. For the past year I have worked as a Teaching Assistant and an Instructional Associate at General Assembly."

  let text2 =
    "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox. This site was built with Vanilla Javascript and comprizes of a Rails backend."
  console.log("ABOUT")
  const mainContent = qs(".main-content")
  console.log("hi", mainContent.childNodes)

  while (mainContent.childNodes.length > 1) {
    mainContent.removeChild(mainContent.lastChild)
  }

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



  let image = Image("src/img/100mill8.png", 'punk')

  image.addEventListener("click", (evt) => {
    window.open(e.site_url)
    target = "_blank"
  })
  paraWrap.appendChild(image)
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
