import { getResults } from '../Helpers/apiHelper.js'
import BaseUrl from './BaseUrl.js'



export const addProject = async (body) => {
  console.log(JSON.stringify(body))
  const res = await fetch(`${BaseUrl}/projects`, {
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
    const res = await fetch(`${BaseUrl}/projects/${id}`, {
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
   
    const res = await fetch(`${BaseUrl}/projects/${id}`, {
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