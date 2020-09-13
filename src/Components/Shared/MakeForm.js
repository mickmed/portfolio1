import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"
import { getTechnologies } from "../Services/ApiTech.js"
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Projects } from '../Projects/Projects.js'

export const MakeForm = async (projectWrap, project) => {
  // console.log(params)
  /******************
      MAKE AND SET INPUTS
      *******************/
  let newProject = {}
  let handleChange = (e) => {
    newProject[e.target.name] = e.target.value
  }
  let form = Form("edit-project-form")
  Object.keys(project).forEach((key) => {
    if (
      key !== "id" &&
      key !== "technologies" &&
      key !== "created_at" &&
      key !== "updated_at"
    ) {
      newProject[key] = project[key]
      const input = Input({
        className: "update-project",
        name: key,
        type: "text",
        value: newProject[key],
        placeholder: key,
        handleChange: handleChange,
      })
      form.appendChild(input)
    }
  })

  /**************
     MAKE CHECKBOXES
     ***************/
  let technologies = await getTechnologies()
  technologies.map((technology) => {
    let checked
    project.technologies.forEach((projectTechnology) => {
      if (technology.name === projectTechnology.name) {
        checked = "checked"
      }
    })
    let bx = Checkbox(
      "edit-project-chkbox",
      technology.name,
      "tech-box",
      technology.id,
      checked
    )
    form.appendChild(Label("tech-box-label", technology.name, "tech-box"))
    form.appendChild(bx)
  })
  form.appendChild(Button("edit-project-button", "submit", "edit project"))
  projectWrap.appendChild(form)

  /**********
     SUBMIT FORM
     ***********/
  form.addEventListener("submit", async (evt) => {
    evt.preventDefault()
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked")
    newProject.technologies = []
    checkboxes.forEach((box) => {
      newProject.technologies.push(box.value)
    })
   console.log(newProject)
    await updateProject(newProject, project.id)
    await Projects()
  })

  // let deletebutton = projectWrap.appendChild(
  //   btn("delete project", "button", "delete-btn")
  // )
  // deletebutton.addEventListener("click", async (evt) => {
  //   evt.preventDefault()
  //   await deleteProject(project.id)
  //   await Projects()
  // })
}
