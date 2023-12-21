import { useEffect } from 'react'
import {
  Button,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/transparent.png'
import PropTypes from 'prop-types'
import LogoutIcon from '@mui/icons-material/Logout'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded'
import { NavItem } from '../NavItem'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction, reset } from '../../features/auth/authSlice'
import { adminRoutes, navRoutes } from '../../utils/routes'
import { toast } from 'react-toastify'

export const DashboardSidebar = (props) => {
  const { user } = useSelector((state) => state.auth)
  // console.log(user, 'user in dashboard sidebar')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { open, onClose } = props
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
  })

  const handleLogout = () => {
    dispatch(logoutAction()).then((res) => {
      console.log('dispatch', res)
      if (res.type === 'auth/logout/fulfilled') {
        toast.success('Logout successfully')
      } else {
        toast.error('something went wrong')
      }
    })
    dispatch(reset())
    navigate('/Login')
  }

  useEffect(() => {
    if (!user) {
      navigate('/Login')
    }
  }, [user])

  useEffect(() => {
    if (open) {
      onClose?.()
    }
  }, [])

  const routesToShow =
    (user && user?.isAdmin) || user?.data?.isAdmin ? adminRoutes : navRoutes

  const content = (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <Box sx={{ p: 3 }}>
            <Link to="/">
              <img alt="Logo" src={Logo} className="w-50" />
            </Link>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                backgroundColor: '#f8931f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                px: 3,
                py: '20px',
                borderRadius: 1,
              }}
            >
              <div>
                {(user && user?.isAdmin) || user?.data?.isAdmin === true ? (
                  <Typography
                    color="#fff"
                    variant="h6"
                    fontSize={14}
                    gutterBottom
                  >
                    Admin
                  </Typography>
                ) : (
                  <Typography color="#fff" variant="h6" fontSize={14}>
                    Customer
                  </Typography>
                )}
                <Typography color="#fff" variant="h6" fontSize={14}>
                  Welcome: {(user && user?.userName) || user?.data?.userName}
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Box sx={{ my: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          {routesToShow.map((item, index) => (
            <NavItem
              key={index}
              value={item}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </Box>
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton sx={{ color: '#f8931f', mr: 1 }} size="small">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton sx={{ color: '#f8931f', mr: 1 }} size="small">
              <SendRoundedIcon />
            </IconButton>
            <IconButton sx={{ color: '#f8931f', mr: 1 }} size="small">
              <SubscriptionsRoundedIcon />
            </IconButton>
          </Box>
          <Button
            onClick={handleLogout}
            sx={{ background: '#f8931f', mt: 2 }}
            component="a"
            endIcon={<LogoutIcon />}
            fullWidth
            variant="contained"
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#000',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#fff',
          color: '#000',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
