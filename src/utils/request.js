import axios from 'axios';
// const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/devApi'
const service = axios.create({
    // baseURL: BASE_URL,
    baseURL: 'http://10.0.0.99:8101',
    timeout: 5000
})
//console.log(process.env.NODE_ENV); //development || production 
//console.log(process.env.VUE_APP_ABC); //对应.env.development || .env.production文件
service.interceptors.request.use(config => {
    // console.log(config);
    //config.headers['Token'] = localStorage.getItem('token') //将localStorage ||cookie中的token存入请求头
    return config
}, error => {
    return Promise.reject(error)
})
service.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error)
})
export default service