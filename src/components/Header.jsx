import React from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.png'
import { logout } from '../pages/Redux/user.actions'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(store => store.user.isLogged)
  console.log(isLoggedIn)
  const {userName} = useSelector((store) => store.user);
  

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

        {isLoggedIn && (
          <div>
            <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <Link to="./" className="main-nav-item" onClick={dispatch(logout)}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        )}

        {!isLoggedIn && (
          <Link to="/login" className="main-nav-item">
            Log In
          </Link>
        )}
      </nav>
    </header>
  );
}
export default Header
