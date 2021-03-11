import React, { Component } from 'react'
import { Avatar, Button, Rate, Tooltip } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"
import './style.css'
import MovieBoard from '../Home/MovieBoard';
import SimilarBoard from '../../components/SimilarBoard';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
        }
        this.data = {
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
            poster_url: "https://www.themoviedb.org//t/p/w533_and_h300_bestv2/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
            rate: 9.4,
            name: "玩具总动员",
            year: "(1995)",
            time: "1h 21m",
            genre: ["动画", "冒险", "家庭", "喜剧"],
            overview: "胡迪是小主人安弟最喜欢的传统牛仔玩偶，他和其他玩具趁主人不在时，便会＂活＂起来一起玩闹。可是好景不常，最新奇的热门玩具巴斯光年来了，他让胡迪备受冷落。失宠的胡迪为了巩固自己的地位，只好处心积虑地想要赶走巴斯。在一次意外中，胡迪和巴斯不幸陷入一个玩具虐待狂的邻居家中而命在旦夕。两个冤家路窄互不相容的对手，是否能够化敌为友、发挥机智，顺利地通过这场冒险之旅，回到小主的身边呢？",
            actors: [
                {
                    name: "Tom Hanks",
                    character: "Woody (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/zVyoR2ZNiVGymjZK4MMJHIdpxoW.jpg"
                },
                {
                    name: "Tim Allen",
                    character: "Buzz Lightyear (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/6qlDjidQSKNcJFHzTXh0gQS83ub.jpg"
                },
                {
                    name: "Don Rickles",
                    character: "Mr. Potato Head (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/iJLQV4dcbTUgxlWJakjDldzlMXS.jpg",
                },
                {
                    name: "Jim Varney",
                    character: "Slinky Dog (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/yrhgPWGOc36GN0P9kuJ48sU4fVa.jpg",
                },
                {
                    name: "Wallace Shawn",
                    character: "Rex (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/jviZU3Ae0vVKW6cYeEtjfxq2TWS.jpg",
                },
                {
                    name: "John Ratzenberger",
                    character: "Hamm (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/oRtDEOuIO1yDhTz5dORBdxXuLMO.jpg",
                },
                {
                    name: "Annie Potts",
                    character: "Bo Peep (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/hWIzkAH7jkSkxBfwdudxbSPxeno.jpg",
                },
                {
                    name: "John Morris",
                    character: "Andy (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/xMtT5UlPYZX7tobi55YFcdgyFp.jpg",
                },
                {
                    name: "Erik von Detten",
                    character: "Sid (voice)",
                    actor_image: "https://www.themoviedb.org//t/p/w138_and_h175_face/7fHjKnLKmqzR0kmvRPLxpQE7BsK.jpg",
                },
            ]
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

    }
    render() {
        return (
            <div>


                <div className="movie-display-box">

                    <img className="movie-display-image" alt={this.data.name} src={this.data.image_url} />

                    <div className="movie-detail-wrapper">
                        <div className="movie-detail-info">
                            <div className="movie-detail-info-name">{this.data.name}</div>
                            <div className="movie-detail-info-year">{this.data.year}</div>
                            <div className="movie-detail-info-time-and-rate">

                                <div >
                                    <Rate style={{ color: 'black' }} disabled defaultValue={this.data.rate / 2} />
                                    <span className="movie-detail-info-rate">{this.data.rate}</span>
                                </div>
                                <div className="movie-detail-info-time">
                                    时长：{this.data.time}
                                </div>
                            </div>

                        </div>
                        <div className="movie-genre-wrapper">
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, }}>分类</div>
                            {this.data.genre.map((item, index) => {
                                return <span key={index} className="movie-genre-item">
                                    <svg aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="dot-circle"
                                        className="svg-inline--fa fa-dot-circle fa-w-16 fa-1x "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style={{ marginRight: "5px", width: 10 }}>
                                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z">

                                        </path>
                                    </svg>
                                    {item}
                                </span>
                            })}
                        </div>
                        <div>
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 30 }}>简介</div>
                            <div>{this.data.overview}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 30 }}>
                                演职员
                        </div>
                            <div>
                                {this.data.actors.map((item, index) => {
                                    return <Tooltip title={() => {
                                        return <div style={{ padding: 10 }}>
                                            <div>
                                                <span style={{ fontSize: 18, fontWeight: 'bold' }}>演员</span>
                                                <div style={{ marginLeft: 20, fontSize: 16 }}>{item.name}</div>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 18, fontWeight: 'bold' }}>饰演</span>
                                                <div style={{ marginLeft: 20, fontSize: 16 }}>{item.character}</div>
                                            </div>


                                        </div>
                                    }} color={"#2db7f5"} key={index}>
                                        <Avatar size={48} style={{ cursor: 'pointer', marginRight: 10 }} src={item.actor_image} />

                                    </Tooltip>

                                })}
                            </div>
                        </div>
                        <div className="movie-display-button" onClick={() => { this.props.history.push('/movieplay/' + this.state.id) }}>
                            <PlayCircleFilled style={{ marginRight: 10 }} />立即播放
                    </div>
                    </div>
                </div>
                <div style={{marginLeft:50,marginRight:50,marginTop:60}}>
                <SimilarBoard title="推荐相似" movieList={this.movieList} />
                </div>
                <div style={{height:100,width:500}}></div>
               
            </div>
        )
    }
}
