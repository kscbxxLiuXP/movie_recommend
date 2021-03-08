import React, { Component } from 'react'
import { Input, Layout, Menu, Dropdown, Avatar, Button } from 'antd';
import './style.css'
import { UserOutlined, HistoryOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import Headroom from 'react-headroom';
import { withRouter } from 'react-router';
import { clearToken, isLogin, setToken, getUsername } from '../../utils/auth';
const { Header, } = Layout;
class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username: "",
            password: "",
        }
        this.menu = () => {
            if (isLogin()) {
                return (
                    <Menu>
                        <div style={{ width: 300 }}>
                            <Button onClick={() => { clearToken(); this.props.history.push('/') }}>退出</Button>
                        </div>
                    </Menu >
                )
            }
            else {
                return (
                    <Menu>
                        <div style={{ width: 300 }}>
                            请先登录
                            <Button onClick={() => { this.setState({ visible: true }) }}>登录</Button>
                            <Button onClick={() => { this.props.history.push('/register') }}>注册</Button>
                        </div>
                    </Menu>

                )
            }
        };

    }
    render() {
        return (
            <Headroom>
                <Header style={{ backgroundColor: "white" }}>
                    <div className="header-box">
                        <div className="header-logo" >Movie Recommender</div>
                        <div className="header-input-box">
                            <Input style={{ width: 400, height: 50 }} placeholder="请输入你要搜索的电影"></Input>
                        </div>
                        <div className="header-right-box">

                            {isLogin() ? <>
                                <div className="header-right-item">
                                    <div>
                                        <HistoryOutlined onClick={()=>{
                                        this.props.history.push('/history')
                                        }} />
                                    </div>

                                </div>
                                <div className="header-right-item" >
                                    {getUsername()}
                                </div>
                            </>
                                : null}
                            <div className="header-right-item" >
                                <Dropdown overlay={this.menu} placement="bottomRight" arrow>
                                    <Avatar style={{ marginBottom: 5 }} size={40} icon={<UserOutlined />} />
                                </Dropdown>
                            </div>


                        </div>
                    </div>

                    <Modal
                        visible={this.state.visible}
                        title="登录"
                        onCancel={() => { this.setState({ visible: false }) }}
                        onOk={() => {
                            this.setState({ visible: false });
                            this.props.history.push('/')
                        }}
                        height={500}
                        footer={null}

                    >
                        <Input placeholder="用户名" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></Input>
                        <Input placeholder="密码" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></Input>
                        <Button onClick={() => {
                            this.setState({ visible: false });
                            this.props.history.push('/')
                            setToken(this.state.username)
                        }}>登录</Button>

                    </Modal>


                </Header>
            </Headroom>
        )
    }
}
export default withRouter(MyHeader)