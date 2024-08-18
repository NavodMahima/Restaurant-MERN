import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default Main
