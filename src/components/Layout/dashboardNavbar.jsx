import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}))

export const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props

  return (
    <DashboardNavbarRoot
      sx={{
        left: { lg: 280 },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
      {...other}
    >
      <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
        <IconButton
          onClick={onSidebarOpen}
          sx={{ display: { xs: 'inline-flex', lg: 'none' } }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Typography
          variant="h4"
          color="black"
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          Welcome to Style.re
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ height: 40, width: 40, ml: 1 }}
        />
      </Toolbar>
    </DashboardNavbarRoot>
  )
}

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
}
