import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import deliveryService from './deliveryService'

const initialState = {
  deliveries: [],
  deliveryStatus: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createDeliveryAction = createAsyncThunk(
  'delivery/createDelivery',
  async (delivery, thunkAPI) => {
    try {
      const response = await deliveryService.createDeliveryService(delivery)
      console.log(response.data, 'createDeliveryAction')
      return response.data
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getDeliveryStatusServiceAction = createAsyncThunk(
  'delivery/getDeliveryStatus',
  async (userId, thunkAPI) => {
    console.log(userId, 'userId in action')
    try {
      const response = await deliveryService.getDeliveryStatusService(userId)
      console.log(response.data, 'getDeliveryStatusAction')
      return response.data
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeliveryAction.pending, (state) => {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(createDeliveryAction.fulfilled, (state, { payload }) => {
        console.log(payload, 'fulfilled')
        state.isLoading = false
        state.isSuccess = true
        state.deliveries.push(payload)
      })
      .addCase(createDeliveryAction.rejected, (state, { payload }) => {
        console.log(payload, 'rejected')
        state.isLoading = false
        state.isError = true
        state.message = payload
      })
      .addCase(getDeliveryStatusServiceAction.pending, (state) => {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(getDeliveryStatusServiceAction.fulfilled, (state, action) => {
        console.log(action.payload, 'fulfilled')
        state.isLoading = false
        state.isSuccess = true
        state.deliveryStatus = action.payload
      })
      .addCase(
        getDeliveryStatusServiceAction.rejected,
        (state, { payload }) => {
          console.log(payload, 'rejected')
          state.isLoading = false
          state.isError = true
          state.message = payload
        }
      )
  },
})

export const { reset } = deliverySlice.actions
export default deliverySlice.reducer
