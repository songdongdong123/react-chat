import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import App from './app'
import { logout } from './Auth.redux' 
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

function Erying () {
  return <h1>二营</h1>
}
function Qingbinglian () {
  return <h1>骑兵连</h1>
}
@connect(
  state => state.auth,
  {logout}
)
class Dashboard extends React.Component{
  render () {
    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        <Button onClick={this.props.logout}>注销登录</Button>
        <ul>
          {/* link表明跳转被指定的路由 */}
          <li>
            <Link to="/dashboard/">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/erying" component={Erying}></Route>
        <Route path="/dashboard/qibinglian" component={Qingbinglian}></Route>
      </div>
    )
    return (
      this.props.isAuth?app:redirectToLogin
    )
  }
}

export default Dashboard