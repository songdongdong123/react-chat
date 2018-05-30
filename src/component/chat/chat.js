import React from 'react'
import { List, InputItem, NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import { getChatId } from '../../util'

@connect(
  state=>state,
  { getMsgList, sendMsg, recvMsg }
)
class Chat extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
  }
  handleSubmit () {
    // socket.emit('sendmsg', {text: this.state.text})
    const form = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({form, to, msg})
    this.setState({text: ''})
  }
  componentDidMount(){
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList() //迁移至导航面板
      this.props.recvMsg()
    }
    // 
    // socket.on('recvemsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }
  render () {
    const userid = this.props.match.params.user
    const Item = List.Item
    const users = this.props.chat.users
    if (!users[userid]) {
      return null
    }
    const chatid = getChatId(userid, this.props.user._id)
    const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid === chatid)
    return (
      <div id="chat-page">
        <NavBar
          onLeftClick={() => {
            this.props.history.goBack()
          }}
          icon={<Icon type="left" />} 
          mode="dark">
          {users[userid].name}
        </NavBar>
        {chatmsgs.map(v=>{
          const avatar = require(`../images/${users[v.form].avatar}.png`)
          return v.form === userid ? (
            <List key={v._id}>
              <Item
                thumb={avatar}
              >{v.content}</Item>
            </List>  
          ) : (
            <List key={v._id} className="chat-me">
              <Item
                extra={<img src={avatar} alt=""/>}
              >{v.content}</Item>
            </List> 
          )
          // return <p key={v._id}>{v.content}</p>
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => this.setState({text:v})}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>} 
            ></InputItem>
          </List>
        </div>
      </div>
    )
  }
}
export default Chat