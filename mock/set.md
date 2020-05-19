 ```js
Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
Random.cfirst(), //模拟姓氏
 Random.natural(10, 30), //返回一个随机的自然数
Random.clast(),//模拟名字
Random.csentence(5, 10), // 生成一条随机的中文句子 ( min, max )
Random.date("yyyy-MM-dd"),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
 Random.time(),//时间
Random.image('200x100', '#4A7BF7', 'Hello'), //模拟图片 宽高不指定则随机
Random.city(true), //生成在某个省份的某个城市 city()生成随机城市
Random.province(),//生成随机省份
Random.url(), //生成随机URL(每次运行结果不同)
Random.ip()   //  "74.97.41.159" 生成随机IP(每次运行结果不同)