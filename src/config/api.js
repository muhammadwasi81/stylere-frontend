import axios from 'axios'

const apiGlobal = axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://stylre-app.onrender.com/api/products',
})

apiGlobal.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user')
    console.log(token, 'token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiGlobal
