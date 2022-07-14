import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const data = await customFetch()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}