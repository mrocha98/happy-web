import React from 'react'
import * as S from './styles'
import LogoIcon from '../../assets/images/logo.svg'

const Landing = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Logo src={LogoIcon} alt="Logo do Happy" />

        <S.Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </S.Main>

        <S.Location>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </S.Location>

        <S.Link to="/map">
          <S.LinkIcon />
        </S.Link>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default Landing
