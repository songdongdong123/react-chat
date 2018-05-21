import React from 'react'
import { Redirect } from 'react-router-dom'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from './../../redux/user.redux'
import './user.css'

@connect(
  state => state.user,
  {logoutSubmit}
)
class User extends React.Component{
  logout(){
    // 通过删除cookie来退出登录
    const alert = Modal.alert
    alert('注销', '确认退出登录吗？', [
      {text: '取消', onPress: () => console.log('取消')},
      {text: '确认', onPress: () => {
        browserCookie.erase('userid')
        this.props.logoutSubmit()
      }}
    ])
  }
  render () {
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief
    return props.user?(
      <div>
       <Result
        img={<img src={require(`../images/${props.avatar}.png`)} className="avatar" alt=""/>}
        title={props.user}
        message={props.type==='boss'?props.company:null}
       ></Result>
       <List renderHeader={() => '简介'}>
         <Item wrap>
           {props.title}
           {props.desc.split('\n').map(v => {
             return <Brief key={v}>{v}</Brief>
           })}
           {props.money?<Brief>薪资：{props.money}</Brief>:null}
         </Item>
       </List>
       <WhiteSpace key='whiteSpace' />
       <List key='logout'>
           <Item arrow="horizontal" onClick={() => this.logout()}>退出登录</Item>
       </List>
      </div>
    ):<Redirect to={props.redirecTo}></Redirect>
  }
}

export default User