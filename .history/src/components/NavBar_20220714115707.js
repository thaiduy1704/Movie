import { SiThemoviedatabase } from 'react-icons/si'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <div>
            <SiThemoviedatabase />
            <ul></ul>

            </div>

        </Container>

    )
}
const Container = styled.nav`
    background-color: black
`

export default NavBar