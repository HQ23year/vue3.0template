const getToken = () => localStorage.getItem('token')
const setToken = (data) => localStorage.setItem('token', data)
const removeToken = () => localStorage.removeItem('token')
export default { getToken, setToken, removeToken }