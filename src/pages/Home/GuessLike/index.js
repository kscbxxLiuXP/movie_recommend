import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { isLogin } from '../../../utils/auth'
import { withRouter } from 'react-router'
import './style.css'
class GuessLike extends Component {
    render() {
        return (
            <div>
                <div className="GuessLike-Title">猜你喜欢</div>
                {isLogin() ? <Card>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Button onClick={()=>{this.props.history.push('/recommend')}}>更多推荐</Button>
                </Card>
                    : 
                    <div class="GuessLike-button"><span>登录获取个性化推荐！</span></div>
                        
                    }
            </div>
        )
    }
}

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

export default withRouter(GuessLike)