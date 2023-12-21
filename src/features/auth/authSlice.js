import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
console.log(user, 'user in authSlice')
const initialState = {
  user: user ? user : null,
  dashboardData: {},
  dashboardStats: {},
  userDetail: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const registerAction = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await authService.registerService(user)
      console.log(response.data, 'registerAction')
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

// Login user
export const loginAction = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await authService.loginService(user)
      console.log(response.data, 'loginAction')
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

export const getUserByIdAction = createAsyncThunk(
  'auth/getUserById',
  async (id, thunkAPI) => {
    console.log(thunkAPI.getState(), 'dsdsd')
    try {
      const token = thunkAPI.getState().auth.user.data.token
      console.log(token, 'token in action')
      const response = await authService.getUserById(id, token)
      console.log(response.data, 'getUserByIdAction')
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

export const dashboardDataAction = createAsyncThunk(
  'auth/dashboardData',
  async (_, thunkAPI) => {
    try {
      const response = await authService.dashboardData()
      console.log(response.data, 'dashboardDataAction')
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

export const dashboardStatsAction = createAsyncThunk(
  'auth/dashboardStats',
  async (_, thunkAPI) => {
    try {
      const response = await authService.dashboardStats()
      console.log(response.data, 'dashboardStatsAction')
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

export const logoutAction = createAsyncThunk('auth/logout', async () => {
  await authService.logoutService()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.userStatus = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.isLoading = true
        state.isError = false
        state.isSuccess = false
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        console.log(action.payload, 'action.payload')
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(loginAction.pending, (state) => {
        console.log('pending')
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        console.log(action.payload.data, 'fulfilled')
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(loginAction.rejected, (state, action) => {
        console.log('rejected', action.payload)
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
      })
      .addCase(getUserByIdAction.pending, (state) => {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(getUserByIdAction.fulfilled, (state, action) => {
        console.log(action.payload, 'fulfilled')
        state.isLoading = false
        state.isSuccess = true
        state.userDetail = action.payload
      })
      .addCase(getUserByIdAction.rejected, (state, action) => {
        console.log('rejected', action.payload)
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userDetail = null
      })
      .addCase(dashboardDataAction.pending, (state) => {
        console.log('pending')
        state.dashboardData.isLoading = true
      })
      .addCase(dashboardDataAction.fulfilled, (state, action) => {
        console.log(action.payload, 'dashboard.slice.fulfilled')
        state.dashboardData.isLoading = false
        state.isSuccess = true
        state.dashboardData = action.payload
      })
      .addCase(dashboardDataAction.rejected, (state, action) => {
        console.log('rejected', action.payload)
        state.dashboardData.isLoading = false
        state.isError = true
        state.message = action.payload
        state.dashboardData = null
      })
      .addCase(dashboardStatsAction.pending, (state) => {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(dashboardStatsAction.fulfilled, (state, action) => {
        console.log(action.payload, 'dashboardStatsAction.fulfilled')
        state.isLoading = false
        state.isSuccess = true
        state.dashboardStats = action.payload
      })
      .addCase(dashboardStatsAction.rejected, (state, action) => {
        console.log('rejected', action.payload)
        state.isError = true
        state.message = action.payload
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
