import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Plus } from 'styled-icons/feather'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;

  &.leaflet-container {
    z-index: 5;
  }
`
export const Aside = styled.aside`
  background: linear-gradient(329.54deg, #298601 0%, #00c7c7 100%);
  padding: 80px;
  width: 440px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`

export const Header = styled.header``

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  strong {
    font-weight: 800;
  }
`

export const CreateLink = styled(RouterLink)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;

  z-index: 10;

  background-color: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 200ms;

  &:hover {
    background-color: #17d6eb;
  }
`

export const CreateIcon = styled(Plus)`
  height: 32px;
  width: 32px;

  color: #fff;
`
