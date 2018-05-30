import React from 'react'
import propTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

const { Item } = TabBar

@withRouter
@connect(
  state=>state.chat
)
class NavLink extends React.Component{
  static propTypes = {
    data: propTypes.array.isRequired
  }
  render () {
    const navList = this.props.data.filter((v)=>!v.hide)
    // const {pathname} = this.props.location
    return (
      <div>
        <TabBar
          noRenderContent={false}
        >
          {navList.map((v) => (
            <Item
              badge={v.path==='/msg'?this.props.unread:0}
              key={v.path}
              title={v.text}
              icon={{uri: require(`./img/${v.icon}.png`)}}
              selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
              selected={this.props.location.pathname === v.path}
              onPress={()=>{
                this.props.history.push(v.path)
              }}
            ></Item>
          ))}
        </TabBar>
      </div>
    )
  }
}

export default NavLink