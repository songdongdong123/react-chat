import React from 'react'
import UserCard from './../usercard/usercard'
import { connect } from 'react-redux'
import { getUserlist } from '../../redux/chatuser.redux'

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
      <div>
         <UserCard userlist={this.props.userlist}></UserCard>
      </div>
    )
  }
}

export default Genius