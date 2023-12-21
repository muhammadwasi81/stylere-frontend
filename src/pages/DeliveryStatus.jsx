import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveryStatusServiceAction } from '../features/delivery/deliverySlice'
import Layout from './Layout'
import Loader from '../components/Loader'
import { Box } from '@mui/material'

const DeliveryStatus = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { deliveryStatus, isLoading } = useSelector((state) => state.delivery)

  useEffect(() => {
    dispatch(getDeliveryStatusServiceAction(user.data._id))
  }, [])

  if (!deliveryStatus)
    return (
      <pre>
        You have no active deliveries. Please place an order to see your
        delivery status.
      </pre>
    )

  return (
    <Layout title="Delivery Status">
      <Box p={3}>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <p>
              <strong>External Delivery ID:</strong>{' '}
              {deliveryStatus.external_delivery_id}
            </p>
            <p>
              <strong>Status:</strong> {deliveryStatus.delivery_status}
            </p>
            <p>
              <strong>Pickup Address:</strong> {deliveryStatus.pickup_address}
            </p>
            <p>
              <strong>Pickup Instructions:</strong>{' '}
              {deliveryStatus.pickup_instructions}
            </p>
            <p>
              <strong>Dropoff Address:</strong> {deliveryStatus.dropoff_address}
            </p>
            <p>
              <strong>Dropoff Instructions:</strong>{' '}
              {deliveryStatus.dropoff_instructions}
            </p>
            <p>
              <strong>Order Value:</strong> $
              {deliveryStatus.order_value?.toFixed(2)}
            </p>
            <p>
              <strong>Estimated Pickup Time:</strong>{' '}
              {new Date(deliveryStatus.pickup_time_estimated).toLocaleString()}
            </p>
            <p>
              <strong>Estimated Dropoff Time:</strong>{' '}
              {new Date(deliveryStatus.dropoff_time_estimated).toLocaleString()}
            </p>
            <p>
              <strong>Tracking URL:</strong>{' '}
              <a
                href={deliveryStatus.tracking_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Track your order here
              </a>
            </p>
            <p>
              <strong>Action if Undeliverable:</strong>{' '}
              {deliveryStatus.action_if_undeliverable}
            </p>
            <p>
              <strong>Tip:</strong> ${deliveryStatus?.tip?.toFixed(2)}
            </p>
          </div>
        )}
      </Box>
    </Layout>
  )
}

export default DeliveryStatus
