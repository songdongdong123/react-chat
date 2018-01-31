import React from 'react'
import { Button } from 'antd-mobile'
// 引入connect
// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
import { connect } from 'react-redux'
import { addGun, removeGun, removGunAsync } from './index.redux'
@connect(
  // 第一个参数，表示你要state中的什么属性放到props
  state => ({num: state.counter}),
  // 你要什么方法，放到props里，会自动帮我们dispatch
  {addGun, removeGun, removGunAsync})
  class App extends React.Component{
    render () {
      // 在组件内部使用this.props来获取store
      return (
        <div>
          <h1>现在有员工{this.props.num}</h1>
          {/* 派发一个dispatch来告诉store，state发生了改变 */}
          <Button type="warning" onClick={this.props.addGun}>新招员工1</Button>
          <Button type="primary" onClick={this.props.removeGun}>裁剪员工</Button>
          <Button  type="ghost" onClick={this.props.removGunAsync}>过两天再裁员</Button>
        </div>
      )
    }
  }
// 作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射。
// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// const actionCreator = {addGun, removeGun, removGunAsync}
// connect负责从外部获取组件所需要的参数
// App = connect(mapStatetoProps, actionCreator)(App)

export default App