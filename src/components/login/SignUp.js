import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Firebase configuration
const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyBTdUS2krzmWEHO_lok6Ej48MVD3v-nKa4",
  authDomain: "foodcoaster-770a4.firebaseapp.com",
  projectId: "foodcoaster-770a4",
  storageBucket: "foodcoaster-770a4.appspot.com",
  messagingSenderId: "370519028100",
  appId: "1:370519028100:web:17c8697c67597a85102dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
        navigate(`../../Restaurant?id=${email}`)
        // console.log('User signed up successfully');
        // setName('');
      // setRoll('');
      setPassword('');
      setError(null); 
        // You can update your app's state or perform further actions here
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error("Sign in error:", error.message);
        setError(error.message);
      });
    //   const logOut=()=>{
    //     firebaseConfig.auth().signOut();
    //   };  
    };
  
  return (
    <Container>
      <div className="wrapper1">
        <div className="container1">
          <div className="heading1">
            <h1>Connect with Us</h1>
            <p>Feel free to ask your queries</p>
          </div>
          <div className="content-box1">
            <div className="form-box1">
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  name="Email"
                  className="info1"
                  id="lg"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="form-rows1">
                  <input
                    type="password"
                    name="Password"
                    className="info1"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btns">
                <button type="submit" >Sign In</button>
                <button type="submit"><Link to='/login/Register.js' className="btn1">Create an account</Link></button>
                {error && <p className="error">Invalid user</p>}
                
                </div>
              </form>
            </div>
            <div className="details-box1">
              <h2>Reach Us</h2>
              <div className="details1">
                <p>Phone-Number : 898xxxxxx</p>
                <p>Email : foodcoaster@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};




export default SignUp;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.4) url("../images/dc.webp") no-repeat center
    center/cover;
  height: 100vh;
  background-blend-mode: darken;

  margin: 0;
  padding: 0;
  perspective: 1000px;
  box-sizing: border-box;
  font-family: "Be Vietnam Pro", sans-serif;
  .wrapper1 {
    height: 100svh;
    width: 100svw;
    overflow-y: auto;
    overflow-x: hidden;
    transform-style: preserve-3d;
  }
  ::placeholder {
    color: white;
  }
  .heading1 {
    color: white;
  }
  .container1 {
    width: 80%;
    margin: 5rem auto;
  }
  .content-box1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -72px;
  }
  .form-box1 {
    flex-basis: 60%;
    padding: 40px 60px;
    background: none;
  }
  .form-rows1 {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    gap: 20px;
  }

  #name1 {
    margin: 0 10px;
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
  #lg{
    margin :10px 10px;
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
  .btn1{
    text-decoration: none;
    color: white;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn1:hover{
    color: black;
  }
  button:hover {
    color: black;
    background-color: white;
  }
  .details-box1 {
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
  .error{
    color: brown;
    margin: 0px 24px
  }
`;
