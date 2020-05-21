
/**
 * 定义本地测试接口，最好与正式接口一致，避免联调阶段修改工作量
 */
// 引入mock.js
import Mock from 'mockjs';
// 引入模板函数类
import mockData from './mockData';

Mock.setup({
    timeout: 800, // 设置延迟响应，模拟向后端请求数据
});
Mock.mock("/getSms", 'post', mockData.getList)
Mock.mock("/login", 'post', mockData.getSms)
Mock.mock("/news/getList", 'post', mockData.getList)
