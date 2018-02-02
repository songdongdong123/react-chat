import React from 'react'
import { List, WingBlank, Button, InputItem, Radio } from 'antd-mobile'
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
    console.log(this.state)
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
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
                onChange={()=>this.handleChange('type', 'boose')}
                checked={this.state.type==='boose'}>
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