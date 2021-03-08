import React, { Component } from 'react'
import { Affix } from 'antd'
import './style.css'
import homelogo from '../../assets/img/homelogo.svg'
import { withRouter } from 'react-router-dom'

class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGenreId: 1,
            id: 1,
            isGenre: false
        }
        this.genres = [
            {
                id: 1,
                name: '惊悚',
            },
            {
                id: 2,
                name: '喜剧',
            },
            {
                id: 3,
                name: '科幻',
            },
            {
                id: 4,
                name: '犯罪',
            },
            {
                id: 5,
                name: '悬疑',
            },
            {
                id: 6,
                name: '动画',
            },
            {
                id: 7,
                name: '儿童',
            },
            {
                id: 8,
                name: '文艺',
            },
            {
                id: 9,
                name: '惊悚',
            },
            {
                id: 10,
                name: '惊悚',
            },
            {
                id: 11,
                name: '惊悚',
            },
            {
                id: 12,
                name: '喜剧',
            },
            {
                id: 13,
                name: '科幻',
            },
            {
                id: 14,
                name: '犯罪',
            },
            {
                id: 15,
                name: '悬疑',
            },
            {
                id: 16,
                name: '动画',
            },
            {
                id: 17,
                name: '儿童',
            },
            {
                id: 18,
                name: '文艺',
            },

        ]
    }
    componentDidMount() {
        let a = this.props.location.pathname.split('/');
        if (a[1] === 'genre') {
            this.setState({ id: a[2], isGenre: true })
        } else {
            this.setState({ isGenre: false })
        }

    }
    componentWillReceiveProps(newProps) {
        let a = newProps.location.pathname.split('/');
        if (a[1] === 'genre') {
            this.setState({ id: a[2], isGenre: true })
        } else {
            this.setState({ isGenre: false })
        }
    }
    renderItemClassName(id) {

        if (this.state.isGenre && id === parseInt(this.state.id)) {
            return "genre-slider-item-selected"
        } else {
            return "genre-slider-item"
        }
    }
    render() {
        return (
            <div className="sider-wrapper">

                <div style={{ marginTop: 50, marginBottom: 60 }}>
                    <img src={homelogo} style={{ cursor: 'pointer' }} alt="homelogo" width={180} onClick={() => { this.props.history.push('/') }}></img>
                </div>
                <Affix offsetTop={70}>
                    <div >
                        <div style={{ width: 200, fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>分类</div>
                        <>
                            {this.genres.map((item, index) => {

                                return <div key={index} className={this.renderItemClassName(item.id)} onClick={() => {
                                    let timer
                                    //设置定时器
                                    timer = setInterval(function () {
                                        //获取滚动条距离顶部高度
                                        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                                        var ispeed = Math.floor(-osTop / 5);

                                        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                                        //到达顶部，清除定时器
                                        if (osTop === 0) {
                                            clearInterval(timer);
                                        };
                                    }, 30);
                                    this.props.history.push('/genre/' + item.id);

                                }}>
                                    <svg aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="dot-circle"
                                        className="svg-inline--fa fa-dot-circle fa-w-16 fa-1x "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style={{ marginRight: "10px", width: 10 }}>
                                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z">

                                        </path>
                                    </svg>
                                    {item.name}
                                </div>
                            })}
                        </>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 10, }}>Copyright ©2021 <br /><span style={{fontWeight:'bold'}}>MovieRecommender</span></div>
                </Affix>
            </div>
        )
    }
}
export default withRouter(MySider)