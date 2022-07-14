import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const data = await customFetch()
    } catch (error) {

    }
}