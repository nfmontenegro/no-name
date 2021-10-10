import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000/v1',
  responseType: 'json'
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
    config.headers['Content-type'] = 'application/json'
  }
  return config
})

API.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    localStorage.removeItem('token')
    return error.response
  }
)

export default API
