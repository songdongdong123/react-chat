import React from 'react'
import UserCard from './../usercard/usercard'
import { connect } from 'react-redux'
import { getUserlist } from '../../redux/chatuser.redux'
import Scroll from '../scroll/scroll'
import './boss.css'

@connect(
  state=>state.chartuser,
  {getUserlist}
)
class Boss extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      test: [1,2,3,4,5,6,7,8,9]
    }
  }
  componentDidMount(){
      this.props.getUserlist('genius')
  }
  render () {
    return (
      <div className="testContainer">
      {/* this.props.scrollState为rtue时通知scroll刷新滚动高度 */}
      {/* this.props.scrollState为redux中管理的状态 */}
        <Scroll refresh={this.props.scrollState} className="bosslist">
            <UserCard userlist={this.props.userlist}></UserCard>
        </Scroll>
      </div>
    )
  }
}

export default Boss