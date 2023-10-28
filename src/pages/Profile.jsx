import React from 'react'
import ProfileDetails from '../components/ProfileDetails'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from './Redux/user.actions';


function Profile() {
  const navigate = useNavigate();
  const {userName, token, isLogged} = useSelector((store) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLogged) {
      return navigate('/login');
    }

    const getUserInfo = () => {
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(response => response.json()).then(data => dispatch(userInfo(data.body)))
    }

    getUserInfo()

  }, [isLogged, navigate]);


console.log(userName)

  return (
    <main className='main bg-dark'>
      <ProfileDetails />
    </main>
  );
}

export default Profile
