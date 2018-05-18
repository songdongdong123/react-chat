import React from 'react'
import { Result, List } from 'antd-mobile'
import { connect } from 'react-redux'
import './user.css'

@connect(
  state => state.user
)
class User extends React.Component{
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
         </Item>
       </List>
      </div>
    ):null
  }
}

export default User