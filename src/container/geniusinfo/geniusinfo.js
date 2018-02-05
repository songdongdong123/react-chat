import React from 'react'
import { Button, NavBar, InputItem, TextareaItem  } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {updata} from '../../redux/user.redux'
import AvatarSelect from '../../component/avatarselect/avatarselect'

@connect(
  state=>state.user,
  {updata}
)
class GeniusInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      title: '',
      desc: ''
    }
  }
  handleChange (key,val) {
    this.setState({
      [key]: val
    })
  }
  render () {
    const redirect = this.props.redirecTo
    const path = this.props.location.pathname
    return (
      <div>
        {redirect&&path!==redirect?<Redirect to={this.props.redirecTo}></Redirect>:null}
        <NavBar mode="dark">牛人信息完善页面</NavBar>
        <AvatarSelect
          selectAvator={(imageName) => {
            this.setState({
              avatar: imageName
            })
          }}
        ></AvatarSelect>
        <InputItem
          onChange={(v)=>this.handleChange('title', v)}
        >
            职位意向
        </InputItem>
        <TextareaItem
          title="个人简介"
          rows={3}
          autoHeight
          onChange={(v)=>this.handleChange('desc', v)}
        >  
        </TextareaItem>
        <Button type="primary" className="submitbtn" onClick={()=>{
          this.props.updata(this.state)
        }}>保存</Button>
      </div>
    )
  }
}

export default GeniusInfo