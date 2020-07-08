import "../Shared/Image"
import { qs, qsa, cecl, Image, btn } from "../Helpers/domHelper"
import { verify } from "../Services/ApiAuth.js"
import { getTechnologies } from "../Services/ApiTech.js"
import { Checkbox } from "../Shared/Checkbox.js"
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Form } from "../Shared/Form.js"
import "./projects.scss"


export async function Projects() {
  let mainContent = qs(".main-content")
  while (mainContent.childNodes.length > 2) {
    mainContent.removeChild(mainContent.lastChild)
  }
  let projects = mainContent.appendChild(cecl("div", "projects"))
  let res = await getProjects()
  console.log(res)
  let body = {}

  let handleChange = (e) => {
    body[e.target.name] = e.target.value

    return "blonga"
  }
  


  res.forEach(async (e, i) => {
    let paraWrap = projects.appendChild(cecl("div", "para-wrap"))
    let x = paraWrap.appendChild(
      Image(`src/img/${e.img_url}`, e.name, true, e.site_url)
    )
    console.log(x.childNodes[0].childNodes[0].childNodes[0])

    if (await verify()) {
      let form = paraWrap.appendChild(Form(e, handleChange))
      form.appendChild(btn("update project", "submit", "update-btn"))

      let technologies = await getTechnologies()

      technologies.map((el) => {
        let checked

        e.technologies.forEach((pTech) => {
          console.log(pTech.name)
          if (pTech.name === el.name) {
            checked = "checked"
          }
        })
        let chkBox = Checkbox(e, el, checked)
        form.appendChild(chkBox)

        let label = cecl("label", "tech-label")
        label.for = "tech-chkBox"
        label.innerHTML = el.name

        form.appendChild(label)
      })
      console.log(e)

      form.addEventListener("submit", async (evt) => {
        evt.preventDefault()

        let boxes = document.getElementsByName(e.name)
        let boxesArray = []
        boxes.forEach((el) => {
          el.checked && boxesArray.push(el.value)
        })

        console.log(boxesArray)

        body = { ...e, ...body }
        delete body.id
        delete body.created_at
        delete body.updated_at
        delete body.technologies

        body = { project: body, technologies: boxesArray }

        let shoonga = await updateProject(body, e.id)
        console.log(shoonga, body)
        await Projects()
      })

      let deletebutton = paraWrap.appendChild(
        btn("delete project", "button", "delete-btn")
      )
      deletebutton.addEventListener("click", async (evt) => {
        evt.preventDefault()
        await deleteProject(e.id)
        await Projects()
      })
    }
  })

  let x = qsa(".img")
  console.log(document.getElementsByClassName(".img"))
  x.forEach((el) => {
    console.log(el.innerHeight)
  })

  // ADD PROJECT
  let form = projects.appendChild(Form(res[0], handleChange))
  form.appendChild(btn("add project", "submit", "add-project-btn"))
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    await addProject(body)
    await Projects()
  })

  //
}
