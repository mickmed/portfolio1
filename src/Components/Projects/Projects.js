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
import { EditForm } from "../Shared/EditForm"
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
  let mainContentScrollable = qs(".main-content-scrollable")
  clearPage(mainContentScrollable)
  let loading = ac(mainContentScrollable, cecl("div", "loading"))
  loading.innerHTML = "loading..."

  /**************
  RENDER PROJECTS
  ***************/
  clearPage(mainContentScrollable)
  const resp = await getProjects()
  resp.forEach(async (project, index) => {
    let projectWrap = mainContentScrollable.appendChild(
      cecl("div", "project-wrap")
    )
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
        if (projectWrap.lastChild.className === "show-edit-form")
          EditForm(projectWrap, project)
        else {
          projectWrap.lastChild.remove()
        }
      })
      projectWrap.appendChild(btn)
    }
  })
  if (await verify()) console.log("here")
  let addBtn = Button("add-edit-form", "submit", "add project")
  addBtn.addEventListener("click", () => {
    EditForm(mainContentScrollable, resp[0], 'addProject')
  })
  ac(mainContentScrollable, addBtn)
}
