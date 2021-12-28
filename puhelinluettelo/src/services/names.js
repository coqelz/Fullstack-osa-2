import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = (added) => {
    const request = axios.post(baseUrl, added)
    return request.then(response => response.data)
  }

  const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

  const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

  export default {create, getAll, remove}