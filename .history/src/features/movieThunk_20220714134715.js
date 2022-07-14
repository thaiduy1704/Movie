import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const response = await (await customFetch()).headers
        return response.data.content
    } catch (error) {
        console.log(error);
    }
}