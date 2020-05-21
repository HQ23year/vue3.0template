import axios from 'axios';
import storage from './storage'
import { Message } from 'element-ui';
// const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/devApi'  //跨域配置
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/'
// 地址 http://www.web-jshtml.cn/productapi 
const service = axios.create({
    baseURL: BASE_URL,
    // baseURL: 'http://www.web-jshtml.cn/productapi',
    // baseURL: 'http://10.0.0.99:8101',
    timeout: 5000
})

// .env.development下的变量在开发环境下被执行
// .env.production下的变量在生产环境下被执行

//console.log(process.env.NODE_ENV); //development || production 
//console.log(process.env.VUE_APP_ABC); //对应.env.development || .env.production文件
service.interceptors.request.use(config => {
    // console.log(config);
    config.headers['Token'] = storage.getToken() //将localStorage||cookie中的token存入请求头
    return config
}, error => {
    return Promise.reject(error)
})
service.interceptors.response.use(res => {
    switch (res.status) {
        case 200: return res.data
        case 500: return Promise.reject(res.data)
        default: return res.data
    }


}, error => {
    Message({
        showClose: true,
        message: '服务器连接异常!',
        type: 'error'
    });
    return Promise.reject(error)
})
export default service