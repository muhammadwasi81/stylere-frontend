import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import PaymentInfo from './pages/PaymentInfo'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ProductInfo from './pages/CustomerInfo'
import DeliveryInfo from './pages/DeliveryInfo'
import Confirmation from './pages/Confirmation'
const stripePromise = loadStripe(
  'pk_test_51MihFAKHS9EGHah4Zu1HV4k83qBovFz6HjJM1ACkqiLZstcTWfSisDTUZqGIbVDQJhqzrcioz1qpP4vlKehecqG900Xxexg2nu'
)

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" draggable={false} autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Info" element={<DeliveryInfo />} />
          <Route path="/Address" element={<ProductInfo />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route
            path="/Payment"
            element={
              <Elements stripe={stripePromise}>
                <PaymentInfo />
              </Elements>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
