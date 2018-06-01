import React from 'react'
import { List, Badge } from 'antd-mobile'
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
    const userid = this.props.user._id
    const userInfo = this.props.chat.users
    // console.log(userInfo)
    // 按照聊天用户分组，根据chatid
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    });
    const chatList = Object.values(msgGroup).sort((a,b) => {
      const a_last = this.getLastChat(a).create_time
      const b_last = this.getLastChat(b).create_time
      return b_last - a_last
    })
    return (
      <div>
        <List>
          {chatList.map(v=> {
            const lastItem = this.getLastChat(v)
            const targetId = v[0].form === userid ? v[0].to : v[0].form
            const unreadNum = v.filter(v=>v.to===userid&&!v.read).length
            if (!userInfo[targetId]) {
              return null
            }
            return (
              <Item 
                key={lastItem._id}
                extra={<Badge text={unreadNum}></Badge>}
                thumb={require(`../images/${userInfo[targetId].avatar}.png`)}
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push(`/chat/${targetId}`)
                }}
              >
                {lastItem.content}
                <Brief>{userInfo[targetId].name}</Brief>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default Msg