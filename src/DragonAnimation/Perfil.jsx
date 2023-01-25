import styled from 'styled-components'
import Presentacion from './Presentacion'

const Container = styled.div`
    position: absolute;
    color: wheat;
    top:300px;
    border: 2px solid red;
    width: 100%;
    height: 1000px;
`

export default function Perfil() {
  return (
    <Container>
      <Presentacion/>
    </Container>
  )
}
