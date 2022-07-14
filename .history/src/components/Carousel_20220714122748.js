import React from 'react'
import { Carousel as CarouselMovie } from 'antd'


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
        <CarouselMovie autoplay>{</CarouselMovie>
    )
}

export default Carousel