import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight } from 'styled-icons/feather'
import LandingArt from '../../assets/images/landing.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(329.54deg, #298601 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 780px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  background: url(${LandingArt}) no-repeat right center;
`

export const Logo = styled.img`
  margin-left: 16px;
`

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`

export const Link = styled(RouterLink)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 200ms;

  &:hover {
    background: #96feff;
  }
`
export const LinkIcon = styled(ArrowRight)`
  height: 26px;
  width: 26px;

  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
`
