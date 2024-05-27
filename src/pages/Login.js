// src/pages/Login.js
import React, { useState, useContext } from 'react';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      username: username,
      password: password,
    };
    try {
      fetch('/data/loginData.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const user = data.find(
            (user) => user.username === requestBody.username && user.password === requestBody.password
          );
          if (user) {
            alert('Login successful');
            console.log('Login successful', user);
          }
        })

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div class="card mb-3 w-25 mx-auto text-white bg-dark">
        <div class="card-body">
          <h5 class="card-title text-center">Login</h5>
          <form>
            <p class="card-text"><div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Username" />
            </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password " id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
              </div></p>
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
