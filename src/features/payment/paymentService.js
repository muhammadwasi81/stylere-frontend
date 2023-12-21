import axios from 'axios'

const apiGlobal = axios.create({
  // baseURL: 'http://localhost:8000/api/payments/',
  baseURL: 'https://stylere.onrender.com/api/payments',
})

const createPaymentService = async (payload) => {
  try {
    const response = await apiGlobal.post(`/create_payment`, payload)
    console.log(response.data, 'createPaymentService')
    return response.data
  } catch (error) {
    console.log(error.message, 'error creating payment')
    throw new Error(error.message, { cause: error })
  }
}

const paymentService = {
  createPaymentService,
}

export default paymentService
