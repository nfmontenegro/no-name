import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000/v1',
  responseType: 'json'
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
    config.headers['Content-type'] = 'application-json'
  }
  return config
})

API.interceptors.response.use(
  response => response,
  error => {
    localStorage.removeItem('token')
    return {
      data: error.response.data.error
    }
  }
)

export default API
