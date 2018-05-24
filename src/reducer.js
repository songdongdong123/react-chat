//合并所有reducer并返回
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chartuser } from './redux/chatuser.redux'
import { chat } from './redux/chat.redux'

export default combineReducers({user, chartuser, chat})

