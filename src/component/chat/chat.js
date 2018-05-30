import React from 'react'
import { List, InputItem, NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'

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
    console.log(form)
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({form, to, msg})
    this.setState({text: ''})
  }
  componentDidMount(){
    this.props.getMsgList()
    this.props.recvMsg()
    // 
    // socket.on('recvemsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }
  render () {
    const user = this.props.match.params.user
    const Item = List.Item
    console.log(user)
    return (
      <div id="chat-page">
        <NavBar mode="dark">
          {this.props.match.params.user}
        </NavBar>
        {this.props.chat.chatmsg.map(v=>{
          return v.form === user ? (
            <List key={v._id}>
              <Item>{v.content}</Item>
            </List>  
          ) : (
            <List key={v._id} className="chat-me">
              <Item
                extra={'avatar'}
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