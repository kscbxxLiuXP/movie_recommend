import React, { Component } from 'react'
import { Card, Row, Col, Button, BackTop, Affix, Table, Space } from 'antd'

import GuessLike from './GuessLike'
import MovieBoard from './MovieBoard'

import MyCarousel from '../../components/MyCarousel'
import axios from "axios"
import { address_movie, address_offline_rec, address_user } from '../../utils/api'
import { getUsername, isLogin } from '../../utils/auth'

import './style.css'
import { backToTop } from '../../utils/utils'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendList: [],
            top_popular: [],
            genre1: [],
            genre2: [],
            genre3: [],
            genre4: [],
            genre5: [],
            highRateMovieList: []

        }
    }

    componentDidMount() {
        if (isLogin()) {
            axios({
                url: address_user + "/user/getUserInfoByUserName",
                method: "get",
                params: {
                    username: getUsername()
                }

            }).then(res => {
                let userid = res.data.data.userid
                axios({
                    url: address_offline_rec + "/recommend/" + userid,
                }).then(res => {
                    this.setState({ recommendList: res.data.data.slice(0, 10) })
                    // console.log(res.data.data);
                })
            })
        }

        axios(
            {
                url: address_movie + '/movie/getPopularMovieList',
                method: "get"
            }
        ).then(res => {
            let popular = res.data.data
            this.setState({ top_popular: popular })
        })

        axios({
            url: address_movie + '/movie/getHighRateMovieList',
            method: 'GET'
        }).then(res => {
            this.setState({ highRateMovieList: res.data.data })
        })

        axios(
            {
                url: address_movie + '/genre/genMovieList',
                method: 'get',
                params: { genreid: 1 }
            }
        ).then(res => {
            let genre1 = res.data.data.slice(0, 11)
            console.log(genre1);
            this.setState({ genre1: genre1 });
        })
        axios(
            {
                url: address_movie + '/genre/genMovieList',
                method: 'get',
                params: { genreid: 2 }
            }
        ).then(res => {
            let genre2 = res.data.data.slice(0, 11)
            console.log(res);
            this.setState({ genre2: genre2 });
        })
        axios(
            {
                url: address_movie + '/genre/genMovieList',
                method: 'get',
                params: { genreid: 3 }
            }
        ).then(res => {
            let genre3 = res.data.data.slice(0, 11)
            console.log(genre3);
            this.setState({ genre3: genre3 });
        })
        axios(
            {
                url: address_movie + '/genre/genMovieList',
                method: 'get',
                params: { genreid: 4 }
            }
        ).then(res => {
            let genre4 = res.data.data.slice(0, 11)
            console.log(genre4);
            this.setState({ genre4: genre4 });
        })
        axios(
            {
                url: address_movie + '/genre/genMovieList',
                method: 'get',
                params: { genreid: 5 }
            }
        ).then(res => {
            let genre5 = res.data.data.slice(0, 11)
            console.log(genre5);
            this.setState({ genre5: genre5 });
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
    render() {
        return (
            <>

                <MyCarousel />


                <div style={{ paddingLeft: 40, paddingRight: 10 }}>
                    <GuessLike movieList={this.state.recommendList} />
                </div>
                <Row style={{ paddingLeft: 40, paddingRight: 10, marginTop: 20 }} >
                    <Col span={19}>

                        <MovieBoard title="热门" movieList={this.state.top_popular} url="/top-popular" />
                        <MovieBoard title="音乐" movieList={this.state.genre1} url="/genre/1" />
                        <MovieBoard title="动作" movieList={this.state.genre2} url="/genre/2" />
                        <MovieBoard title="奇幻" movieList={this.state.genre3} url="/genre/3" />
                        <MovieBoard title="惊悚" movieList={this.state.genre4} url="/genre/4" />
                        <MovieBoard title="西部" movieList={this.state.genre5} url="/genre/5" />
                    </Col>
                    <Col span={4}>
                        <div style={{ marginLeft: 10, marginTop: 20 }}>
                            <Affix offsetTop={80}>
                                <div className="top-board">
                                    <Table size="small" pagination={false} dataSource={this.state.top_popular.slice(0, 5)}>

                                        <column
                                            title="热播榜"
                                            key="action"
                                            render={(text, record, index) => (
                                                <Space key={index} size="small" style={{ marginTop: -5, marginBottom: -5 }}>
                                                    <div style={{ backgroundColor: this.renderColor(index + 1), color: 'white', width: 25, textAlign: 'center', borderRadius: 2 }}>{index + 1}</div>
                                                    <Button type="link" onClick={() => { backToTop(); this.props.history.push('/movie/' + record.movieid) }}>{record.title}</Button>
                                                </Space>
                                            )}
                                        />
                                    </Table>

                                    <Button type="primary" style={{ borderRadius: 30, height: 30, marginTop: 10 }} onClick={() => {
                                        let timer
                                        //设置定时器
                                        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                                        var ispeed = -osTop / 20;
                                        timer = setInterval(function () {
                                            //获取滚动条距离顶部高度
                                            var osTop = document.documentElement.scrollTop || document.body.scrollTop;


                                            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                                            //到达顶部，清除定时器
                                            if (osTop === 0) {
                                                clearInterval(timer);
                                            };
                                        }, 10);
                                        this.props.history.push("/top-popular")
                                    }}>
                                        更多
                                    </Button>

                                </div>
                                <div className="top-board">



                                    <Table size="small" pagination={false} dataSource={this.state.highRateMovieList.slice(0, 5)}>
                                        <column
                                            title="评分榜"
                                            key="action"

                                            render={(text, record, index) => (
                                                <Space key={index} size="small" style={{ marginTop: -5, marginBottom: -5 }}>
                                                    <div style={{ backgroundColor: this.renderColor(index + 1), color: 'white', width: 25, textAlign: 'center', borderRadius: 2 }}>{index + 1}</div>
                                                    <Button type="link" onClick={() => { backToTop(); this.props.history.push('/movie/' + record.movieid) }}>{record.title}</Button>
                                                </Space>
                                            )}
                                        />

                                    </Table>


                                    <Button type="primary" style={{ borderRadius: 30, height: 30, marginTop: 10 }} onClick={() => {
                                        let timer
                                        //设置定时器
                                        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                                        var ispeed = -osTop / 20;
                                        timer = setInterval(function () {
                                            //获取滚动条距离顶部高度
                                            var osTop = document.documentElement.scrollTop || document.body.scrollTop;


                                            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                                            //到达顶部，清除定时器
                                            if (osTop === 0) {
                                                clearInterval(timer);
                                            };
                                        }, 10);
                                        this.props.history.push("/top-rating")
                                    }}>
                                        更多
                                        </Button>
                                </div>
                            </Affix>
                        </div>

                    </Col>
                </Row>
                <BackTop visibilityHeight={150} />
            </>
        )
    }
}
