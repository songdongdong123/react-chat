import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
  state => state.auth,
  {login, getUserData}
)
class Auth extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    this.props.getUserData()
    // axios.get('/data').then(res => {
    //   if (res.status === 200) {
    //     console.log(res)
    //     this.setState({data: res.data})
    //   }
    // })
  }
  render () {
    return(
      <div>
        <h1>我的名字是{this.props.user},我的年龄是{this.props.age}</h1>
        {this.props.isAuth?<Redirect to="/dashboard"></Redirect>:null}
        <h2>您还没有登录，没有权限查看</h2>
        <ul>
          {this.state.data.map(v=>{
            return <li key={v.user+Math.random()}>{v.user}</li>
          })}
        </ul>
        <Button onClick={this.props.login}>登录</Button>
      </div>
    )
  }
}

export default Auth