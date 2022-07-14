import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const response = await customFetch("/api/QuanLyPhim/LayDanhSachBanner")
        return response.data.content
    } catch (error) {
        console.log(error);
    }
}

export const getListMovies = async () => {
    try {
        const response = await customFetch()
        return response.data.content
    } catch (error) {
        console.log(error);
    }
}