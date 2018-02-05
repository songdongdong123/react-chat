import React from 'react'
import { List, WingBlank, WhiteSpace, Button, InputItem } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux'
import './login.css'
import Logo from '../../component/logo/logo'

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register () {
    // 因为login是一个路由组件，所有this.props里面含有所有跟路由相关的操作
    // 所以这里我们就可以使用this.props.history.push来进行路由的跳转
    this.props.history.push('/register')
    // this.props.regisger(this.state)这是一个异步操作，所以我们在handleResgister()
    // 是获取不到this.props.redirecTo的值得，所以不能在这里跳转路由
  }
  handelChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleLogin () {
    this.props.login(this.state)
  }
  render () {
    return (
      <div>
        <Logo></Logo>
        <p>{this.props.redirecTo}</p>
        {/* 在这里使用 this.props.redirecTo获取登录后要跳转的路由地址*/}
        {this.props.redirecTo?<Redirect to={this.props.redirecTo}></Redirect>:null}
        <WingBlank>
          <List>
            <p className="errortoast">{this.props.msg?this.props.msg:null}</p>
            <InputItem
              onChange = {v => this.handelChange('user', v)}
            >用户</InputItem>
            <InputItem
              onChange = {v => this.handelChange('pwd', v)}
            >密码</InputItem>
          </List>
          <Button 
            onClick = {this.handleLogin}
            className="login" 
            type="primary">登录</Button>
          <WhiteSpace/>
          <Button type="ghost" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login