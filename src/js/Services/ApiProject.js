import { BaseUrl} from '../Services/BaseUrl.js'
const baseUrl = BaseUrl()
console.log(baseUrl)



export let getProjects = async (type) => {
  let results = await fetch(`${baseUrl}/projects`)
    .then((res) => {
      console.log(res.json)
      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return type, results
}



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