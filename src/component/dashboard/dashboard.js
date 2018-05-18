import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLink from '../navlink/navlink'
import Boss from './../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
function Msg () {
  return <h1>消息页面</h1>
}
// function User () {
//   return <h1>个人中心</h1>
// }
@connect(
  state=>state
)
class Dashboard extends React.Component{
  render () {
    const user = this.props.user
    const {pathname} = this.props.location
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type==='genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'Boss列表',
        component: Genius,
        hide: user.type==='boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]
    const page = navList.find(v=>v.path===pathname)
    return page ? (
        <div>
          <NavBar mode="dard">{navList.find(v=>v.path===pathname).title}</NavBar>
          <div>
              <Switch>
                {navList.map(v=>(
                  <Route key={v.path} path={v.path} component={v.component}></Route>
                ))}
              </Switch>
          </div>
          <NavLink data={navList}></NavLink>
        </div>
    ):null
  }
}

export default Dashboard