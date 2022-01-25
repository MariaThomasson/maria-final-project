import React from 'react'
import styled from 'styled-components/macro'

const AboutSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
color: #1a1a1a;
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 26px;
  }
  a {
    font-weight: bold;
  }
  @media (min-width: 768px) {
    padding: 10% 20%;
  }
`
export const About = () => {
  return (
    <AboutSection>
      <h1>About the project</h1>
      <p>
        This website was built by Maria Thomasson as my final project at the Technigo coding bootcamp. 
        The project is a combination between school and my new job and aims to create value to our customers.
      </p>
      <h2>Who am I?</h2>
      <p>
        The programmer behind this project is
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mariathomasson/">Maria Thomasson</a>
        If you have any questions make sure to reach out on LinkedIn.
      </p>
    </AboutSection>
  )
}