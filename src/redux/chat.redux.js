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
  unread: 0
}

export function chat (state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      // console.log(action)
      return {...state, chatmsg: action.payload, unread: action.payload.filter(v => !v.read).length}
    case MSG_RECV:
      return {...state, chatmsg: [...state.chatmsg, action.payload], unread:state.unread+1}
    // case MSG_READ:
    default:
      return state 
  }
}

function msglist (msgs) {
  // console.log(msgs)
  return {type: MSG_LIST, payload: msgs}
}

function msgRecv (data) {
  // console.log(data)
  return {type: MSG_RECV, payload: data}
}

export function recvMsg () {
  return dispatch => {
    socket.on('recvemsg', function (data) {
      // console.log('recvemsg', data)
      dispatch(msgRecv(data))
    })
  }
}

export function sendMsg ({form,to,msg}) {
  return dispatch => {
    socket.emit('sendmsg',{form,to,msg})
  }
}

export function getMsgList () {
  return dispatch => {
    axios.get('/user/getmsglist').then(res => {
      // console.log(res)
      if (res.status === 200 && res.data.code === 0) {
        dispatch(msglist(res.data.msgs))
      }
    })
  }
}