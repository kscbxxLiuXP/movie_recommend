import { Button, Rate, Card, Affix, Row, Col, Input, Divider, message, Space, Table } from 'antd';
import React, { Component } from 'react'
import "./style.css";
import { Player } from "video-react";
import video from '../../assets/video/video.mp4'
import MovieBoard from '../Home/MovieBoard';
import Avatar from 'antd/lib/avatar/avatar';
import axios from 'axios';
import { address_movie, address_offline_rec, address_rating, address_user, address_recommend } from '../../utils/api';
import { backToTop, num } from '../../utils/utils';
import { getUsername } from '../../utils/auth';
import moment from 'moment';
const desc = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
export default class MoviePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            value: 0,
            similarList: [],
            detail: {
                typeList: [],
            },
            userid: "",
            top_popular: []
        }
        this.data = {
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
            poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
            rate: 9.4,
            name: "玩具总动员",
            year: "(1995)",
            time: "1h 21m",
            genre: ["动画", "冒险", "家庭", "喜剧"],
        }

        this.movieList = [
            {
                id: 1,
                name: "玩具总动员",
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                rate: "9.0",

            },
            {
                id: 2,
                name: "勇敢者的游戏",
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/5aeZQhMHghOZUK30qNCjgpQlkIq.jpg",
                rate: "9.0",

            },
            {
                id: 3,
                name: "玩具总动员",
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                rate: "9.0",

            },
            {
                id: 4,
                name: "玩具总动员",
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                rate: "9.0",

            },
            {
                id: 5,
                name: "玩具总动员",
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                rate: "9.0",

            },
        ];

        this.comments = [
            {
                id: 1,
                username: 'admin',
                comments: '评论111111',
                time: "2021-03-09 00:00:01"
            },
            {
                id: 2,
                username: 'admin',
                comments: '评论111111',
                time: "2021-03-09 00:00:01"
            },
            {
                id: 3,
                username: 'admin',
                comments: '评论111111',
                time: "2021-03-09 00:00:01"
            },
            {
                id: 4,
                username: 'admin',
                comments: '评论111111',
                time: "2021-03-09 00:00:01"
            },
            {
                id: 5,
                username: 'admin',
                comments: '评论111111',
                time: "2021-03-09 00:00:01"
            },

        ]
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
    getData(id) {
        // console.log(this.state.id);
        axios({
            url: address_movie + "/movie/getDetail",
            method: "get",
            params: {
                id: id
            },
        }).then(res => {
            console.log(res.data.data);
            // this.setState({ detail: res.data.data })
            this.setState({ detail: res.data.data })

        })

        axios({
            url: address_offline_rec + "/similar/" + id,
            method: "get"
        }).then(res => {
            this.setState({ similarList: res.data.data })
            console.log(res);
        })
    }
    componentDidMount() {
        this.getData(this.props.match.params.id)

        axios({
            url: address_user + "/user/getUserID",
            method: "get",
            params: {
                username: getUsername()
            }
        }).then(res => {
            let userid = res.data.data
            console.log(userid);
            this.setState({
                userid: userid
            })
            axios({
                url: address_recommend + "/recommend/getMovie",
                method: "get",
                params: {
                    userid: userid
                }
            }).then(res => {
                console.log(res.data);
            })
        })

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
    handleChange = value => {

        this.setState({ value });
        let data = {
            userID: this.state.userid,
            movieID: parseInt(this.props.match.params.id),
            rating: value,
            timestamp: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        console.log(data)
        axios({
            url: address_rating + "/rating/insertRatingInSQL",
            method: "get",
            params: data
        }).then(res => {
            let ratingID = res.data.data
            console.log(ratingID);

            axios({
                url: address_movie + "/rating/insertRatinginRedis",
                method: "get",
                params: {
                    ratingId: ratingID
                }
            }).then(res => {
                if (res.data.code === '0') {
                    message.success("评分更新成功！")
                }
            })
        })

    };

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="movie-play-wrapper">
                    <div className="movie-play-container">
                        <div className="Movie-Play-column" style={{ width: 800, }}>
                            <div>
                                <Player
                                    playsInline
                                    src={video}
                                />
                            </div>

                            <div className="movie-play-detail" >
                                <div>
                                    <span className="movie-play-detail-title">
                                        {this.state.detail.name}
                                    </span>
                                    <span className="movie-play-detail-rate">{num(this.state.detail.rating)}</span>
                                    <div style={{ marginTop: 10 }}>
                                        {this.state.detail.typeList.map((item, index) => {
                                            return <span style={{ backgroundColor: "#303137", padding: "3px 8px", color: '#98989b', marginRight: 10 }} key={index}>
                                                {item.typename}
                                            </span>
                                        })}
                                    </div>
                                </div>

                                <div  >
                                    <span style={{ color: 'white', fontSize: 20 }}>你的评分：</span><span className="movie-play-detail-rate">{this.state.value}</span><br />
                                    <Rate defaultValue={2.5} count={5} tooltips={desc} onChange={this.handleChange} value={this.state.value} />

                                </div>

                            </div>

                        </div>
                        <div className="movie-same-recommend">
                            <div style={{ color: 'white', fontSize: 20, padding: "10px 20px" }}>同类电影推荐</div>
                            <div className="movie-same-recommend-list">
                                {this.state.similarList.map((item, index) => {
                                    return <div className="movie-same-recommend-list-item" key={index} onClick={()=>{
                                        backToTop();
                                        this.props.history.push('/movie/'+item.movieId)
                                    }}>
                                        <img height={80} style={{ borderRadius: 3 }} src={item.poster_url} alt={item.title} />
                                        <div style={{ marginLeft: 10 }}>
                                            <div className="movie-same-recommend-list-item-name" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                                            <div className="movie-same-recommend-list-item-rate">评分：{num(item.rating)}</div>
                                            <div > <Rate style={{ fontSize: 14 }} disabled value={num(item.rating)} />
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "30px 50px" }}>
                    <div >
                        <div>
                            <MovieBoard subtitle="1" title="为你推荐" movieList={this.movieList} url="/top-popular" />
                        </div>
                        <div>
                            <div style={{ fontSize: 28, marginTop: 20 }}>
                                影评<span style={{ color: 'darkgray', fontSize: 22 }}>(1134)</span>
                                <Row style={{ marginTop: 20 }}>
                                    <Col span={1}>
                                        <Avatar size={44}></Avatar>
                                    </Col>
                                    <Col span={22} style={{ marginLeft: 20 }}>
                                        <Input.TextArea rows={4} />
                                        <Button>发布</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ fontSize: 22, marginTop: 20 }}>
                                全部评论
                                <Divider />
                                {this.comments.map((item, index) => {
                                    return <Row key={index} style={{ marginTop: 20 }} gutter={30}>
                                        <Col span={1}>
                                            <Avatar size={44}></Avatar>
                                        </Col>
                                        <Col span={22} style={{ marginLeft: 20 }}>
                                            <div style={{ fontSize: 18 }}>{item.username} <span style={{ fontSize: 14, color: 'darkgray' }}>{item.time}</span></div>
                                            <div style={{ fontSize: 16 }}>{item.comments}</div>
                                            <Divider />
                                        </Col>
                                    </Row>
                                })}

                            </div>
                        </div>
                    </div>
                    <Affix offsetTop={80}>
                        <div className="top-board">
                            <Table size="small" pagination={false} dataSource={this.state.top_popular.slice(0, 10)}>

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
                    </Affix>
                </div>

            </div>
        )
    }
}
