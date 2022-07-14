import { customFetch } from '../hooks/useFetch'

export const movieThunk = async (url) => {
    try {
        const response = await customFetch(url)
        return response.data.content
    } catch (error) {
        console.log(error);
    }
}