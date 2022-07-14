import axios from 'axios';

export const customFetch = () => {

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API,
    });

    
}

