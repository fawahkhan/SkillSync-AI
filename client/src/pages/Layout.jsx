import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      <div className='min-h-screen bg-gray-50'>
        <Navbar/>
        <Outlet /> {/* Child or sub-routes render here */}
      </div>
    </div>
  )
}

export default Layout
