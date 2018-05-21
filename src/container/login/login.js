import React from 'react'
import { List, WingBlank, WhiteSpace, Button, InputItem } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux'
import './login.css'
import Logo from '../../component/logo/logo'

// function hello () {
//   console.log('hello ethan I love React')
// }

// function WrapperHello (fn) {
//   return function () {
//     console.log('befor say hello')
//     fn()
//     console.log('after say hello')
//   }
// }
// // hello 被重新装饰了
// // 我们把这种模式叫做装饰器模式
// hello = WrapperHello(hello)
// hello()

function WrapperHello(Com) {
  class WrapComp extends React.Component{
    render () {
      return (
        <div>
          <p>这是HOC高级组件中特有的属性</p>
          <Com {...this.props}></Com>
        </div>
      )
    }
  }
  return WrapComp
}

@WrapperHello
class Hello extends React.Component{
  render () {
    return (
      <div>
        <h1>hello ethan</h1>
      </div>
    )
  }
}

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
    // console.log(0)
    this.props.login(this.state)
  }
  render () {
    return (
      <div>
        <Hello></Hello>
        <Logo></Logo>
        {/* 在这里使用 this.props.redirecTo获取登录后要跳转的路由地址*/}
        {this.props.redirecTo && this.props.redirecTo !== '/login'?<Redirect to={this.props.redirecTo}></Redirect>:null}
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