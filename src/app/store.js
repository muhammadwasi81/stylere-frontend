import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import deliveryReducer from '../features/delivery/deliverySlice'
import paymentReducer from '../features/payment/paymentSlice'
import productReducer from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    product: productReducer,
  },
})
