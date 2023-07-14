import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../features/auth/authSlice'
import Layout from './Layout'
import { toast } from 'react-toastify'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/')
    }
    dispatch(reset())
  }, [])

  return (
    <Layout title="Dashboard">
      <section className="container">
        <div className="row">
          <h1 className="my-5 fs-1 fw-bolder">Hey, {user?.data?.userName}</h1>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <div className="">
              <h1 className="text-black fw-bolder fs-1">
                Welcome to the world's most <br />{' '}
                <span className="text-primary">imaginative</span> marketplace
              </h1>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, corporis perferendis explicabo animi magnam,
              </p>
              <button
                className="btn btn-primary w-100 mt-3"
                onClick={() => navigate('/Info')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-sm-6 position-relative d-none d-md-block">
            <img
              src="https://www.pngitem.com/pimgs/m/522-5229044_e-commerce-store-png-transparent-png.png"
              alt="product-img"
              className="img-fluid position-absolute"
              style={{ top: '-100px' }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard
