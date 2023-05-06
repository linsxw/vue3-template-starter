import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

/** 请求配置 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response
  },
  (error: any) => {
    // 处理响应错误
    return Promise.reject(error)
  },
)

interface ApiResult<T> {
  code: number
  message: string
  data: T
}

export default {
  /** get方法 */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
    const response = await axiosInstance.get<ApiResult<T>>(url, config)
    return response.data
  },
  /** post方法 */
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
    const response = await axiosInstance.post<ApiResult<T>>(url, data, config)
    return response.data
  },
  /** put方法 */
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
    const response = await axiosInstance.put<ApiResult<T>>(url, data, config)
    return response.data
  },
  /** delete方法 */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
    const response = await axiosInstance.delete<ApiResult<T>>(url, config)
    return response.data
  },
  /** 公共方法 */
  async request<T>(config: AxiosRequestConfig): Promise<ApiResult<T>> {
    const response = await axiosInstance.request<ApiResult<T>>(config)
    return response.data
  },
}
