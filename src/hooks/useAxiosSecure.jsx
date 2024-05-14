import axios from "axios"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://assaigment-11-server-site-henna.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(
        res => {
            // console.log('tamieh deklam')
            return res
        },
        async error => {
            // console.log('Error from axios interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
}

export default useAxiosSecure
