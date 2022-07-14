import { customFetch } from '../hooks/useFetch'

export const movieThunk = async () => {
    try {
        const response = await customFetch()({ URL: "api/QuanLyPhim/LayDanhSachBanner" })
        return response.data.content
    } catch (error) {
        console.log(error);
    }
}