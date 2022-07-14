import { useEffect } from 'react'
import { Carousel as CarouselMovie } from 'antd'
import { customFetch } from '../hooks/useFetch'
import styled from 'styled-components';


const Carousel = () => {
    console.log(process.env.REACT_APP_API);
    const fetchData = async () => {
        try {

            const data = await customFetch()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
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