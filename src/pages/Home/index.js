import React, { Component } from 'react'
import { Carousel, Card, Row, Col, Button, BackTop } from 'antd'

import GuessLike from './GuessLike'
import MovieBoard from './MovieBoard'
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
                <Carousel autoplay>
                    <div >
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                <div style={{ paddingLeft: 40, paddingRight: 10 }}>
                    <GuessLike />
                </div>
                <Row style={{ paddingLeft: 40, paddingRight: 10 }} >
                    <Col span={20}>

                        <MovieBoard title="热门" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="喜剧" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="惊悚" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="动画" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="科幻" movieList={this.movieList} url="/top-popular" />
                        <MovieBoard title="魔幻" movieList={this.movieList} url="/top-popular" />
                    </Col>
                    <Col span={4}>
                        <div style={{ marginLeft: 10 }}>
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
                        </div>

                    </Col>
                </Row>
                <BackTop visibilityHeight={150} />
            </>
        )
    }
}
const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
};
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};