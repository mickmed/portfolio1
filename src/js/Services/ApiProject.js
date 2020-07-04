import { BaseUrl} from '../Services/BaseUrl.js'
const baseUrl = BaseUrl()


export let getProjects = async (type) => {
  let results = await fetch(`${baseUrl}/projects`)
    .then((res) => {
      
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
 
  }

  export const deleteProject = async (id) => {

  
   
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


export const updateProjectTechnologies = async(project_id, id)=>{
  console.log('upt')
  const res = await fetch(`${baseUrl}/projects/${project_id}/technologies/${id}`, {
    method: `put`,
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