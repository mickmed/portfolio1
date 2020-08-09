import "../Shared/Image"
import { qs, qsa, cecl, btn } from "../Helpers/domHelper"
import { verify } from "../Services/ApiAuth.js"
import { getTechnologies } from "../Services/ApiTech.js"
import { Checkbox } from "../Shared/Checkbox.js"
import { Image } from "../Shared/Image.js"
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Form } from "../Shared/Form.js"
import "./projects.scss"
// import "../../img/trees5.png"
// import "../../img/sm_my-travelogue.png"
// import "../../img/sm-trees.png"
// import "../../img/sm_trees-of-nyc.png"
// import "../../img/trees-mobile.png"
// import "../../img/sm_math-game.png"
// import "../../img/nyc-trees.png"
// import "../../img/nyc-trees1.png"
// import "../../img/math-game.png"
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
  }

  res.forEach(async (e, i) => {
    let paraWrap = projects.appendChild(cecl("div", "para-wrap"))
    let image = paraWrap.appendChild(
      Image(`src/img/${e.img_url}`, e.name, true, e.site_url)
    )
    let sub = { subtitle: e.subtitle }

    let z = "false"

    console.log(window.innerWidth)

    // ****IMAGE CLICK FOR MOBILE**** //
    // let imgWrapper = paraWrap.firstChild.firstChild

    let linkModal = cecl("div", "link-modal")
    let imgWrapper = qsa(".img-wrapper")
    let innerImgWrap = qsa(".inner-img-wrap")

    if (window.innerWidth < 600) {
      imgWrapper[i].addEventListener("click", async () => {
        if (z === "true") {
          z = "false"

          innerImgWrap[i].classList.add("close-curtain")
          innerImgWrap[i].classList.remove("open-curtain")
         

          imgWrapper[i].lastChild.remove()
        } else if (z === "false") {
          z = "true"

          innerImgWrap[i].classList.add("open-curtain")
          innerImgWrap[i].classList.remove("close-curtain")

          imgWrapper[i].appendChild(linkModal)
        }
        console.log(z)
        console.log(innerImgWrap[i])
      })

      //   let linkModalIcons = linkModal.appendChild(
      //     cecl("div", "link-modal-icons")
      //   )
      //   linkModalIcons.innerHTML =
      //     '<i class="fab fa-github"></i><i class="fas fa-home fa-fw"></i>'
      //   const typing = async (str) => {
      //     if (i < e.subtitle.length) {
      //       linkModal.innerHTML += e.subtitle.charAt(i)
      //       linkModal.style.opacity = i / e.subtitle.length

      //       for (let j = 0; j < linkModalIcons.length; j++) {
      //         linkModalIcons[j].style.opacity = i / e.subtitle.length
      //       }
      //       i++
      //       await setTimeout(typing, 25)
      //     }
      //   }

      //   let s = await typing()
    } else {
      // ****IMAGE HOVER FOR TABLET AND DESKTOP****//
      let hover = paraWrap.addEventListener("mouseover", async () => {
        qs(".inner-img-wrap").classList.add("inner-img-wrap-hover")

        paraWrap.appendChild(linkModal)
      })

      let hoverOut = paraWrap.addEventListener("mouseout", () => {
        let x = qs(".link-modal")

        console.log(x)
        x && paraWrap.lastChild.remove()
      })
    }

    ///If Logged In///
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
      let addform = projects.appendChild(Form(res[0], handleChange))
      addform.appendChild(btn("add project", "submit", "add-project-btn"))
      addform.addEventListener("submit", async (e) => {
        e.preventDefault()
        await addProject(body)
        await Projects()
      })
    }
  })
}
