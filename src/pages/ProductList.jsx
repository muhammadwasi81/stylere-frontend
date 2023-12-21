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
  Avatar,
  Tab,
} from '@mui/material'
import moment from 'moment'
import { dashboardDataAction } from '../features/auth/authSlice'
import { DashboardLayout } from '../components/Layout/dashboardLayout'
import { useDispatch, useSelector } from 'react-redux'
import { deepOrange } from '@mui/material/colors'

const ProductList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.auth.dashboardData)

  useEffect(() => {
    console.log('useEffect triggered')
    dispatch(dashboardDataAction())
  }, [dispatch])

  return (
    <DashboardLayout>
      <Container sx={{ mt: 3 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>FIRST NAME</TableCell>
                <TableCell>LAST NAME</TableCell>
                <TableCell>BAR CODE</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.length > 0 &&
                products?.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {product?.firstName?.charAt(0)}
                      </Avatar>
                    </TableCell>
                    <TableCell>{product.firstName}</TableCell>
                    <TableCell>{product.lastName}</TableCell>
                    <TableCell>
                      <Avatar
                        alt={product.firstName}
                        src={
                          'https://stylere.onrender.com/uploads/' +
                          product.image
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {moment(product.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      {moment(product.updatedAt).format('DD/MM/YYYY')}
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

export default ProductList
