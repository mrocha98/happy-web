import React from 'react'
import NotFoundArt from '../../assets/images/not-found.svg'
import * as S from './styles'

const NotFound = () => {
  return (
    <S.Container>
      <S.Image
        src={NotFoundArt}
        alt="Ilustração com uma pessoa dentro de um buraco segurando uma placa que indica o erro 404"
      />
      <S.LinkButton to="/">Voltar ao início</S.LinkButton>
    </S.Container>
  )
}

export default NotFound
