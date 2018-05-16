import React from 'react'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import './usercard.css'

class UserCard extends React.Component{
  render () {
    const Header = Card.Header
    const Body = Card.Body
    const Footer = Card.Footer
    const userlist = this.props.userlist
    return (
      <div className="usercard">
        <WingBlank>
          <WhiteSpace></WhiteSpace>
          {userlist.map((v)=>(
            v.avatar?(<Card key={v._id} className="card">
              <Header
                title={v.user}
                thumb={require(`../images/${v.avatar}.png`)}
                extra={<span>{v.title}</span>}
              ></Header>
              <Body>
              {v.type==='boss'? <div>公司:{v.company}</div> :null}
              {v.desc.split('\n').map(d=>(
                <div key={d}>{d}</div>
              ))}
              {v.type==='boss'? <div>薪资:{v.money}</div> :null}
              </Body>
              <Footer></Footer>
            </Card>):null
          ))}
        </WingBlank>
      </div>
    )
  }
}

export default UserCard