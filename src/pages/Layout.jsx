// import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { DashboardLayout } from '../components/Layout/dashboardLayout'

const Layout = ({ children, title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Stylre - ${title}`}</title>
        </Helmet>
        {/* <Nav /> */}
        <DashboardLayout>
          <main>{children}</main>
        </DashboardLayout>
        {/* <Footer /> */}
      </HelmetProvider>
    </>
  )
}

export default Layout
