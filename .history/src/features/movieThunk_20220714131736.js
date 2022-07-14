import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const response = await customFetch()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}