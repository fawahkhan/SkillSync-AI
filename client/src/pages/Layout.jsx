import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'

const Layout = () => {

  const {user, loading} = useSelector(state => state.auth) // from this auth we will get the user and loading property.

  if(loading){
    return <Loader/>
  }

  return (
    <div>
      {
        // we will only show the login form if the user is not logged in and not the app dashboard.
        user ? (
          <div className='min-h-screen bg-gray-50'>
            <Navbar/>
            <Outlet /> {/* Child or sub-routes render here */}
          </div> 
        ) : <Login/>
      }
      
    </div>
  )
}

export default Layout
