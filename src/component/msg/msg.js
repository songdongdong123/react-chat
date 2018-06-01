import React from 'react'
import { List } from 'antd-mobile'
import { connect } from 'react-redux'

@connect(
  state=>state
)
class Msg extends React.Component {
  getLastChat (arr) {
    return arr[arr.length-1]
  }
  render () {
    const Item = List.Item
    const Brief = Item.Brief
    // const userid = this.props.user._id
    // 按照聊天用户分组，根据chatid
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    });
    const chatList = Object.values(msgGroup)
    return (
      <div>
        <List>
          {chatList.map(v=> {
            const lastItem = this.getLastChat(v)
            return (
              <Item key={lastItem._id}>
                {lastItem.content}
                <Brief>用户名</Brief>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default Msg