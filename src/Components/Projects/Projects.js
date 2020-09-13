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
import { MakeForm } from '../Shared/MakeForm'
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

    /***********
    IF LOGGED IN 
    ************/
    if (await verify()) {

      MakeForm(projectWrap, project)

      console.log('here')
      let btn = Button('btn', 'submit', 'submit')
      btn.addEventListener("click", () => {
        router.navigate("/products/list/2")
      })
      projectWrap.appendChild(btn)
      /******************
      MAKE AND SET INPUTS
      *******************/
      // let newProject = {}
      // let handleChange = (e) => {
      //   newProject[e.target.name] = e.target.value
      // }
      // let form = Form("edit-project-form")
      // Object.keys(project).forEach((key) => {
      //   if (
      //     key !== "id" &&
      //     key !== "technologies" &&
      //     key !== "created_at" &&
      //     key !== "updated_at"
      //   ) {
      //     newProject[key] = project[key]
      //     const input = Input({
      //       className: "update-project",
      //       name: key,
      //       type: "text",
      //       value: newProject[key],
      //       placeholder: key,
      //       handleChange: handleChange,
      //     })
      //     form.appendChild(input)
      //   }
      // })

      // /**************
      // MAKE CHECKBOXES
      // ***************/
      // let technologies = await getTechnologies()
      // technologies.map((technology) => {
      //   let checked
      //   project.technologies.forEach((projectTechnology) => {
      //     if (technology.name === projectTechnology.name) {
      //       checked = "checked"
      //     }
      //   })
      //   let bx = Checkbox(
      //     "edit-project-chkbox",
      //     technology.name,
      //     "tech-box",
      //     technology.id,
      //     checked
      //   )
      //   form.appendChild(Label("tech-box-label", technology.name, "tech-box"))
      //   form.appendChild(bx)
      // })
      // form.appendChild(Button("edit-project-button", "submit", "edit project"))
      // projectWrap.appendChild(form)

      // /**********
      // SUBMIT FORM
      // ***********/
      // form.addEventListener("submit", async (evt) => {
      //   evt.preventDefault()
      //   const checkboxes = document.querySelectorAll(
      //     "input[type=checkbox]:checked"
      //   )
      //   newProject.technologies = []
      //   checkboxes.forEach((box) => {
      //     newProject.technologies.push(box.value)
      //   })
      //   const projectId = project.id
      //   await updateProject(newProject, project.id)
      //   await Projects()
      // })

      // let deletebutton = projectWrap.appendChild(
      //   btn("delete project", "button", "delete-btn")
      // )
      // deletebutton.addEventListener("click", async (evt) => {
      //   evt.preventDefault()
      //   await deleteProject(project.id)
      //   await Projects()
      // })
    }
    // if (verify()) {
    //   let addform = mainContentScrollable.appendChild(
    //     Form('add-project-form')
    //   )
    //   addform.appendChild(btn("add project", "submit", "add-project-btn"))
    //   addform.addEventListener("submit", async (e) => {
    //     e.preventDefault()
    //     await addProject(body)
    //     await Projects()
    //   })
    // }
  })
}
