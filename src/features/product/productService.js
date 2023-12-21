import axios from 'axios'

const apiGlobal = axios.create({
  // baseURL: 'http://localhost:8000/api/products/',
  baseURL: 'https://stylere.onrender.com/api/products',
})

const createProductService = async (payload) => {
  try {
    const response = await apiGlobal.post(`/create_product`, payload)
    console.log(response.data, 'createDeliveryService')
    return response.data
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message, { cause: error })
  }
}

const productService = {
  createProductService,
}

export default productService
