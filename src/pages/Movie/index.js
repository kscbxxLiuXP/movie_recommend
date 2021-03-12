import React, { Component } from 'react'
import { Avatar, Button, Rate, Tooltip } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"
import './style.css'
import MovieBoard from '../Home/MovieBoard';
import SimilarBoard from '../../components/SimilarBoard';
import axios from 'axios';
import { address_movie, address_offline_rec } from '../../utils/api';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            detail: {
                image_url: "加载中",
                poster_url: "加载中",
                rate: "加载中",
                name: "加载中",
                year: "加载中",
                time: "加载中",
                typeList: [],
                overview: "",
                actorList: []
            },
            similarList: []
        }

    }

    componentWillReceiveProps(next) {
        this.getData(next.match.params.id)
        this.setState({
            id: next.match.params.id
        })
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
            // console.log(res.data.data);
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
    }
    num(i) {
        return parseFloat(i).toFixed(1)
    }
    render() {
        return (
            <div>


                <div className="movie-display-box">

                    <img className="movie-display-image" alt={this.state.detail.name} src={this.state.detail.image_url} />

                    <div className="movie-detail-wrapper">
                        <div className="movie-detail-info">
                            <div className="movie-detail-info-name">{this.state.detail.name}</div>
                            <div className="movie-detail-info-year">{this.state.detail.year}</div>
                            <div className="movie-detail-info-time-and-rate">

                                <div >
                                    <Rate style={{ color: 'black' }} disabled value={this.num(this.state.detail.rating)} />
                                    <span className="movie-detail-info-rate">{this.num(this.state.detail.rating)}</span>
                                </div>
                                <div className="movie-detail-info-time">
                                    时长：{this.state.detail.time}
                                </div>
                            </div>

                        </div>
                        <div className="movie-genre-wrapper">
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, }}>分类</div>
                            {this.state.detail.typeList ? this.state.detail.typeList.map((item, index) => {
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
                                    {item.typename}
                                </span>
                            }) : "加载中"}
                        </div>
                        <div>
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 30 }}>简介</div>
                            <div>{this.state.detail.overview}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 30 }}>
                                演职员
                        </div>
                            <div>
                                {this.state.detail.actorList ? this.state.detail.actorList.map((item, index) => {
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

                                }) : "加载中"}
                            </div>
                        </div>
                        <div className="movie-display-button" onClick={() => { this.props.history.push('/movieplay/' + this.state.id) }}>
                            <PlayCircleFilled style={{ marginRight: 10 }} />立即播放
                    </div>
                    </div>
                </div>
                <div style={{ marginLeft: 50, marginRight: 50, marginTop: 60 }}>
                    <SimilarBoard title="推荐相似" movieList={this.state.similarList} />
                </div>
                <div style={{ height: 100, width: 500 }}></div>

            </div>
        )
    }
}
