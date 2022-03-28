// 取token
export function getToken() {
  return sessionStorage.getItem('token')
}
// 存token
export function setToken(token) {
  return sessionStorage.setItem('token', token)
}
// 移除token
export function removeToken() {
  return sessionStorage.removeItem('token')
}