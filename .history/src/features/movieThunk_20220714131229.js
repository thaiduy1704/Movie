import { customFetch } from '../hooks/useFetch'

export const movieThunk = async (thunkAPI) => {
    try {
        const data = await customFetch()
        return data
    } catch (error) {

    }
}