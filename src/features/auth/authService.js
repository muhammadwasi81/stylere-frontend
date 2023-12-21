import axios from 'axios'

const ADMIN_PREFIX = 'https://stylere.onrender.com/api/admin/'

const apiGlobal = axios.create({
  // baseURL: 'http://localhost:8000/api/users',
  baseURL: 'https://stylere.onrender.com/api/users',
})

const registerService = async (userData) => {
  const response = await apiGlobal.post(`/signup`, userData)
  console.log(response.data, 'response.data')
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const loginService = async (userData) => {
  const response = await apiGlobal.post(`/login`, userData)
  console.log(response.data, 'response.data')
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const getUserById = async (id) => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const token = userData.data.token
  console.log(token, 'token')
  const response = await apiGlobal.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(response.data, 'response.data.service')
  return response.data
}

const dashboardData = async () => {
  try {
    const response = await axios.get(`${ADMIN_PREFIX}dashboard_data`)
    console.log(response.data, 'dashboardData.service')
    return response.data
  } catch (error) {
    console.log(error, 'error')
    throw new Error(error, { cause: error })
  }
}

const dashboardStats = async () => {
  try {
    const response = await axios.get(`${ADMIN_PREFIX}dashboard_stats`)
    console.log(response.data, 'dashboardStats.service')
    return response.data
  } catch (error) {
    console.log(error, 'error')
    throw new Error(error, { cause: error })
  }
}

// Logout user
const logoutService = () => {
  localStorage.removeItem('user')
}

const authService = {
  registerService,
  logoutService,
  loginService,
  getUserById,
  dashboardData,
  dashboardStats,
}

export default authService
