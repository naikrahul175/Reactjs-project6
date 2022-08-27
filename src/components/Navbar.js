import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav className='Navbar'>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
        </ul>
      </nav>

    <Outlet />
    </>
  )
}

export default Navbar
