import { SiThemoviedatabase } from 'react-icons/si'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <SiThemoviedatabase/>

        </Container>
        <div>NavBar</div>
    )
}
const Container = styled.nav`
    background-color: black
`

export default NavBar