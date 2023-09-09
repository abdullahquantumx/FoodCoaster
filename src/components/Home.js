import styled from'styled-components'
import React from "react";
import { Link } from "react-router-dom"


function Home() {
    return (
        <>
          {/* <div>Heloo</div>  */}
            <Container>
            <div className='main'>
                <div className='overlay'></div>
               <video src="./images/videoBg.mp4" autoPlay loop muted/>
               <div className='content'>
                    <h1>Welcome</h1>
                    <Link to='/Restaurant' className='order'>Order Now</Link>
               </div>
            </div>
            </Container>   
        </>
    )
}

export default Home
const Container=styled.div`
border: 2px solid black;
/* height: 100vh; */
/* background-color: black; */
height: 100vh;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
.content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.overlay{
    position: absolute;
    top: 57.9px;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background-color: rgba(0,0,0,0.2); */
}
.order{
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
    transition:all 0.1s ease-in-out 0.1s;
}
.order:hover{
    font-size: 1.7rem;
    color: green;
}

`