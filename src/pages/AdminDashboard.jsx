import { useEffect } from 'react'
import { DashboardLayout } from '../components/Layout/dashboardLayout'
import ApexCharts from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardStatsAction } from '../features/auth/authSlice'
import Loader from '../components/Loader'

const AdminDashboard = () => {
  const dispatch = useDispatch()
  const { dashboardStats, loading } = useSelector((state) => state.auth)
  console.log(dashboardStats, 'dashboardStats')

  useEffect(() => {
    dashboardStats && dispatch(dashboardStatsAction())
  }, [dispatch])

  const series = [
    {
      name: 'Statistics',
      data: [
        dashboardStats?.totalUsers,
        dashboardStats?.totalDeliveries,
        dashboardStats?.totalProducts,
      ].filter(Boolean),
    },
  ]

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Total Users', 'Total Deliveries', 'Total Products'],
    },
  }

  if (loading) return <Loader />

  return (
    <DashboardLayout>
      <div className="mt-5">
        <h1 className="text-center font-bold fs-2">Dashboard Stats</h1>
        {dashboardStats ? (
          <ApexCharts
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard
