import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div>
        {this.props.isAuth?<Redirect to="/dashboard"></Redirect>:null}
        <h2>您还没有登录，没有权限查看</h2>
        <Button onClick={this.props.login}>登录</Button>
      </div>
    )
  }
}

export default Auth