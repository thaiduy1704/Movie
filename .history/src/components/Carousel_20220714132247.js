import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Carousel as CarouselMovie } from 'antd'
import { customFetch } from '../hooks/useFetch'
import styled from 'styled-components';
import { test, getMovies } from '../features/movieSlice';


const Carousel = () => {
    const { movies, loading } = useSelector((store) => store.movies)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getMovies())
    }, [])




    const renderImg = () => {
        
        return (arr.map((item) => {
            return (
                <div>Item + {item}</div>
            )
        })

        )
    };

    if (loading) return <h1>LOADING</h1>

    return (
        <Container>

            <CarouselMovie autoplay>{renderImg()}</CarouselMovie>
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