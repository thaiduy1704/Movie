import styled from 'styled-components'
import { NavBar, Carousel, ListMovies } from '../components'
const HomePage = () => {
    return (
        <Container>
            <NavBar />
            <Carousel />
            <ListMovies />

        </Container>

    )
}
const Container = styled.main`
    background-color:red;
`
export default HomePage