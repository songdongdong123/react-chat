
import axios from 'axios'

// action type
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  isAuth: false,
  user: '',
  pwd: '',
  msg: '',
  type: ''
}


// reducer 
export function user (state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', isAuth: true, ...action.plyload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
}

// action creator
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
    axios.post('/user/resgister', {user, pwd, type}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(registerSuccess({user, pwd, repeatpwd, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}