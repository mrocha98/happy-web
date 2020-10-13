import React from 'react'
import { Map as Leaflet, TileLayer } from 'react-leaflet'
import * as S from './styles'
import MapMarkerIcon from '../../assets/images/map-marker.svg'

const Map = () => {
  const { REACT_APP_MAPBOX_TOKEN } = process.env

  return (
    <S.Container>
      <S.Aside>
        <S.Header>
          <img src={MapMarkerIcon} alt="Ícone marcador" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </S.Header>

        <S.Footer>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </S.Footer>
      </S.Aside>

      <Leaflet center={[-23.1835951, -45.8864656]} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${REACT_APP_MAPBOX_TOKEN}`}
        />
      </Leaflet>

      <S.CreateLink to="/">
        <S.CreateIcon />
      </S.CreateLink>
    </S.Container>
  )
}

export default Map
