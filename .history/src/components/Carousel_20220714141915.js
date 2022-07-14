import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Carousel as CarouselMovie } from 'antd'
import styled from 'styled-components';
import { getMovies } from '../features/movieSlice';
const contentStyle = {
    height: "600px",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
};

const Carousel = () => {
    const { movies, loading } = useSelector((store) => store.movies)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getMovies())
    }, [])


    const renderImg = () => {

        return movies.map((item, index) => {
            return (
                <div key={index}>
                    <div
                        style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
                    >

                    </div>
                </div>
            );
        });
    };

    if (loading) return <h1>LOADING</h1>

    return (
        <Container>

            <CarouselMovie autoplay>{renderImg()}</CarouselMovie>
        </Container>
    )
}
const Container = styled.div`

`


export default Carousel