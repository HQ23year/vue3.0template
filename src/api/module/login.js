import service from '@/utils/request';
export default {
    /* 获取验证码 */
    getSms: (data) => service.post('/getSms', data),
    /* 获取用户角色 */
    getRoles: () => service.post('/login', data),
    /* 登录 */
    login: (data = {}) => service.post('/login', data)
    /* 注册 */
}
