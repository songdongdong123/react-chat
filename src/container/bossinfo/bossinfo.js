import React from 'react'
import { Button, NavBar, InputItem, TextareaItem  } from 'antd-mobile'
import AvatarSelect from '../../component/avatarselect/avatarselect'
import './bossinfo.css'

class BossInfo extends React.Component{
  constructor(props) {
    super(props)
    this.getMsg = this.getMsg.bind(this)
    this.state={
      title: '',
      company: '',
      money: '',
      desc: ''
    }
  }
  handleChange (key,val) {
    this.setState({
      [key]: val
    })
  }
  getMsg () {
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <NavBar mode="dark">Boss信息完善页面</NavBar>
        <AvatarSelect></AvatarSelect>
        <InputItem
          onChange={v=>this.handleChange('title', v)}
        >
            招聘职位
        </InputItem>
        <InputItem
          onChange={v=>this.handleChange('company', v)}
        >
            公司名称
        </InputItem>
        <InputItem
          onChange={v=>this.handleChange('money', v)}
        >
            职位薪资
        </InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={v=>this.handleChange('desc', v)}
        >  
        </TextareaItem>
        <Button type="primary" className="submitbtn" onClick={this.getMsg}>提交</Button>
      </div>
    )
  }
}

export default BossInfo