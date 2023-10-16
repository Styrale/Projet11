import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Types d'actions
const LOGOUT = 'user/logout';
const CLEAR_PROFILE = 'user/clear_profile';

// Action creators
const logoutAction = () => ({
  type: LOGOUT,
});

const clearProfileAction = () => ({
  type: CLEAR_PROFILE,
});

// Réducteur
const initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        // Réinitialisez ici les données de profil si nécessaire.
      };
    default:
      return state;
  }
};

// Composant LogOut
function LogOut() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function clearLocalStorage() {
    localStorage.clear();

    dispatch(logoutAction());
    dispatch(clearProfileAction());
  }

  return (
    <>
      {isAuth && (
        <Link className="main-nav-item" onClick={() => clearLocalStorage()} to="/">
          <i className="fa-solid fa-arrow-right-from-bracket" />
          Sign Out
        </Link>
      )}
    </>
  );
}

export default LogOut;
