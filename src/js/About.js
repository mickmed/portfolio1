import "./Helpers/Image"
import { qs, cecl } from "./Helpers/domHelper"
import { getResults } from "./Helpers/apiHelper"

// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function About() {
  let text =
    "<a> I am an Instructional Associate for the Software Engineering Immersive program at <span class='ga'>General Assembly's</span> New York campus. I also freelance as a React Developer. Recently, I had the pleasure of working on the data vizualization components for <span class='onehunmill'>the 100 Million Project</span>, which launched on <span class='cspan'>CSPAN February 2020.</span></a>"

  let text1 =
    "Although I was a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at <span class='perscholas'>Per Scholas</span> in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate."

  let text2 =
    "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox. This site was built with Vanilla Javascript and comprizes of a Rails backend."
  console.log("ABOUT")
  let mainContent = qs(".main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = ""
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
  perScholas.addEventListener('click', ()=>{
    window.open('https://perscholas.org/', '_blank')
  })

  let description2 = paraWrap.appendChild(cecl("div", "text"))
  description2.innerHTML = text2
}
