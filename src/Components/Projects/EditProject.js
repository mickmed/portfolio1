import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"
import { getTechnologies } from "../Services/ApiTech.js"
import {
  getProject,
  addProject as addNewProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Projects } from "./Projects.js"

export const EditProject = async (projectWrap, project, addProject) => {
  /******************
  MAKE AND SET INPUTS
  *******************/
  console.log("add", addProject)
  if (addProject === "addProject") {
    for (let item in project) {
      project[item] = ""
    }
  }
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
        value: addProject === "addProject" ? "" : newProject[key],
        placeholder: key,
        handleChange: handleChange,
      })
      form.appendChild(input)
    }
  })

  /**************
   SET CHECKBOXES
  ***************/
  let technologies = await getTechnologies()
  technologies.map((technology) => {
    let checked
    addProject === undefined &&
      project.technologies.forEach((projectTechnology) => {
        if (technology.name === projectTechnology.name) {
          console.log(technology.name, projectTechnology.name)
          checked = "checked"
        }
      })
    let bx = Checkbox({
      className: "edit-project-chkbox",
      name: technology.name,
      id: "tech-box",
      value:  technology.id,
      checked: addProject === "addProject" ? "" : checked,

    })
    form.appendChild(Label("tech-box-label", technology.name, "tech-box"))
    form.appendChild(bx)
  })
  form.appendChild(
    Button(
      "edit-project-button",
      "submit",
      addProject === "addProject" ? "add new project" : "submit"
    )
  )


  projectWrap.appendChild(form)

  /**********
   SUBMIT FORM
  ***********/
  form.addEventListener("submit", async (evt) => {
    evt.preventDefault()
    console.log("add", addProject)

    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked")
    console.log(checkboxes)
    newProject.technologies = []
    checkboxes.forEach((box) => {
      newProject.technologies.push(box.value)
    })
    console.log("add", addProject)
    addProject === "addProject"
      ? await addNewProject(newProject)
      : await updateProject(newProject, project.id)

    await Projects()
  })
}
