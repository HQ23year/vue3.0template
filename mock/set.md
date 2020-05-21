 ```js
Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
Random.cfirst(), //模拟姓氏
Random.natural(10, 30), //返回一个随机的自然数
Random.integer(100,5000),//100到5000的随机整数
Random.clast(),//模拟名字
Random.csentence(5, 10), // 生成一条随机的中文句子 ( min, max )
Random.date("yyyy-MM-dd"),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
Random.time() //返回一个随机的时间字符串
Random.image('200x100', '#4A7BF7', 'Hello'), //模拟图片 宽高不指定则随机
Random.city(true), //生成在某个省份的某个城市 city()生成随机城市
Random.province(),//生成随机省份
Random.url(), //生成随机URL(每次运行结果不同)
Random.ip()   //  "74.97.41.159" 生成随机IP(每次运行结果不同)
Random.cword(8,20),//随机长度为在8到20内的汉字字符串
Random.cparagraph(0,10);//随机生成0到10段句子
"person|1-50": [{  //建立一个数组，数组名为person 将对以下对象随机循环 1-50条
    "id|+1": 1,
    "name":"@cname", //随机一个名字
    'name' :'@name',//英文名
    'cname': '@cname()',//中文名
    'email': '@email',//邮箱
    'phone': /^1[385][1-9]\d{8}/,//手机号
    'color': '@color',//颜色
    'title': '@title',//英文标题
    'url': '@url("http")',//链接
    'image': Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),//图片
    'date': '@date("yyyy-MM-dd HH:mm:ss")',
    'date2': '@dateTime',//时间
    'cadd': '@province' + '@city' + '@county',//地址
    "age|18-28":1,   //随机一个年级 范围 18-28
    "height|150-180.2": 150,  //随机身高 ，整数：150-180 ，小数部分，两位小数
    "sex|1":['男','女'],  //随机选择男或女
    'random1': /[a-z]{2}[A-Z]{2}[0-9]/,// 返回随机字符
    'random2': '@string("lower", 5)'// 返回随机字符
    "hobby|1-3": {  //随机选择 1-3个爱好
        '01':'篮球',
        '02':'唱',
        '03':'rap',
        '04':'写代码'
    },
    'job|1':['画师','程序员','医生']  //随机选择一个职业
}]
