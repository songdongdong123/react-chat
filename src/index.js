import React from 'react'
import ReactDom from 'react-dom'
// applyMiddleware, compose用来配置redux插件调试redux
import { createStore, applyMiddleware, compose } from 'redux'
// 引入Provider组件，帮助我们处理redux的一个组件
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// thunk处理异步流程
import thunk from 'redux-thunk'
// import App from './app'
import Auth from './Auth'
import Dashboard from './Dashboard'
// import { counter} from './index.redux'
import reducers from './reducer'

// 新建一个store
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
// 登录
// 没有登录信息，统一跳转login
// 页面  导航+显示+注销
  // 一营、
  // 二营、
  // 骑兵连

// router+redux来管理 

ReactDom.render((
  // 把store传递给Provider
  // Provider的唯一功能就是传入store对象。只用一次
  <Provider store = {store}>
    <BrowserRouter>
       {/* exact表明完全匹配 */}
        {/* path匹配对应的路由，component表示匹配后对应渲染的组件 */}
        <Switch>
          <Route path="/login" exact component={Auth}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          {/* 如果没有命中则跳转至 dashboard*/}
          <Redirect to="/dashboard"></Redirect>
        </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))