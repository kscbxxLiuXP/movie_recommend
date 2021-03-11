import { Button, Rate, Card, Affix, Row, Col, Input, Divider } from 'antd';
import React, { Component } from 'react'
import "./style.css";
import { Player } from "video-react";
import video from '../../assets/video/video.mp4'
import MovieBoard from '../Home/MovieBoard';
import Avatar from 'antd/lib/avatar/avatar';
const desc = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
export default class MoviePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            value: 0,
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
        this.same = [
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            },
            {
                image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
                poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                rate: 9.4,
                name: "玩具总动员",

                time: "1h 21m",
            }
        ]
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

    handleChange = value => {
        let a = value * 2
        this.setState({ value: a });
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
                                        {this.data.name}
                                    </span>
                                    <span className="movie-play-detail-rate">{this.data.rate}</span>
                                    <div style={{ marginTop: 10 }}>
                                        {this.data.genre.map((item, index) => {
                                            return <span style={{ backgroundColor: "#303137", padding: "3px 8px", color: '#98989b', marginRight: 10 }} key={index}>
                                                {item}
                                            </span>
                                        })}
                                    </div>
                                </div>

                                <div  >
                                    <span style={{ color: 'white', fontSize: 20 }}>你的评分：</span><span className="movie-play-detail-rate">{this.state.value}</span><br />
                                    <Rate allowHalf defaultValue={2.5} count={5} tooltips={desc} onChange={this.handleChange} value={this.state.value/2} />

                                </div>

                            </div>

                        </div>
                        <div className="movie-same-recommend">
                            <div style={{ color: 'white', fontSize: 20, padding: "10px 20px" }}>同类电影推荐</div>
                            <div className="movie-same-recommend-list">
                                {this.same.map((item, index) => {
                                    return <div className="movie-same-recommend-list-item" key={index}>
                                        <img height={80} style={{ borderRadius: 3 }} src={item.poster_url} alt={item.name} />
                                        <div style={{ marginLeft: 10 }}>
                                            <div className="movie-same-recommend-list-item-name" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
                                            <div className="movie-same-recommend-list-item-time">{item.time}</div>
                                            <div > <Rate style={{ fontSize: 14 }} disabled defaultValue={item.rate / 2} />
                                                <span className="movie-same-recommend-list-item-rate">{item.rate}</span>
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
                        <Card title="热播榜 " style={{ width: 300, height: 500 }}>
                            <Button onClick={() => { this.props.history.push("/top-popular") }}>
                                更多
                            </Button>
                        </Card>
                    </Affix>
                </div>

            </div>
        )
    }
}
