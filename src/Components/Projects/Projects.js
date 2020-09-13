// import "../Shared/Image"
import { qs, qsa, cecl, ac, btn } from "../Helpers/domHelper"
import { verify } from "../Services/ApiAuth.js"
import { getTechnologies } from "../Services/ApiTech.js"
import { Image } from "../Shared/Image.js"

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"
import { EditProject } from "./EditProject"
import "./projects.scss"

/**********
 CLEAR PAGE
***********/
const clearPage = (element) => {
  while (element.childNodes.length) {
    element.removeChild(element.lastChild)
  }
}

export async function Projects() {
  let mainContent = qs(".main-content-scrollable")
  clearPage(mainContent)
  let loading = ac(mainContent, cecl("div", "loading"))
  loading.innerHTML = "loading..."

  /**************
  RENDER PROJECTS
  ***************/
  clearPage(mainContent)
  const resp = await getProjects()
  resp.forEach(async (project, index) => {
    let projectWrap = mainContent.appendChild(cecl("div", "project-wrap"))
    let image = projectWrap.appendChild(
      Image(`src/img/${project.img_url}`, project.name, true, project.site_url)
    )
    let bool = "false"
    let linkModal = cecl("div", "link-modal")

    let imgWrapper = qsa(".img-wrapper")
    let innerImgWrap = qsa(".inner-img-wrap")
    let techIcons = cecl("div", "tech-icons")
    project.technologies.forEach((icon) => {
      let techIcon = techIcons.appendChild(cecl("img", "tech-icon"))
      techIcon.src = `src/img/${icon.icon_url}`
    })
    linkModal.appendChild(techIcons)
    let linkModalIcons = linkModal.appendChild(cecl("div", "link-modal-icons"))
    linkModalIcons.innerHTML = `<a href=${project.site_url} target='_blank'><i class="fas fa-home fa-fw"></i></a>`

    /**************
    ADD LINK MODAL
    ***************/
    imgWrapper[index].addEventListener("click", async () => {
      if (bool === "true") {
        bool = "false"
        innerImgWrap[index].classList.add("close-curtain")
        innerImgWrap[index].classList.remove("open-curtain")
        imgWrapper[index].lastChild.remove()
      } else if (bool === "false") {
        bool = "true"
        innerImgWrap[index].classList.add("open-curtain")
        innerImgWrap[index].classList.remove("close-curtain")
        imgWrapper[index].appendChild(linkModal)
        // let styleElem = document.head.appendChild(document.createElement("style"));
        // styleElem.innerHTML = ".img-wrapper:before {animation: animate-img-wrapper 1.5s linear forwards;}"
        let iw = imgWrapper[index].style
        iw.setProperty(
          "--animation",
          "animate-img-wrapper 1.5s linear forwards"
        )
        innerImgWrap[index].appendChild(linkModalIcons)
      }
    })

    /************************
    EDIT PROJECT IF LOGGED IN 
    ************************/
    if (await verify()) {
      let btn = Button("show-edit-form", "submit", "update")
      btn.addEventListener("click", () => {
        console.log(projectWrap.lastChild.className)
        if (projectWrap.lastChild.previousSibling.className === "show-edit-form")
          EditProject(projectWrap, project)
        else {
          projectWrap.lastChild.remove()
        }
      })
      projectWrap.appendChild(btn)
    }

 /************************
  DELETE PROJECT BUTTON
  ************************/
 let btn = Button("delete-project", "submit", "delete")
 btn.addEventListener("click", async () => {
   await deleteProject(project.id)
   await Projects()
 })
 projectWrap.appendChild(btn)

  })
  /***********
  ADD PROJECT 
  ************/
  console.log("here")
  if (await verify()) {
    let addBtn = Button("show-add-form", "submit", "add project")
    addBtn.addEventListener("click", () => {
      console.log(mainContent.lastChild.className)
      if (mainContent.lastChild.className === "show-add-form")
        EditProject(mainContent, resp[0], "addProject")
      else {
        mainContent.lastChild.remove()
      }
    })

    ac(mainContent, addBtn)
  }
 

}
