import { SiThemoviedatabase } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <div>
                <SiThemoviedatabase className='Logo' />
                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/news'>News</Link></li>

                </ul>

            </div>
            <div>
                <ul>
                    <li><Link to='/login' className='link'>Sign In </Link></li>
                    <li className='link'>/</li>
                    <li><Link to='/signup' className='link'>Sign Up </Link></li>
                </ul>

            </div>

        </Container>

    )
}

const Container = styled.nav`
    background-color: #343A40;
    display:flex;
    justify-content:space-around;
    align-items:center;

    .Logo{
        color: red;
        font-size:3rem;
        position: absolute;
        left :5%;
        font-weight
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
        font-size:1.5rem;
    }
    .link{
        color: white;
    }
    
`

export default NavBar