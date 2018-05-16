import axios from 'axios'

const USER_LIST = 'USER_LIST'

const initState = {
  userlist: [],
  scrollState: false
}

export function chartuser (state=initState, action) {
  switch(action.type) {
    case USER_LIST:
      return {...state, userlist:action.payload, scrollState:true}
    default:
      return state
  }
}

function userList (data) {
  return {type: USER_LIST, payload:data}
}

export function getUserlist (type) {
  return dispatch => {
    axios.get('/user/userlist?type='+type).then(res => {
      if(res.data.code===0){
        dispatch(userList(res.data.data))
      }
    })
  }
}