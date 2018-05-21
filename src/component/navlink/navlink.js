import React from 'react'
import propTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const { Item } = TabBar

@withRouter
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