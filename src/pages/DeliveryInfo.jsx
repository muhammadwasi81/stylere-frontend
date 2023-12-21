import { useState, useEffect } from 'react'
import Layout from './Layout'
import { toast } from 'react-toastify'
import { UUID, businessStores, pickUpAddress, storesData } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { createDeliveryAction, reset } from '../features/delivery/deliverySlice'
import customerInfoImg from '../assets/img/customer.png'
import { FaSpinner } from 'react-icons/fa'

const DeliveryInfo = () => {
  const dispatch = useDispatch()

  const { deliveries, isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.delivery
  )
  console.log(deliveries, 'deliveries')

  const [formData, setFormData] = useState({
    pickup_address: '', // pickup address
    pickup_business_name: '', // pickup business name
    dropoff_phone_number: '', // customer number
    dropoff_instructions: '', // order details
    dropoff_address: '', // dropoff address
    pickup_reference_tag: '', // pickup reference tag
    dropoff_contact_given_name: '',
    pickup_instructions: '',
    pickup_phone_number: '',
    order_value: '',
    tip: '',
    action_if_undeliverable: '',
  })

  const {
    pickup_address,
    pickup_business_name,
    dropoff_phone_number,
    dropoff_instructions,
    dropoff_address,
    pickup_reference_tag,
    dropoff_contact_given_name,
    pickup_instructions,
    pickup_phone_number,
    order_value,
    tip,
    action_if_undeliverable,
  } = formData
  console.log(formData, 'formData')

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      toast.success('Delivery created successfully')
      setFormData({
        pickup_address: '', // pickup address
        pickup_business_name: '', // pickup business name
        dropoff_phone_number: '', // customer number
        dropoff_instructions: '', // order details
        dropoff_address: '', // dropoff address
        pickup_reference_tag: '', // pickup reference tag
        dropoff_contact_given_name: '',
        pickup_instructions: '',
        pickup_phone_number: '',
        tip: '',
        order_value: '',
        action_if_undeliverable: '',
      })
    }
    dispatch(reset())
  }, [dispatch, isSuccess, message, deliveries, isLoading])

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const requiredFields = [
    pickup_address,
    pickup_business_name,
    dropoff_phone_number,
    dropoff_instructions,
    dropoff_address,
    pickup_reference_tag,
    dropoff_contact_given_name,
    pickup_instructions,
    pickup_phone_number,
    order_value,
    tip,
    action_if_undeliverable,
  ]

  const formattedTip = tip.includes('.') ? tip : `${tip}.99`
  const formattedOrderValue = order_value.includes('.')
    ? order_value
    : `${order_value}.99`
  const onSubmit = (e) => {
    e.preventDefault()
    if (requiredFields.includes('')) {
      return toast.error('Please fill all the fields')
    }
    const payload = {
      external_delivery_id: UUID(),
      pickup_address,
      pickup_business_name,
      dropoff_phone_number: `+${dropoff_phone_number}`,
      dropoff_instructions,
      dropoff_address,
      pickup_reference_tag,
      dropoff_contact_given_name,
      pickup_instructions,
      pickup_phone_number,
      tip: Number(formattedTip),
      order_value: Number(formattedOrderValue),
      action_if_undeliverable,
    }
    console.log('payloadData=>', payload)
    dispatch(createDeliveryAction(payload))
    isSuccess &&
      setFormData({
        pickup_address: '',
        pickup_business_name: '',
        dropoff_phone_number: '',
        dropoff_instructions: '',
        dropoff_address: '',
        pickup_reference_tag: '',
        dropoff_contact_given_name: '',
        pickup_instructions: '',
        pickup_phone_number: '',
        order_value: '',
        tip: '',
        action_if_undeliverable: '',
      })
  }
  // order value will be calculated by location
  const getStorePhoneNumber = (storeName) => {
    console.log(storeName, 'storeName')
    const store = storesData.find((store) => store.name === storeName)
    return store ? store.phone : ''
  }

  return (
    <Layout title="Customer Info">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <h1 className="fw-bold text-black text-start fs-1 mb-3">
              Delivery Info
            </h1>
            <section>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="storePhoneNumber"
                    className="form-label text-black fw-bolder"
                  >
                    Pick Up Address
                  </label>
                  <select
                    className="form-control w-100"
                    id="pickup_address"
                    name="pickup_address"
                    value={pickup_address}
                    placeholder="Additional Pickup"
                    onChange={handleChange}
                  >
                    <option value="Select Pickup Address">
                      Select Pickup Address
                    </option>
                    {pickUpAddress.map((address) => (
                      <option key={address.id} value={address.address}>
                        {address.address}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storePhoneNumber"
                    className="form-label  text-black fw-bolder"
                  >
                    Business Name
                  </label>
                  <select
                    className="form-control w-100"
                    id="pickup_business_name"
                    name="pickup_business_name"
                    value={pickup_business_name}
                    placeholder="Select Pickup Business Name"
                    onChange={handleChange}
                  >
                    <option value="">Select Pickup Business Store</option>
                    {businessStores.map((store) => (
                      <option key={store.id} value={store.name}>
                        {store.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* {pickup_business_name && (
              <div className="form-group">
                <label
                  htmlFor="storePhoneNumber"
                  className="form-label text-black fw-bolder"
                >
                  Store Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dropoff_phone_number"
                  name="dropoff_phone_number"
                  value={getStorePhoneNumber(pickup_business_name)}
                  disabled
                />
              </div>
            )} */}
                {/* if not then remove it */}
                <div className="form-group">
                  <label
                    htmlFor="storePhoneNumber"
                    className="form-label text-black fw-bolder"
                  >
                    Customer Number
                  </label>
                  <input
                    type="number"
                    className="form-control w-100"
                    id="dropoff_phone_number"
                    name="dropoff_phone_number"
                    value={dropoff_phone_number}
                    placeholder="Enter customer number"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="storePhoneNumber"
                    className="form-label text-black fw-bolder"
                  >
                    Customer Address
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="dropoff_address"
                    name="dropoff_address"
                    value={dropoff_address}
                    placeholder="Enter your drop off Address"
                    onChange={handleChange}
                  />
                </div>

                {/* Added Fields */}
                <div className="form-group">
                  <label
                    htmlFor="pickup_reference_tag"
                    className="form-label text-black fw-bolder"
                  >
                    Additional Drop-Off Information
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="pickup_reference_tag"
                    name="pickup_reference_tag"
                    value={pickup_reference_tag}
                    placeholder="Enter Additional Drop-Off Information"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="dropoff_contact_given_name"
                    className="form-label text-black fw-bolder"
                  >
                    Contact Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="dropoff_contact_given_name"
                    name="dropoff_contact_given_name"
                    value={dropoff_contact_given_name}
                    placeholder="Enter Contact Name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="pickup_instructions"
                    className="form-label text-black fw-bolder"
                  >
                    Pickup Instructions
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="pickup_instructions"
                    name="pickup_instructions"
                    value={pickup_instructions}
                    placeholder="Enter Pickup Instructions"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="pickup_phone_number"
                    className="form-label text-black fw-bolder"
                  >
                    Pickup Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="pickup_phone_number"
                    name="pickup_phone_number"
                    value={pickup_phone_number}
                    placeholder="Enter Pickup Phone Number"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="tip"
                    className="form-label text-black fw-bolder"
                  >
                    Driver Tip
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="tip"
                    name="tip"
                    value={tip}
                    placeholder="Enter Driver Tip"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="orderValue"
                    className="form-label text-black fw-bolder"
                  >
                    Pickup Order Value
                  </label>
                  <input
                    type="number"
                    className="form-control w-100"
                    id="order_value"
                    name="order_value"
                    value={order_value}
                    placeholder="Enter Pickup Order Value"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="orderValue"
                    className="form-label text-black fw-bolder"
                  >
                    If Order Unavailable
                  </label>
                  <select
                    className="form-control w-100"
                    id="action_if_undeliverable"
                    name="action_if_undeliverable"
                    value={action_if_undeliverable}
                    placeholder="Enter Unavailable Order"
                    onChange={handleChange}
                  >
                    <option value="">Select Unavailable Order</option>
                    <option value="return_to_pickup">Refund Order</option>
                    <option value="return_to_pickup">Cancel Order</option>
                    <option value="return_to_pickup">Other</option>
                  </select>
                </div>

                <label
                  htmlFor="storePhoneNumber"
                  className="form-label  text-black fw-bolder"
                >
                  Order Details
                </label>
                <div className="">
                  <textarea
                    className="text-area w-100"
                    id="dropoff_instructions"
                    name="dropoff_instructions"
                    value={dropoff_instructions}
                    placeholder="Enter Order Details"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-5"
                  disabled={isLoading}
                >
                  {isLoading ? <FaSpinner /> : 'Create Order'}
                </button>
              </form>
            </section>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={customerInfoImg}
              alt="confirmation"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DeliveryInfo
