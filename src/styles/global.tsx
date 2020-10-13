import { createGlobalStyle } from 'styled-components'
import 'leaflet/dist/leaflet.css'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: #EBF2F5;
  }

  body, input, textarea, button {
    font: 600 18px Nunito, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
