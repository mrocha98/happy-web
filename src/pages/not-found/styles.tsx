import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`
export const Image = styled.img`
  max-width: 600px;
  max-height: 600px;
`
export const LinkButton = styled(Link)`
  border-radius: 16px;
  background-color: #00c7c7;

  margin-top: 12px;
  padding: 24px;

  font-weight: 800;
  text-transform: uppercase;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.7;
  }
`
