import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet /> {/* Child or sub-routes render here */}
    </div>
    
  )
}

export default Layout
