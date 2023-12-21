import { useState, useEffect } from 'react'
import Layout from './Layout'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createProductAction } from '../features/product/productSlice'
import { reset } from '../features/payment/paymentSlice'
import { barCodeInfo } from '../constants'
import ResponsiveModal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import confirmationImg from '../assets/img/confirmation.png'

const ProductInfo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.product
  )
  const { user } = useSelector((state) => state.auth)
  console.log({ user })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    image: '',
  })
  const { firstName, lastName, image } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleImageUpload = async (e) => {
    setFormData((prevState) => ({ ...prevState, image: e.target.files[0] }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      toast.success('Product created successfully')
      setFormData({
        firstName: '',
        lastName: '',
        image: '',
      })
    }
    dispatch(reset())
  }, [dispatch, isLoading, isError, isSuccess, message])

  const onSubmit = (e) => {
    e.preventDefault()
    const formFields = [firstName, lastName, image]
    if (formFields.includes('')) {
      return toast.error('Please fill all the fields')
    }
    const formData = new FormData()
    formData.append('userId', user.data?._id || user?._id)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('image', image)
    dispatch(createProductAction(formData))
  }

  return (
    <Layout title="Customer Info">
      <section className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <form onSubmit={onSubmit} className="mt-5">
              <h1 className="fw-bold text-black text-start fs-1 mb-3">
                Customer Info
              </h1>
              <div className="form-group">
                <label
                  htmlFor="firstName"
                  className="form-label text-black fw-bolder"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="lastName"
                  className="form-label text-black fw-bolder"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </div>
              <span className="form-label text-black fw-bolder">Image</span>
              <div className="form-group d-flex gap-3">
                <label
                  id="file-input-label"
                  htmlFor="file-input"
                  className="file-input-label text-black fw-bolder"
                >
                  Upload QR code
                </label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  id="file-input"
                  name="file-input"
                  onChange={handleImageUpload}
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  style={{ width: '40px', height: '45px' }}
                  onClick={() => setModalIsOpen(true)}
                >
                  <span style={{ marginLeft: '-2.5px' }}>?</span>
                </button>
              </div>
              <ResponsiveModal
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                center
                classNames={{
                  modal: 'custom-modal',
                  overlay: 'custom-overlay',
                }}
                styles={{
                  modal: {
                    padding: '20px',
                    borderRadius: '10px',
                  },
                }}
              >
                <p className="fw-lighter">{barCodeInfo.info}</p>
              </ResponsiveModal>
              <button
                type="submit"
                className="btn btn-primary w-100 mb-5"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait' : 'Create Order'}
              </button>
            </form>
          </div>
          <div className="col-md-6 d-none d-lg-block">
            <img
              src={confirmationImg}
              alt="confirmation"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductInfo
