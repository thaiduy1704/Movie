import axios from 'axios';

export const customFetch = (url) => {

    const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API}${url}`,
    });

    axiosInstance.interceptors.request.use(
        (config) => {

            config.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
            config.headers.common['TokenCybersoft'] = `${process.env.REACT_APP_TOKEN_CYBERSOFT}`;

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return axiosInstance()



}
