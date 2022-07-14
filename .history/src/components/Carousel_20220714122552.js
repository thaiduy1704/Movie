import React from 'react'
import { Carousel as CarouselMovie } from 'antd'


const Carousel = () => {


    const renderImg = () => {
        return arrImg.map((item, index) => {
            return (
                <div key={index}>
                    <div
                        style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
                    >
                        <img
                            className="w-full opacity-0"
                            src={item.hinhAnh}
                            alt={item.hinhAnh}
                        />
                    </div>
                </div>
            );
        });
    };

    return (
        <CarouselMovie />
    )
}

export default Carousel