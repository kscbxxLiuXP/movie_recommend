import React, { Component } from 'react'
import { Card, Row, Col, Button, BackTop, Affix } from 'antd'

import GuessLike from './GuessLike'
import MovieBoard from './MovieBoard'

import MyCarousel from '../../components/MyCarousel'

export default class Home extends Component {

    movieList = [
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
    ]
    render() {
        return (
            <>

                <MyCarousel />


                <div style={{ paddingLeft: 40, paddingRight: 10 }}>
                    <GuessLike />
                </div>
                <Row style={{ paddingLeft: 40, paddingRight: 10, marginTop: 20 }} >
                    <Col span={20}>

                        <MovieBoard title="热门" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="喜剧" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="惊悚" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="动画" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="科幻" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="魔幻" movieList={this.movieList} url="/top-popular" />
                    </Col>
                    <Col span={4}>
                        <div style={{ marginLeft: 10, marginTop: 20 }}>
                            <Affix offsetTop={80}>
                                <Card title="热播榜">
                                    <Button onClick={() => { this.props.history.push("/top-popular") }}>
                                        更多
                            </Button>
                                </Card>
                                <Card title="评分榜">
                                    <Button onClick={() => { this.props.history.push("/top-rating") }}>
                                        更多
                            </Button>
                                </Card>
                            </Affix>
                        </div>

                    </Col>
                </Row>
                <BackTop visibilityHeight={150} />
            </>
        )
    }
}
