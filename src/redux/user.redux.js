import axios from 'axios'
import { getRedirectPath } from '../util'
// 定义action type
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'
// 初始化state
const initState = {
  // 增加一个跳转地址的属性
  redirecTo: '',
  user: '',
  msg: '',
  type: ''
}
// reducer 
export function user (state = initState, action) {
  // 根据action.type，更改state的值
  switch (action.type) {
    // case REGISTER_SUCCESS:
    // // getRedirectPath()用来获取注册成功后路由跳转的地址，然后赋值给redirecTo
    //   return {...state, msg: '', redirecTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
    // case LOGIN_SUCCESS:
    //   return {...state, msg: '', redirecTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
    case AUTH_SUCCESS:
			return {...state, msg:'',redirecTo:getRedirectPath(action.payload),...action.payload}
    case LOAD_DATA:
    // 这里只是为了把查询到的数据放进我们的redux中
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    case LOGOUT:
      return {...initState, redirecTo: '/login'}
    default:
      return state
  }
}
// action creator（产生不同的action）
function errorMsg (msg) {
  return {msg, type: ERROR_MSG}
}
// function registerSuccess (data) {
//   return {type: REGISTER_SUCCESS, payload: data}
// }
// function loginSuccess (data) {
//   return {type: LOGIN_SUCCESS, payload: data}
// }

// （registerSuccess + loginSuccess）可以合并为authSuccess
function authSuccess(obj){
	const {pwd,...data} = obj
	return {type: AUTH_SUCCESS, payload:data}
}
// action
export function loadData (userinfo) {
  return {type: LOAD_DATA, payload: userinfo}
}

// 退出登录更改state
export function logoutSubmit () {
  return {type: LOGOUT}
}

// 登录
export function login ({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名或密码')
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

// 处理异步请求(注册)
export function regisger ({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !repeatpwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd ) {
    return errorMsg('密码必须一致')
  }
  return dispatch => {
    axios.post('/user/register', {user, pwd, type}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({user, pwd, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

// 完善信息完善页面接口
export function updata (data) {
  return dispatch => {
    axios.post('/user/update', data).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}