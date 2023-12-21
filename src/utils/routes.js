import GroupIcon from '@mui/icons-material/GroupRounded'
import PersonalIcon from '@mui/icons-material/PersonRounded'
import AdminGroupIcon from '@mui/icons-material/GroupAddRounded'
import TradingIcon from '@mui/icons-material/AttachMoneyRounded'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BiSolidDashboard } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { LiaProductHunt } from 'react-icons/lia'
import { TbTruckDelivery } from 'react-icons/tb'

const oldRoutes = [
  {
    id: 4,
    path: '/Info',
    name: 'Delivery Info',
  },
  {
    id: 5,
    path: '/Address',
    name: 'Customer Info',
  },
  {
    id: 6,
    path: '/Payment',
    name: 'Payment',
  },
  {
    id: 7,
    path: '/DeliveryStatus',
    name: 'Delivery Status',
  },
  {
    id: 8,
    path: '/Confirmation',
    name: 'Confirmation',
  },
]

const navRoutes = [
  {
    href: '/Address',
    icon: <GroupIcon fontSize="small" />,
    title: 'Customer Info',
  },
  {
    href: '/Info',
    icon: <PersonalIcon fontSize="small" />,
    title: 'Delivery Info',
  },
  {
    href: '/Payment',
    icon: <AdminGroupIcon fontSize="small" />,
    title: 'Payment',
  },
  {
    href: '/DeliveryStatus',
    icon: <CiDeliveryTruck fontSize="small" />,
    title: 'Delivery Status',
  },
  {
    href: '/Confirmation',
    icon: <TradingIcon fontSize="small" />,
    title: 'Confirmation',
  },
]
const adminRoutes = [
  {
    href: '/admin/dashboard',
    icon: <BiSolidDashboard fontSize="small" />,
    title: 'Dashboard',
  },
  {
    href: '/admin/users',
    icon: <HiOutlineUsers fontSize="small" />,
    title: 'Users',
  },
  {
    href: '/admin/products',
    icon: <LiaProductHunt fontSize="small" />,
    title: 'Products',
  },
  {
    href: '/admin/deliveries',
    icon: <TbTruckDelivery fontSize="small" />,
    title: 'Deliveries',
  },
  // {
  //   href: '/admin/orders',
  //   icon: <TradingIcon fontSize="small" />,
  //   title: 'Orders',
  // },
]
export { oldRoutes, navRoutes, adminRoutes }
