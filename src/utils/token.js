import axios from 'axios'

const getAuthToken = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  console.log(userInfo.data.token, 'userData from token')
  return userInfo?.data.token ?? ''
}

const apiPrefix = axios.create({
  baseURL: 'https://stylere.onrender.com/api/',
  // baseURL: 'http://localhost:8000/api/',
})

apiPrefix.interceptors.request.use(function (config) {
  const token = getAuthToken()
  console.log(token, 'tokenAPI')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

apiPrefix.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.error(error, 'error.response')
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user')
      // window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
export default apiPrefix
