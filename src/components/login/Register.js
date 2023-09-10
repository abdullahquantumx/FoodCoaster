import React, { useState } from 'react';
import styled from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from "react-router-dom";

const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyBTdUS2krzmWEHO_lok6Ej48MVD3v-nKa4",
  authDomain: "foodcoaster-770a4.firebaseapp.com",
  projectId: "foodcoaster-770a4",
  storageBucket: "foodcoaster-770a4.appspot.com",
  messagingSenderId: "370519028100",
  appId: "1:370519028100:web:17c8697c67597a85102dd1"
};
initializeApp(firebaseConfig);
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // User signed up successfully
        console.log('User signed up successfully');
        setName('');
      // setRoll('');
      setPassword('');
      setError(null); 
      })
      .catch(error => {
        // Handle sign-up errors
        setError(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };
  const showAlert=()=> {
    if(error===null){
      alert('Your account has been successfull created');
    }
      
    }
  return (
    <Container>
      <div className="wrapper2">
        <div className="container2">
          <div className="heading2">
            <h1>Register now!</h1>
            <p>Feel free to ask your queries</p>
          </div>
          <div className="content-box2">
            <div className="form-box2">
              <form action="" id="data" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  value={name}
                  className="info2"
                  id="name2"
                  placeholder="Enter your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="Email"
                  className="email"
                  value={email}
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="Password"
                  className="Password"
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <button type="submit" className='btn2'><Link to={`/Restaurant?=${email}`} >Sign Up</Link></button> */}
                <button type='submit' onClick={showAlert}>Sign Up</button>

                {error && <p className="error">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};




export default Register;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.75) url("../images/beer.jpg") no-repeat center
    center/cover;
  height: 100vh;
  background-blend-mode: darken;
  margin: 0;
  padding: 0;
  perspective: 1000px;
  box-sizing: border-box;
  font-family: "Be Vietnam Pro", sans-serif;
  .wrapper2 {
    height: 100svh;
    width: 100svw;
    overflow-y: auto;
    overflow-x: hidden;
    transform-style: preserve-3d;
  }
  ::placeholder {
    color: white;
  }
  .heading2 {
    color: white;
  }
  .container2 {
    width: 80%;
    margin: 5rem auto;
  }
  .content-box2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -80px;
  }
  .form-box2 {
    flex-basis: 60%;
    padding: 40px 60px;
    background: none;
  }
  .form-rows2 {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    gap: 20px;
  }

  #name2 {
    margin: 0px 1px;
    width: 46%;
 
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid white;
    outline: none;
    padding-bottom: 5px;
    background-color: transparent;
    margin: 5px 0;
    color: white;
  }

  button {
    background-color: #346c34;
    color: white;
    padding: 5px 1.5rem;
    margin: 10px;
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn2 {
    text-decoration: none;
    color: white;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn2:hover {
    color: black;
  }
  button:hover {
    color: black;
    background-color: white;
  }
  .details-box2 {
    flex-basis: 40%;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  .btn2{
    text-decoration: none;
    color: white;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn2:hover{
    color: black;
  }
  .info2{
    left: 10px;
  }
`;
