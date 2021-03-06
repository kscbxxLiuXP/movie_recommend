import React, { Component } from 'react'
import { Input, Layout, Menu, Dropdown, Avatar, Button, Tooltip, Divider, message } from 'antd';
import './style.css'
import { UserOutlined, HistoryOutlined, LockOutlined, SearchOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import Headroom from 'react-headroom';
import { withRouter } from 'react-router';
import { clearToken, isLogin, setToken, getUsername } from '../../utils/auth';
import axios from 'axios';
import { address_movie, address_user } from '../../utils/api';
const { Header, } = Layout;


class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username: "",
            password: "",
            content: "",
            top_popular:[]
        }
     
        this.menu = () => {
            if (isLogin()) {
                return (
                    <Menu>

                        <div style={{ width: 300 }}>

                            <div style={{ backgroundColor: '#f50', marginTop: -4, borderTopLeftRadius: 3, borderTopRightRadius: 3, paddingBottom: 20 }}>
                                <br />
                                <div style={{ marginLeft: 20, color: 'white' }}>
                                    您已登录
                                </div>
                                <div style={{ marginLeft: 20, marginTop: 10, color: 'white' }}>
                                    正在享受推荐服务
                                </div>
                            </div>
                            <div className="dropdown-button-group">
                                <div className="dropdown-button" onClick={() => { clearToken(); this.props.history.push('/') }}><span>退出</span></div>
                            </div>
                        </div>
                    </Menu >
                )
            }
            else {
                return (
                    <Menu>
                        <div style={{ width: 300 }}>

                            <div style={{ backgroundColor: '#f50', marginTop: -4, borderTopLeftRadius: 3, borderTopRightRadius: 3, paddingBottom: 20 }}>
                                <br />
                                <div style={{ marginLeft: 20, color: 'white' }}>
                                    登录后
                                </div>
                                <div style={{ marginLeft: 20, marginTop: 10, color: 'white' }}>
                                    可以享受推荐服务
                                </div>
                            </div>
                            <div className="dropdown-button-group">
                                <div className="dropdown-button" onClick={() => { this.setState({ visible: true }) }}><span>登录</span></div>
                                <div className="dropdown-button" onClick={() => { this.props.history.push('/register') }}><span>注册</span></div>
                            </div>


                        </div>
                    </Menu>

                )
            }
        };

    }
    componentDidMount(){
        axios(
            {
                url: address_movie + '/movie/getPopularMovieList',
                method: "get"
            }
        ).then(res => {
            let popular = res.data.data
            this.setState({ top_popular: popular })
        })
    }
    renderColor(rate) {

        if (rate === 1) {
            return "#FF183E"
        } else if (rate === 2) {
            return "#FF5C38"
        } else if (rate === 3) {
            return "#FFB821"
        }
        else {
            return '#7F7F8C'
        }

    }
    getMenu() {

        let _this = this
        return (<Menu>
            <Divider orientation="left">热播榜</Divider>
            {_this.state.top_popular.map((item, index) => {
                return <Menu.Item key={index} onClick={() => { this.props.history.push("/movie/" + item.movieid) }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: this.renderColor(index + 1), color: 'white', width: 25, textAlign: 'center', borderRadius: 2 }}>{index + 1}</div>
                        <div style={{ marginLeft: 10, fontSize: 15, letterSpacing: 1 }}>{item.title}</div>
                    </div>

                </Menu.Item>
            })}
        </Menu>)

    }
    goSearch(event) {
        console.log(event);
        if (event.target.value !== "") {
            this.setState({ content: event.target.value }, () => {
                this.props.history.push('/result/' + this.state.content);
            });
        } else {
            console.log("weikong");
        }
    }
    goSearchByButton() {
        if (this.state.content !== "") {
            this.props.history.push('/result/' + this.state.content);
        } else {
            console.log("kkk");
        }
    }
    render() {
        return (
            <Headroom>
                <Header className="header-wrapper" style={{ backgroundColor: "white" }}>
                    <div className="header-box">
                        <div className="header-logo" >Movie Recommender</div>

                        <div className="header-input-box">
                            <Dropdown overlay={this.getMenu()} trigger={['click']}>
                                <Input onChange={(e) => { this.setState({ content: e.target.value }) }} onPressEnter={(event) => { this.goSearch(event) }} style={{ width: 400, height: 40, paddingLeft: 20, borderRadius: 30 }} placeholder="请输入你要搜索的电影"
                                    suffix={

                                        <div className='header-search-button' onClick={() => { this.goSearchByButton() }}>

                                            <SearchOutlined />
                                        </div>

                                    }></Input>
                            </Dropdown>
                        </div>

                        <div className="header-right-box">

                            {isLogin() ? <>
                                <Tooltip title="评分记录">
                                    <div className="header-right-item">

                                        <div>

                                            <HistoryOutlined onClick={() => {
                                                this.props.history.push('/history')
                                            }} />


                                        </div>

                                    </div>
                                </Tooltip>
                                <div className="header-right-item" >
                                    {getUsername()}
                                </div>
                            </>
                                : null}
                            <Dropdown overlay={this.menu} placement="bottomRight" >
                                <div className="header-right-item" >
                                    <Avatar style={{ marginBottom: 5 }} size={40} icon={isLogin() ? null : <UserOutlined />} >{getUsername().substr(0, 1)}</Avatar>
                                </div>
                            </Dropdown>


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
                        centered
                        height={500}
                        footer={null}

                    >
                        <div className="login-wrapper">
                            <Avatar size={80} icon={<UserOutlined />} />
                            <div style={{ width: 200, marginTop: 20 }}>
                                <Input style={{ borderRadius: 30 }} prefix={<UserOutlined />} placeholder="用户名" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></Input>

                                <Input style={{ borderRadius: 30, marginTop: 20 }} type="password" prefix={<LockOutlined />} placeholder="密码" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></Input>

                            </div>
                            <Button style={{ marginTop: 20, borderRadius: 30, width: 100 }} type="primary" onClick={() => {
                                axios({
                                    url: address_user + '/login',
                                    method: 'get',
                                    params: {
                                        username: this.state.username,
                                        password: this.state.password,
                                    }
                                }).then(res => {
                                    if (res.data.code === '1') {
                                        message.error(res.data.msg)
                                    } else {
                                        message.success("登录成功！")
                                        this.setState({ visible: false });
                                        setToken(this.state.username)
                                        this.props.history.push('/')
                                        window.location.reload(true)
                                    }
                                    console.log(res.data)

                                })
                            }}>登录</Button>
                        </div>


                    </Modal>


                </Header>
            </Headroom >
        )
    }
}
export default withRouter(MyHeader)