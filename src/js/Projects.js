import './Helpers/Image'
import { qs, cecl, Image, btn } from './Helpers/domHelper'
import { getResults } from './Helpers/apiHelper.js'
import { verify } from './Services/ApiAuth.js'

import { addProject, updateProject, deleteProject } from './Services/ApiProject.js'
import { Form } from './Helpers/Form.js'

export async function Projects() {
  console.log('PROJECTS')
  let mainContent = qs('.main-content')
  while (mainContent.childNodes.length > 1) {
    mainContent.removeChild(mainContent.lastChild)
  }

  let projects = cecl('div', 'projects')
  mainContent.appendChild(projects)
  let res = await getResults()

  let body = { project: {} }
  let inputs = ['name', 'site_url', 'img_url']
  res.forEach(async (e, i) => {
    let paraWrap = projects.appendChild(cecl('div', 'para-wrap'))

    // let image = Image(`src/img/${e.img_url}`, e.name, true, e.site_url)

    paraWrap.appendChild(Image(`src/img/${e.img_url}`, e.name, true, e.site_url))
console.log(await(verify()))
    if (await verify()) {
      
      let form = paraWrap.appendChild(Form(body, inputs, e))
      form.appendChild(btn('update project', 'submit', 'update-btn'))

      form.addEventListener('submit', async (evt) => {
        evt.preventDefault()
        await updateProject(body, e.id)
        await Projects()
      })

      let deletebutton = paraWrap.appendChild(
        btn('delete project', 'button', 'delete-btn')
      )

      deletebutton.addEventListener('click', async (evt) => {
        evt.preventDefault()
        await deleteProject(e.id)
        await Projects()
      })
    }
  })

  let form = projects.appendChild(Form(body, inputs))
  form.appendChild(btn('add project', 'submit', 'add-project-btn'))
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    await addProject(body)
    await Projects()
  })

  //
}
