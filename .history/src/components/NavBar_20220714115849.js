import { SiThemoviedatabase } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <div>
                <SiThemoviedatabase />
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>News</Link></li>

                </ul>

            </div>

        </Container>

    )
}
const Container = styled.nav`
    background-color: black
`

export default NavBar