import { useSelector } from 'react-redux'
import Layout from './Layout'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Box, Paper } from '@mui/material'

const Confirmation = () => {
  const { user } = useSelector((state) => state.auth)
  console.log(user, 'user')
  return (
    <Layout title="Confirmation">
      <Box component={'div'} height={'100vh'}>
        <Paper
          className="container"
          sx={{
            maxWidth: '600px',
            width: '100%',
            mt: { xs: '1.5rem', md: '2rem' },
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="row justify-content-md-center mt-5">
            <div className="col-xs-5 text-center">
              <IoMdCheckmarkCircleOutline size={48} color="green" />
              <p className="lead">Hey, {user?.data?.userName}</p>
              <h1 className="fw-bold">Your Order is confirmed!</h1>
              <p className="px-5">
                Your order is confirmed. We will send you an email as soon as
                your order is picked up.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  // window.location.href = '/'
                }}
              >
                Check status
              </button>
            </div>
          </div>
        </Paper>
      </Box>
    </Layout>
  )
}

export default Confirmation
