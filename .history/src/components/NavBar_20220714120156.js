import { SiThemoviedatabase } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <div>
                <SiThemoviedatabase />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/news'>News</Link></li>

                </ul>

            </div>
            <div>
                <ul>
                    <li>Sign In</li>
                    <span>/</span>
                    <li>Sign Up</li>
                </ul>
                <SiThemoviedatabase />
            </div>

        </Container>

    )
}
const Container = styled.nav`
    background-color: whitesmoke
`

export default NavBar