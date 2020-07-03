import { BaseUrl} from '../Services/BaseUrl.js'
const baseUrl = BaseUrl()



export const addProject = async (body) => {
  console.log(JSON.stringify(body))
  const res = await fetch(`${baseUrl}/projects`, {
    method: `post`,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      return data
    })
  console.log(res)
}


export const updateProject = async (body, id) => {
    console.log(JSON.stringify(body))
    const res = await fetch(`${baseUrl}/projects/${id}`, {
      method: `put`,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((json) => {
        return json.json()
      })
      .then((data) => {
        return data
      })
    console.log(res)
  }

  export const deleteProject = async (id) => {

    console.log('delete method')
   
    const res = await fetch(`${baseUrl}/projects/${id}`, {
      method: `delete`,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((json) => {
        return json.json()
      })
      .then((data) => {
        return data
      })
    console.log(res)
  }