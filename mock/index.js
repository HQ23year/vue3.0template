
/**
 * 定义本地测试接口，最好与正式接口一致，避免联调阶段修改工作量
 */
// 引入mockjs
import Mock from 'mockjs';
// 引入模板函数类
import mockData from './mockData';

Mock.setup({
    timeout: 800, // 设置延迟响应，模拟向后端请求数据
});
const baseUrl = 'http://10.0.0.99:8101'
Mock.mock(`${baseUrl}/getSms`, 'post', mockData.getCode)   //1.
Mock.mock(`${baseUrl}/login`, 'post', mockData.login)   //1.

//Mock.mock(`${baseUrl}/getSms`, 'post', mockData.data)   //1.