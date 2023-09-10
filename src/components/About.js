import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Container>
        <div class="about-section">
          <h1>What we do at FoodCoaster ? </h1>
          <ul>
            <li>
              We are the only food delivery service at NIT Rourkela campus.
            </li>
            <li>
              All the eateries in the NITR campus will be registered under us.
            </li>
            <li>
              Through our website, we will be accepting orders from the students
              and staff residing in NITR.
            </li>
            <li>
              Each one of them will receive orders through the website and the
              food will be delivered by one of their workers to the designated
              location.
            </li>
            <li>
              Incase of the unavailability of workers for the delivery, we would
              provide the same for the job with some additional charges.
            </li>
            <li>
              This website would bridge the gap between the students and the
              vendors and also upscale the food businesses running inside the
              campus.
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background: rgba(0, 0, 0, 0.4) url("./images/table1.jpg") no-repeat center
    center/cover;
  height: 100vh;
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  .about-section {
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: auto 100px;
    width: 70%;
    /* padding: 0px 240px; */
    margin-top: 140px;
    margin-left: 280px;
  }
  li {
    padding: 10px;
  }
`;
