import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
})

axiosInstance.interceptors.response.use(
  function (response) {
    const responseObj = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
    }
    return { ...response, ...responseObj }
  },
  function (error) {
    return Promise.reject(error?.response?.data)
  }
)

export default axiosInstance
