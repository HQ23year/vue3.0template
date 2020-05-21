// 获取 mock.Random 对象
// 引入mockjs
import { Random } from 'mockjs';
const getSms = {
    resCode: 0,
    data: { code: Random.natural(-1, 10), },
    message: "OK"
}

const getList = {
    data: {
        "data|1-10": [
            {
                "id|+1": 1,
                "categoryId|+4": 1,
                content: Random.cparagraph(0, 2),
                title: Random.cword(1, 10),
                "createDate": '@dateTime'
            }
        ]
    },
    message: "添加成功",
    resCode: 0,

}
export default {
    getSms, getList
}