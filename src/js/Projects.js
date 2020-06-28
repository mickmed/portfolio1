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
  console.log('res', res)
  let type = "project"
  res.forEach((e, i) => {
    if (e.name === "hi" || e.name === "Mental Math") {
      console.log("trees", e)
      let paraWrap = projects.appendChild(cecl("div", "para-wrap"))

      let image = Image(`src/img/${e.img_url}`, e.name, true, e.site_url)
      let projectImg=qs('.project-img')
      // console.log(projectImg)
      if(projectImg){
        projectImg.style.justifyContent = 'flex-start'
      } 
      
      paraWrap.appendChild(image)
    }
  })
}
