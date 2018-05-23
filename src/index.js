import React from 'react'
import ReactDom from 'react-dom'
// applyMiddleware, compose用来配置redux插件调试redux
import { createStore, applyMiddleware, compose } from 'redux'
// 引入Provider组件，帮助我们处理redux的一个组件
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// thunk处理异步流程
import thunk from 'redux-thunk'
import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import './config'
import './index.css'

// 新建一个store
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render((
  // 把store传递给Provider
  // Provider的唯一功能就是传入store对象。只用一次
  <Provider store = {store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {/* <Route path="/chart:user"></Route> */}
          <Route component={Dashboard}></Route>
          {/* <Redirect to="/login"></Redirect> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))