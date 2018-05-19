import React from 'react'
import { Result, List, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import './user.css'

@connect(
  state => state.user
)
class User extends React.Component{
  constructor (props) {
    super(props)
    this.test = this.test.bind(this)
    this.register = this.register.bind(this)
  }
  register () {
    this.props.history.push('/register')
  }
  test(){
    alert('推出的登陆')
  }
  render () {
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief
    return props.user?(
      <div>
      <Button type="ghost" onClick={this.test}>注册</Button>
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
      </div>
    ):null
  }
}

export default User