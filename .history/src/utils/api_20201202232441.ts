import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import axios,{AxiosRequestConfig} from 'axios'
interface axiosConfig {
    baseUrl : string,
    timeout : number
}
let options:axiosConfig = {
    baseUrl:"",
    timeout:5000
}
const instance:AxiosInstance = axios.create(options);
// 请求拦截器
instance.interceptors.request.use((config : AxiosRequestConfig)=>{
    return config;
},(err:any)=>{
    return Promise.reject(err)
});
// 响应拦截器
instance.interceptors.response.use((Response : AxiosResponse)=>{
    return Response;
},err=>{
    return Promise.reject(err)
});
// 封装get请求
export function get(url:string,paramts:any) : Promise<AxiosInstance>{
     return instance.get(url,paramts);
}
// 封装post请求
export function post(url:string,paramts:any) : Promise<AxiosInstance>{
    return instance.post(url,paramts);
}