import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const response = await customFetch()
        console.log(response);
        return data
    } catch (error) {
        console.log(error);
    }
}