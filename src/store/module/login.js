import request from '@/api';
const state = {
    isCollapse: false
}
const getters = {}
const mutations = {
    SET_ISCOLLAPSE: (state) => state.isCollapse = !state.isCollapse
}
const actions = {
    async test({ commit, state }, data) {
        try {
            const res = await request.login.getSms()
            console.log(res);
            return res
        } catch (error) {
            console.log(error);
        }
    },
    async login({ commit, state }, data) {
        try {
            const res = await request.login.login()
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}