import React from 'react'
import { Link } from 'react-router-dom'
import argentBankLogo from '../assets/img/argentBankLogo.png'



function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Header
