
import router from '@/router';
import storage from './storage';
import store from '@/store';
const whiteRouter = ['/login']
/*
    1.不存在token,并且去登录页面
    2.不存在token,并且不是去登录页面
    3.存在token,并且去登录页面
    4.存在token,并且不是去登录页面
*/
// router.beforeEach(async (to, from, next) => {
//     if (storage.getToken()) {
//         if (to.path === '/login') {
//             /*
//                 存在token,并且去登录页面
//                 退出登录 ,清除localStorage,vuex初始化
//             */
//             // storage.removeToken() 
//             next()
//         } else {
//             // 存在token,并且不是去登录页面
//             /*  如果没有用户角色,先去获取 */
//             if (store.getters['permission/roles'].length == 0) {
//                 try {
//                     // 先获取用户角色
//                     const res = await store.dispatch('permission/getRoles')
//                     const info = await store.dispatch('permission/createRouter', res)
//                     if (info) {
//                         let addRouters = store.getters['permission/addRouter']
//                         let allRouters = store.getters['permission/allRouter']
//                         router.options.routes = allRouters //更新路由
//                         router.addRoutes([...addRouters])    //添加动态路由
//                         next({ ...to, replace: true })
//                     }

//                 } catch (error) {
//                     console.log(error);
//                 }

//             } else {

//                 next()
//             }

//         }
//     } else {
//         console.log(to.path);
//         // 不存在token时,如果去登录页面,直接放行,否则强制跳转到登录页面
//         whiteRouter.includes(to.path) ? next() : next('./login')
//     }
//     next()
// })