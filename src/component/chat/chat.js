import React from 'react'

class Chat extends React.Component{
  render () {
    console.log(this.props.match.params.user)
    return (
      <div>
        <h2>chat with : {this.props.match.params.user}</h2>
      </div>
    )
  }
}
export default Chat