import request from '@/api';
import { defaultRouter, asyncRouter } from '@/router';
const state = {
    roles: [],
    allRouter: defaultRouter,
    addRouter: []
}
const getters = {
    roles: state => state.roles,
    allRouter: state => state.allRouter,
    addRouter: state => state.addRouter,
}
const mutations = {
    SET_ROLES: (state, data) => {
        state.roles = data
    },
    SET_ROUTER: (state, data) => {
        state.addRouter = data
        state.allRouter = defaultRouter.concat(data)
    }
}
const actions = {
    // 获取用户角色
    async getRoles({ commit }, data) {
        //    roles :[ 'info','admin' ]
        // const res = await request.login.getRoles()
        const res = ['user', 'admin']
        commit('SET_ROLES', res)
        return res
    },
    // 创建动态路由
    async createRouter({ commit }, data) {
        // let roles = data
        let roles = ['user']
        let addRouter = [];
        if (roles.includes('admin')) {
            addRouter = asyncRouter
        } else {
            addRouter = asyncRouter.filter(item => roles.includes(item.meta.roles))
            console.log(addRouter);
        }
        //判断动态路由表中是否包含该用户角色

        commit('SET_ROUTER', addRouter)
        return true;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}