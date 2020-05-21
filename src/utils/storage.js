// import cookie from 'js-cookie';
const getToken = (key = 'token') => localStorage.getItem(key)
const setToken = (data, key = 'token') => localStorage.setItem(key, data)
const removeToken = (key = 'token') => localStorage.removeItem(key)
export default { getToken, setToken, removeToken }