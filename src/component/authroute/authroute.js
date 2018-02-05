import React from 'react'
import axios from 'axios'
// react-router-dom给我们提供了withRouter
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

// 我们的组件使用@withRouter就可以在组件内内部使用route的方法
@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component{
  componentDidMount () {
    // 获取用户信息
    // 是否登陆
    // 现在的URL地址 login是不需要跳转的
    // 用户的type 身份是老板还是员工
    // 用户时候完善信息（选择图像或者个人简介）
    const publicList = ['/login', '/register']
    const pathName = this.props.location.pathname
    if (publicList.indexOf(pathName) > -1) {
      // 如果当前页面处于登录页面或者注册页面，则返回一个空
      // 反之则去拉去用户信息
      return null
    }
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          // 含有登陆信息
          // 这里loadData是为了把查询到的信息放进redux中
          this.props.loadData(res.data.data)
        } else {
          // 如果是不含登录信息的，则跳转至登录页面
        //  跳转到登录页面
          this.props.history.push('/login')
        }
      }
    })
  }
  render () {
    return null
  }
}

export default AuthRoute