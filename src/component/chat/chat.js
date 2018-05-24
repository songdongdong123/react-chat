import React from 'react'
import { List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList } from '../../redux/chat.redux'

@connect(
  state=>state,
  {getMsgList}
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
    // this.setState({text: ''})
  }
  componentDidMount(){
    this.props.getMsgList()
    // 
    // socket.on('recvemsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }
  render () {
    return (
      <div>
        {this.state.msg.map(v=>{
          return <p key={v}>{v}</p>
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