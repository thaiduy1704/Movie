import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Carousel as CarouselMovie } from 'antd'
import { customFetch } from '../hooks/useFetch'
import styled from 'styled-components';
import { test, getMovies } from '../features/movieSlice';


const Carousel = () => {
    const dispatch = useDispatch()

    const testButton = () => {
        dispatch(test())
    }

    useEffect(() => {
        disgetMovies()
    }, [])


    const renderImg = () => {
        const arr = [1, 2, 3, 4, 5, 6]
        return (arr.map((item) => {
            return (
                <div>Item + {item}</div>
            )
        })

        )
    };

    return (
        <Container>
            <button onClick={testButton}>Hekllo</button>
            {/* <CarouselMovie autoplay>{renderImg()}</CarouselMovie> */}
        </Container>
    )
}
const Container = styled.div`
  height: 200px;
  color: #fff;
  text-align:center;
  background : #364d79;
  background-position: center ;
  background-size:100% 100%;
  background-repeat: no-repeat;
  
  
`


export default Carousel