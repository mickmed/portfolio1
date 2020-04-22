import "./Helpers/Image"
import { qs, cecl } from "./Helpers/domHelper"
import { getResults } from "./Helpers/apiHelper"

// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function About() {


  let text =
  "I am an Instructional Associate for the Software Engineering Immersive program at General Assembly's New York campus. I also freelance as a React Developer. Recently, I had the pleasure of working on the data vizualization components for the 100million Project, which launched on CSPAN February 2019.I am an Instructional Associate for the Software Engineering Immersive program at General Assembly's New York campus. I also freelance as a React Developer. Recently, I had the pleasure of working on the data vizualization components for the 100million Project, which launched on <span>CSPAN February 2019.</span>"

let text1 =
  "Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate."

let text2 =
  "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox.This site was built with Vanilla Javascript and comprizes of a Rails backend deployed on Google App Engine. Images are stored using Rails Active Storage."
  console.log("ABOUT")
  let mainContent = qs(".main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = ""
  // let paraWrap = cecl("div", "para-wrap")

  let about = mainContent.appendChild(cecl("div", "about"))

  let paraWrap = about.appendChild(cecl("div", "para-wrap"))
  // paraWrap.classList.add("proj-wrap")
 
  let description = paraWrap.appendChild(cecl("div", "text"))
  description.innerHTML =
    text

  

  console.log(qs('.text'))

  let project = paraWrap.appendChild(cecl("div", "project-img"))
  project.classList.add("projectCard")

  
  let imgWrapper = project.appendChild(cecl("div", "img-wrapper"))
  
  
  imgWrapper.addEventListener('click', e=>{
    console.log('here')
    window.open('https://the100million.org/', '_blank')
    // target = "_blank"
  })

  let img = project.childNodes[0].appendChild(cecl("img", "img"))
  img.src = "src/img/100mill8.png"

  // console.log(e.local_url)

  let description1 = paraWrap.appendChild(cecl("div", "text"))
  description1.innerText =
    text1

    let description2 = paraWrap.appendChild(cecl("div", "text"))
  description2.innerText =
    text2
}
