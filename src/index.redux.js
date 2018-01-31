// action-type
const ADD_GUN = '增加'
const REMOVE_GUN = '减少'

// reducer
export function counter (state = 0, action) {
  switch(action.type) {
    case ADD_GUN:
      return state+1
    case REMOVE_GUN:
      return state-1
    default:
      return 10
  }
}

// action creator

export function addGun () {
  return {type: ADD_GUN}
}
export function removeGun () {
  return {type: REMOVE_GUN}
}
// 处理异步
export function removGunAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeGun())
    }, 2000)
  }
}