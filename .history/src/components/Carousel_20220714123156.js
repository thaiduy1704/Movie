import React from 'react'
import { Carousel as CarouselMovie } from 'antd'
import styled from 'styled-components';


const Carousel = () => {


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

            <CarouselMovie autoplay>{renderImg()}</CarouselMovie>
        </Container>
    )
}
const Container = styled.div`
    height: "800px";
  color: "#fff";
  // lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
`


export default Carousel