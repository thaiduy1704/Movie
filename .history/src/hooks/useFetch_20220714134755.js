import axios from 'axios';

export const customFetch =() axios.create({
    baseURL: process.env.REACT_APP_API,
});

customFetch.interceptors.request.use(
    (config) => {

        config.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
        config.headers.common['TokenCybersoft'] = `${process.env.REACT_APP_TOKEN_CYBERSOFT}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


