import axios from "axios"
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth'
const service = axios.create({
    baseURL: "localhost:8080",  // url = base url + request url
    timeout: 5000
})
//请求拦截  请求之前做什么事
service.interceptors.request.use((config) => {
    console.log("这是请求拦截")
    if (getToken()) {
        config.headers['token'] = getToken()
    }
    return config
}, (error) => {
    return Promise.reject(error)
}

)
//响应拦截
service.interceptors.response.use((response)=>{
    console.log("这里是响应拦截",response)
    const res=response.data
    if(!res.success){
        Message({
            type:"error",
            message:res.message || '请求错误'
        })
        return Promise.reject(new Error(res.message || '请求错误'))
    }else{
        return res
    }
    
},function (error) {
    Message({
        message:error.message,
        type:"error"
    })
    return Promise.reject(error);
  })
export default service