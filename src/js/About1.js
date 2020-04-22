import { Image } from "./Helpers/Image"
import { ce, qs, cecl } from "./Helpers/domHelper"

export function About() {
  let text =
    "I am an Instructional Associate for the Software Engineering Immersive program at General Assembly's New York campus. I also freelance as a React Developer. Recently, I had the pleasure of working on the data vizualization components for the 100million Project, which launched on CSPAN February 2019. JavascriptJavascriptJavascriptJavascriptJavascriptJavascript    Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate.Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate."

  let text1 =
    "Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate."

  let text2 =
    "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox.This site was built with Vanilla Javascript and comprizes of a Rails backend deployed on Google App Engine. Images are stored using Rails Active Storage."
    // console.log(parentDiv)
    let mainContent = qs(".main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = ""
    
 
  let about = mainContent.appendChild(cecl("div", "about"))
  // let paraWrap = about.appendChild(cecl("div", "para-wrap"))

  // let imgWrapper = cecl("div", "img-wrapper")
  // let image = Image("../src/img/100mill8.png", 'hundred-mill')
  // imgWrapper.appendChild(image)
  // about.appendChild(imgWrapper)
 
  let para = about.appendChild(cecl("div", "para"))
  let p = para.appendChild(cecl('p', 'p'))
  p.innerText = text
  // about.appendChild(para)


  // let paraWrap1 = about.appendChild(cecl("div", "para-wrap"))

  // let imgWrapper1 = cecl("div", "img-wrapper1")
  // let image1 = Image("../src/img/100mill8.png", 'hundred-mill')
  // imgWrapper1.appendChild(image1)
  // about.appendChild(imgWrapper1)

  // let para1 = cecl("div", "para")
  // para1.innerText = text
  // paraWrap1.appendChild(para1)

  // let pic = cecl("object", 'leaf-pic')
  //   pic.type = "image/svg+xml"
  // pic.data = "../src/img/oliveLeaves.svg"
  // paraWrap.appendChild(pic)

  // let paraWrap1 = ce("div", "para-wrap")
  // let para1 = ce("div", "para")

  // let pic1 = document.createElement("object")
  // pic1.classList.add("leaf-pic1")
  // pic1.type = "image/svg+xml"
  // pic1.data = "../src/img/oliveLeaves1.svg"
  // paraWrap1.appendChild(pic1)

  // let paraWrap2 = ce("div", "para-wrap", about)
  // let para2 = ce("div", "para", paraWrap2, { innerText: text2 })

  // let pic2 = document.createElement("object")
  // pic2.classList.add("leaf-pic2")
  // pic2.type = "image/svg+xml"
  // pic2.data = "../src/img/oliveLeaves.svg"
  // paraWrap2.appendChild(pic2)

  // paraWrap.addEventListener("mouseover", () => {
  //   let object = document.getElementsByClassName("leaf-pic")
  //   let svg = object[0].contentDocument
  //   let olive = svg.getElementById("olive")
  //   console.log("olive", olive.children[3])
  //   olive.children[3].style.animation = "fills 4s forwards"
  // })
  // paraWrap.addEventListener("mouseout", () => {
  //   let object = document.getElementsByClassName("leaf-pic")
  //   let svg = object[0].contentDocument
  //   let olive = svg.getElementById("olive")
  //   console.log("olive", olive.children[3])

  //   olive.children[3].style.animation = "empties 1s forwards"
  // })
  // return about
}
