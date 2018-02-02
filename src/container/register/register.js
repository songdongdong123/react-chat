import React from 'react'
import { List, WingBlank, Button, InputItem, Radio } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { regisger } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
import './register.css'

@connect(
  state => state.user,
  {regisger}
)
class Register extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleResgister = this.handleResgister.bind(this)
  }
  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }
  handleResgister () {
    this.props.regisger(this.state)
    // this.props.regisger(this.state)这是一个异步操作，所以我们在handleResgister()
    // 是获取不到this.props.redirecTo的值得，所以不能在这里跳转路由
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        {/* 在这里使用 this.props.redirecTo获取注册后要跳转的路由地址*/}
        {this.props.redirecTo?<Redirect to={this.props.redirecTo}></Redirect>:null}
        <p className="errortoast">{this.props.msg?this.props.msg:null}</p>
          <WingBlank>
            <List>
              <InputItem
                onChange={v=>this.handleChange('user', v)}
              >用户名</InputItem>
              <InputItem
                type="password"
                onChange={v=>this.handleChange('pwd', v)}
              >密码</InputItem>
              <InputItem
                type="password"
                onChange={v=>this.handleChange('repeatpwd', v)}
              >确认密码</InputItem>
              <RadioItem
                onChange={()=>this.handleChange('type', 'genius')} 
                checked={this.state.type==='genius'}>
                员工
              </RadioItem>
              <RadioItem 
                onChange={()=>this.handleChange('type', 'boss')}
                checked={this.state.type==='boss'}>
                老板
              </RadioItem>
            </List>
          </WingBlank>
          <Button type="primary" className="register"
            onClick={this.handleResgister}
          >注册</Button>
      </div>
    )
  }
}

export default Register