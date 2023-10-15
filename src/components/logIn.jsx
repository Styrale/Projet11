import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function LogIn() {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.login)
  const { firstName } = useSelector((state) => state.profile)
  const localStorageFirstName = localStorage.getItem('firstName')

  return (
    <>
      {isAuth ? (
        <Link className="main-nav-link" to="/profilePage/Profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
      ) : (
        <Link className="main-nav-link" to="/loginPage/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </>
  )
}

export default LogIn
