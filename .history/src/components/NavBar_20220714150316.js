import { SiThemoviedatabase } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <div>
                <SiThemoviedatabase className='Logo' />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/news'>News</Link></li>

                </ul>

            </div>
            <div>
                <ul>
                    <li><Link to='/login'>Sign In </Link></li>
                    <li>/</li>
                    <li><Link to='/signup'>Sign Up </Link></li>
                </ul>
                <SiThemoviedatabase />
            </div>

        </Container>

    )
}
const Container = styled.nav`
    background-color: whitesmoke;
    display:flex;
    justify-content:space-around;
    align-items:center;

    .Logo{
        font-size:3rem
        position: abo
    }
    
    div{
    display:flex;
    justify-content:space-around;
    align-items:center;
    }
    ul{
    display:flex;
    justify-content:space-around;
    align-items:center;
    }
    li{
        padding-inline:1rem;
        font-size:1.5rem
    }
    
`

export default NavBar