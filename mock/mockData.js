// 获取 mock.Random 对象
// 引入mockjs
import { Random } from 'mockjs';
//1.
const getCode = () => {
    return {
        code: Random.natural(-1, 10),
    }
}
const login = () => {
    return {
        code: 200,
    }
}
export default {
    getCode, login
}