import {useState} from 'react';

import { useDispatch } from 'react-redux';
import {login} from '../Redux/user.actions';
import { useNavigate } from 'react-router';

export default function Login() {
    const [data, setData] = useState({
        email: 'tony@stark.com',
        password: 'password123',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    };

    const postLogin = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application.json'},
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                return response.json()
                };
            })

            .then((response) => {
                if (response.status === 200) {
                    dispatch(login({ ...response.body}));
                    return navigate('user')
                };    
            })
            .catch((error) => console.log(error));
        }

        return (
            <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={postLogin}>
          <div className="input-wrapper">
            <label for="username">Username</label
            ><input type="text" id="username" name='email' onChange={handleData}/>
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" name='password'/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
          </div>
 
          {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
 
          <button className="sign-in-button">Sign In</button> 

        </form>
      </section>
    </main>
        )
}