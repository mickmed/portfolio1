import "./Helpers/Image"
import { qs, cecl, Image } from "./Helpers/domHelper"
import { getResults } from "./Helpers/apiHelper"

// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function Projects() {
  console.log("PROJECTS")
  let mainContent = qs(".main-content")
  while (mainContent.childNodes.length > 1) {
    mainContent.removeChild(mainContent.lastChild)
  }

  let projects = cecl("div", "projects")
  mainContent.appendChild(projects)
  let res = await getResults()
  console.log(res)
  let type = "project"
  res["projects"].forEach((e, i) => {
    if (e.title === "NYC Trees" || e.title === "Mental Math") {
      // console.log("trees", e)
      let paraWrap = projects.appendChild(cecl("div", "para-wrap"))

      let projectImg = paraWrap.appendChild(cecl("div", "project-img"))

      let image = Image("src/img/100mill8.png", "https://the100million.org/")
      projectImg.appendChild(image)
    }
  })
}
