import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')

// 获取聊天列表
const MSG_LIST = 'MSG_LIST'
// 获取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
// const MSG_READ = 'MSG_READ'

const initState = {
  chatmsg: [],
  users: {},
  unread: 0
}

export function chat (state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      // console.log(action)
      return {...state,users:action.payload.users, chatmsg: action.payload.msgs, unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userid).length}
    case MSG_RECV:
    const n = action.payload.to === action.userid?1:0
      return {...state, chatmsg: [...state.chatmsg, action.payload], unread:state.unread+n}
    // case MSG_READ:
    default:
      return state 
  }
}

function msglist (msgs, users, userid) {
  // console.log(msgs)
  return {type: MSG_LIST, payload: {msgs, users, userid}}
}

function msgRecv (data, userid) {
  // console.log(data)
  return {type: MSG_RECV, payload: data, userid}
}

export function recvMsg () {
  return (dispatch, getState) => {
    socket.on('recvemsg', function (data) {
      // console.log('recvemsg', data)
      const userid = getState().user._id
      dispatch(msgRecv(data, userid))
    })
  }
}

export function sendMsg ({form,to,msg}) {
  return dispatch => {
    socket.emit('sendmsg',{form,to,msg})
  }
}

export function getMsgList () {
  return (dispatch, getState) => {
    axios.get('/user/getmsglist').then(res => {
      const userid = getState().user._id
      if (res.status === 200 && res.data.code === 0) {
        dispatch(msglist(res.data.msgs, res.data.users, userid))
      }
    })
  }
}