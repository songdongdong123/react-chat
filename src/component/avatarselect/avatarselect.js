import React from 'react'
import { Grid } from 'antd-mobile'
class AvatarSelect extends React.Component{
  render() {
    const avatarList = 'boy,dog,dragon,ele,frog,gril,hrose,koala,men,mouse,women,bear,panda,pig,sheep'.split(',')
    const data = avatarList.map((v) => ({
      icon: require(`../images/${v}.png`),
      text: v
    }))
    return (
      <div>
       <Grid data={data} activeStyle={true} columnNum={5}/>

      </div>
    )
  }
}

export default AvatarSelect