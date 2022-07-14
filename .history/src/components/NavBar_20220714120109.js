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
                    <li></li>
                    <span>/</span>
                    <li></li>
                    
                </ul>
            </div>

        </Container>

    )
}
const Container = styled.nav`
    background-color: black
`

export default NavBar