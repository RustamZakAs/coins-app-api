import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setAvtorizedAction } from '../Redux/coins/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData) {
      //console.log(`${key}: ${value}`);
      if (key === 'login') login = value;
      if (key === 'password') password = value;
    }

    fetch(`http://localhost:8081/login?login=${login}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        if (data && data[0]?.login && data[0]?.password) {
          //console.log(data[0]?.password);
            if (data[0]?.password == password) {
              dispatch(setAvtorizedAction(true));
              navigate("/admin");
            } else {
              dispatch(setAvtorizedAction(false));
            }
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='login-form'>
      <p className='homepage'>Admin panel</p>
      <div className='login-page'>
        <form className='login-divs' action='/admin' onSubmit={onSubmit}>
          <label className='advanced-search-text'>Login</label>
          <input className='' type='text' name="login"></input>
          <label className='advanced-search-text'>Password</label>
          <input type='password' name='password' autoComplete="false"></input>
          <button className='search'>Sign in</button>
          <Link to="/admin">Admin page</Link>
        </form>
      </div>
      <Link to="/">Go to main page</Link>
    </div>
  )
}

export default Login