import axios from 'axios'
// 定义action type
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
// 初始化state
const initState = {
  isAuth: false,
  user: '',
  pwd: '',
  msg: '',
  type: ''
}
// reducer 
export function user (state = initState, action) {
  // 根据action.type，更改state的值
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', isAuth: true, ...action.plyload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
}
// action creator（产生不同的action）
function errorMsg (msg) {
  return {msg, type: ERROR_MSG}
}
function registerSuccess (data) {
  return {type: REGISTER_SUCCESS, payload: data}
}
// 处理异步请求
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
        dispatch(registerSuccess({user, pwd, repeatpwd, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}