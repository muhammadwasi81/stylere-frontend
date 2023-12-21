import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerAction, reset } from '../features/auth/authSlice'
import Loader from '../components/Loader'
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiFillLock,
  AiOutlinePhone,
  AiOutlineUserAdd,
} from 'react-icons/ai'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    isChecked: false,
  })

  const { userName, email, phoneNumber, password, confirmPassword, isChecked } =
    formData
  useEffect(() => {
    if (isError) {
      return toast.error(message)
    }
    if (isSuccess || user) {
      return navigate('/')
    }
    dispatch(reset())
  }, [dispatch, isSuccess, message, user, isLoading])

  const requiredFields = [userName, email, phoneNumber, password, isChecked]

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const togglePassword = () => {
    setFormData((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }))
  }

  const toggleConfirmPassword = () => {
    setFormData((prevState) => ({
      ...prevState,
      showConfirmPassword: !prevState.showConfirmPassword,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (requiredFields.includes('')) {
      return toast.error('Please fill all the fields')
    }
    if (password !== confirmPassword) {
      return toast.error('Password and confirm password does not match')
    }

    // const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
    // if (!phoneNumber.match(phoneRegex)) {
    //   return toast.error(
    //     'Please enter a valid phone number in the format 111-123-4567'
    //   )
    // }

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/
    // if (!password.match(passwordRegex)) {
    //   return toast.error(
    //     'Password must include at least one uppercase and one lowercase letter'
    //   )
    // }

    const userData = {
      userName,
      email,
      phoneNumber,
      password,
      isChecked,
    }
    console.log(userData)
    dispatch(registerAction(userData)).then(() => {
      toast.success('User registered successfully')
    })
    isSuccess &&
      setFormData({
        userName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      })
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Stylre - Login`}</title>
        </Helmet>
      </HelmetProvider>
      {isLoading && <Loader />}
      <div className="signup-wrapper mt-5">
        <section className="container signupWrapper">
          <form onSubmit={onSubmit}>
            <h1 className="text-black fw-bolder ">Create an Account</h1>
            <p className="text-black fw-normal ">
              The faster you sign up, the faster you get the goods.
            </p>
            <div className="form-group icon-input">
              <label className="form-label fw-bolder " htmlFor="name">
                Name
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={userName}
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                <AiOutlineUserAdd className="icon" />
              </label>
            </div>
            <div className="form-group icon-input">
              <label className="form-label fw-bolder " htmlFor="email">
                Email
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                <AiOutlineMail className="icon" />
              </label>
            </div>
            <div className="form-group icon-input">
              <label className="form-label fw-bolder " htmlFor="phoneNumber">
                Phone Number
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="111-123-1234"
                  onChange={handleChange}
                />
                <AiOutlinePhone className="icon" />
              </label>
            </div>
            <div className="form-group icon-input">
              <label className="form-label fw-bolder " htmlFor="password">
                Password
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <AiFillLock className="icon" />
                <span className="password-icon" onClick={togglePassword}>
                  {formData.showPassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </label>
            </div>
            <div className="form-group icon-input">
              <label className="form-label fw-bolder ">
                Confirm Password
                <input
                  type={formData.showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Enter your confirm password"
                  onChange={handleChange}
                />
                <AiFillLock className="icon" />
                <span className="password-icon" onClick={toggleConfirmPassword}>
                  {formData.showConfirmPassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </label>
            </div>
            <div className="form-group d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isChecked}
                onChange={(e) =>
                  setFormData({ ...formData, isChecked: !isChecked })
                }
                id="flexCheckDefault"
              />
              <label className="form-check-label " htmlFor="flexCheckDefault">
                &nbsp;I agree to the{' '}
                <Link to="/terms" className="text-decoration-none text-primary">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  to="/privacy"
                  className="text-decoration-none text-primary"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-50 my-2"
              disabled={!isChecked}
            >
              Register
            </button>
            <div className="text-center ">
              Already have an account?{' '}
              <Link to="/Login" className="text-decoration-none text-primary">
                {' '}
                Sign In
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default Register
