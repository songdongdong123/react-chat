import React from 'react'
import { Button, NavBar, InputItem, TextareaItem  } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {updata} from '../../redux/user.redux'
import AvatarSelect from '../../component/avatarselect/avatarselect'
import './bossinfo.css'

@connect(
  state=>state.user,
  {updata}
)
class BossInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      desc: '',
      company: '',
      money: '',
      title: '',
      test: ''
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
        <NavBar mode="dark">Boss信息完善页面</NavBar>
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
            招聘职位
        </InputItem>
        <InputItem
          onChange={(v)=>this.handleChange('company', v)}
        >
            公司名称
        </InputItem>
        <InputItem
          onChange={(v)=>this.handleChange('money', v)}
        >
            职位薪资
        </InputItem>
        <TextareaItem
          title="职位要求"
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

export default BossInfo