import React from 'react'
import { Grid, List } from 'antd-mobile'
import propTypes from 'prop-types'
import './avatorselect.css'
class AvatarSelect extends React.Component{
  static propTypes = {
    selectAvator: propTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    const avatarList = 'boy,dog,dragon,ele,frog,girl,hrose,koala,men,mouse,women,bear,panda,pig,sheep'.split(',')
    const data = avatarList.map((v) => ({
      icon: require(`../images/${v}.png`),
      text: v
    }))
    const GridHeader = this.state.icon?(
      <div className="GridHeader">
        <span>已选择图像</span>
        <img style={{width:20}} src={this.state.icon} alt=""/>
      </div>):(<div><span>请选择图像</span></div>)
    return (
      <div>
        <List renderHeader={() => GridHeader}>
          <Grid 
            onClick={elm => {
              this.setState(elm)
              this.props.selectAvator(elm.text)
            }}
            data={data} 
            activeStyle={true} columnNum={5}/>
        </List>
      </div>
    )
  }
}

export default AvatarSelect