import axios from 'axios';

export const customFetch = axios.create({
    baseURL: process.env.REACT_APP_API,
});

customFetch.interceptors.request.use(
    (config) => {
        config.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
        config.headers.common['Authorization'] = `${process.env.REACT_APP_TOKEN_CYBERSOFT}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// export const checkForUnauthorizedResponse = (error, thunkAPI) => {
//     if (error.response.status === 401) {
//         thunkAPI.dispatch(clearStore());
//         return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
//     }
//     return thunkAPI.rejectWithValue(error.response.data.msg);
// };

// export default customFetch;