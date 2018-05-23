import React from 'react'
import UserCard from './../usercard/usercard'
import { connect } from 'react-redux'
import { getUserlist } from '../../redux/chatuser.redux'
import Scroll from '../scroll/scroll'

@connect(
  state=>state.chartuser,
  {getUserlist}
)
class Genius extends React.Component{
  componentDidMount(){
    this.props.getUserlist('boss')
  }
  render () {
    return (
      <div className="testContainer">
        <Scroll refresh={this.props.scrollState} className="bosslist">
          <UserCard userlist={this.props.userlist}></UserCard>
         </Scroll>
      </div>
    )
  }
}

export default Genius