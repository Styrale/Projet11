import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Redux/user.actions';
import { useNavigate } from 'react-router';

export default function Login() {
  const [data, setData] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  });

  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const postLogin = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(login({ ...response.body }));
          navigate('/profile');
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <main className='main bg-dark'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        {error && <p>{error}</p>}

        <form onSubmit={postLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" onChange={handleData} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
