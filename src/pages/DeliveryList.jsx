import React, { useEffect } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from '@mui/material'
import moment from 'moment'
import { dashboardDataAction } from '../features/auth/authSlice'
import { DashboardLayout } from '../components/Layout/dashboardLayout'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryList = () => {
  const dispatch = useDispatch()
  const { deliveries } = useSelector((state) => state.auth.dashboardData)

  useEffect(() => {
    dispatch(dashboardDataAction())
  }, [dispatch])

  return (
    <DashboardLayout>
      <Container sx={{ mt: 3 }}>
        <TableContainer
          component={Paper}
          style={{ maxWidth: '100%', overflowX: 'auto' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Pickup Address</TableCell>
                <TableCell>Dropoff Address</TableCell>
                <TableCell>Tracking Url</TableCell>
                <TableCell>Order Value</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveries &&
                deliveries.length > 0 &&
                deliveries.map((delivery) => (
                  <TableRow key={delivery._id}>
                    <TableCell>{delivery.userId.userName}</TableCell>
                    <TableCell>{delivery.userId.email}</TableCell>
                    <TableCell>{delivery.pickup_address}</TableCell>
                    <TableCell>{delivery.dropoff_address}</TableCell>
                    <TableCell>{delivery.order_value}</TableCell>
                    <TableCell>{delivery.tracking_url}</TableCell>
                    <TableCell>
                      {moment(delivery.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      {moment(delivery.updatedAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </DashboardLayout>
  )
}

export default DeliveryList
