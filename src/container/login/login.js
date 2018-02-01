import React from 'react'
import { List, WingBlank, WhiteSpace, Button, InputItem } from 'antd-mobile'
import './login.css'
import Logo from '../../component/logo/logo'

class Login extends React.Component{
  constructor (props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register () {
    // 因为login是一个路由组件，所有this.props里面含有所有跟路由相关的操作
    // 所以这里我们就可以使用this.props.history.push来进行路由的跳转
    this.props.history.push('/register')
  }
  render () {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <Button className="login" type="primary">登录</Button>
          <WhiteSpace/>
          <Button type="ghost" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login