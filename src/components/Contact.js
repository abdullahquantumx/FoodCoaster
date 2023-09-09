import styled from "styled-components";
import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
// import * as firebase from 'firebase/app';

import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBTdUS2krzmWEHO_lok6Ej48MVD3v-nKa4",
  authDomain: "foodcoaster-770a4.firebaseapp.com",
  projectId: "foodcoaster-770a4",
  storageBucket: "foodcoaster-770a4.appspot.com",
  messagingSenderId: "370519028100",
  appId: "1:370519028100:web:17c8697c67597a85102dd1"
};
const Contact = () => {
  const [name, setName] = useState('');
  const [hostel, setHostel] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roll, setRoll] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to Firebase
    // const datastorage = firebase.database().ref('vah bhai');
    const app=initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const dataRef = ref(database, 'vah bhai');
    push(dataRef, {
      name,
      hostel,
      phone,
      email,
      message,
      roll
      // ... other fields
    });
 
    // Clear form fields after submission
    setName('');
    setHostel('');
    setPhone('');
    setEmail('');
    setMessage('');
    setRoll('');
    // ... clear other fields
  };

  return (
    <Container>
      <div className="wrapper">
        <div className="container">
          <div className="heading">
            <h1>Connect with Us</h1>
            <p>Feel free to ask your queries</p>
          </div>
          <div className="content-box">
            <div className="form-box">
              <form action="" id="data" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  className="name"
                  id="name"
                  value={name}
                  placeholder="Enter your Name"
                  onChange={(e)=>setName(e.target.value)}
                />

                <div className="form-rows">
                  <input
                    type="text"
                    name="HostelName"
                    className="hostel"
                    value={hostel}
                    placeholder="Enter your Hostel Name"
                    onChange={(e) => setHostel(e.target.value)}
                  />
                  <input
                    type="text"
                    name="RollNumber"
                    className="roll"
                    value={roll}
                    placeholder="Enter your Roll-Number"
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </div>
                <div className="form-rows">
                  <input
                    type="email"
                    name="Email"
                    className="email"
                    value={email}
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="number"
                    name="PhoneNumber"
                    className="phone"
                    value={phone}
                    placeholder="Enter your Phone-Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <textarea
                  name="Message"
                  className="message"
                  placeholder="Enter your Message"
                  id=""
                  value={message}
                  rows="5"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="details-box">
              <h2>Reach Us</h2>
              <div className="details">
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

export default Contact;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.4) url("./images/table1.jpg") no-repeat center
    center/cover;
  height: 100vh;
  background-blend-mode: darken;

  margin: 0;
  padding: 0;
  perspective: 1000px;
  box-sizing: border-box;
  font-family: "Be Vietnam Pro", sans-serif;
  .wrapper {
    height: 100svh;
    width: 100svw;
    overflow-y: auto;
    overflow-x: hidden;
    transform-style: preserve-3d;
  }
  ::placeholder {
    color: white;
  }
  .heading {
    color: white;
  }
  .container {
    width: 80%;
    margin: 5rem auto;
  }
  .content-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .form-box {
    flex-basis: 60%;
    padding: 40px 60px;
    background: none;
  }
  .form-rows {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    gap: 20px;
  }

  #name {
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
  
  button {
    background-color: #346c34;
    color: white;
    padding: 5px 1.5rem;
    margin: 10px;
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn{
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
  .details-box {
    flex-basis: 40%;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }
  textarea{
    width: 100%;
    border:2px solid white;
    background-color: transparent;
    color: white;
    border-radius:5px ;
    margin: 5px 10px;
    padding: 10px;
}
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;