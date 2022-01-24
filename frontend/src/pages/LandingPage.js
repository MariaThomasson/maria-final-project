import React from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  a {
    text-decoration: none;
  }
`
const HeroImage = styled.div`
  position: relative;
  height: 80vh;
  background-image: url('https://res.cloudinary.com/maria-final-project/image/upload/v1643031320/Final%20Project/04_gzxfmj.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const HeroTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ffffff4d;
  transform: translate(-50%, -50%);
`
const HeroTitle = styled.h2`
  margin: 10px 0;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 51px;
  }
`
const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-top: 30px;
    margin-bottom: 0;
  }
`

export const LandingPage = () => {
  const history = useNavigate()

  const toAllProducts = () => {
    history.push('/products')
  }

  const toMarket = () => {
    history.push('/market')
  }

  return (
    <Container>
      <HeroImage>
        <HeroTextContainer>
          <HeroTitle>What we can do for you</HeroTitle>
          <SubTitle>Integrate your stats for your customers</SubTitle>
          <ButtonWrapper>
            <Button onClick={toAllProducts} title="Let´s Qonnect" background="transparent" />
            <Button onClick={toMarket} title="Charts" background="transparent" />
          </ButtonWrapper>
        </HeroTextContainer>
      </HeroImage>
    </Container>
  )
}