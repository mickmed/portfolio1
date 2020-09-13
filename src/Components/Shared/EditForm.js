import { Form, Input, Button, Checkbox, Label } from "./Form.js"
import { getTechnologies } from "../Services/ApiTech.js"
import {
  getProject,
  addProject as addNewProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Projects } from "../Projects/Projects.js"

export const EditForm = async (projectWrap, project,addProject) => {
  /******************
  MAKE AND SET INPUTS
  *******************/
console.log('add', addProject)
  if(addProject === 'addProject'){
   for(let item in project){
    project[item] = ''
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
        value: addProject === 'addProject' ? '' : newProject[key],
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
    addProject === '' && project.technologies.forEach((projectTechnology) => {
      if (technology.name === projectTechnology.name) {
        checked = "checked"
      }
    })
    let bx = Checkbox(
      "edit-project-chkbox",
      technology.name,
      "tech-box",
      addProject === 'addProject' ? '' : technology.id,
      addProject === 'addProject' ? '' : checked,
      
    )
    form.appendChild(Label("tech-box-label", technology.name, "tech-box"))
    form.appendChild(bx)
  })
  form.appendChild(Button("edit-project-button", "submit", "edit project"))
  projectWrap.appendChild(form)

  /**********
   SUBMIT FORM
  ***********/
 console.log('add', addProject)

  form.addEventListener("submit", async (evt) => {
    evt.preventDefault()
    console.log('add', addProject)

    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked")
    newProject.technologies = []
    checkboxes.forEach((box) => {
      newProject.technologies.push(box.value)
    })
    console.log('add', addProject)
    addProject === 'addProject' ? await addNewProject(newProject) : await updateProject(newProject, project.id)

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
