import React, { Component } from 'react'
import MovieList from '../../components/MovieList'
import { Collapse,Checkbox, Row, Col } from "antd";
const { Panel } = Collapse;

export default class Result extends Component {

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

        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.match.params.content,
            category:["z"],
            year:[]
        }
    };

    
    onChangeCategoory = (checkedValues) => {
        this.setState({category:checkedValues, },() => {
            console.log('category = ' + this.state.category);
            console.log('year = ' + this.state.year);
        });
        
    };

    onChangeYear = (checkedValues) => {
        this.setState({year:checkedValues},() => {
            console.log('category = ' + this.state.category);
            console.log('year = ' + this.state.year);
        });
        
    };

    render() {
        return (
            <div>
                <div>包含{this.state.content}的结果如下</div>
                <Collapse style={{margin:30}} >
                    <Panel header="筛选" key="1">
                        <p>
                        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChangeCategoory}> 类别
                            <Row>
                                <Col span={6}>
                                    <Checkbox value="A">惊悚</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="B">喜剧</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="C">科幻</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="D">犯罪</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="E">悬疑</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value='F'>动画</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value='G'>儿童</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>

                        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChangeYear}> 年代
                            <Row>
                                <Col span={6}>
                                    <Checkbox value="0">2021-2017</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="1">2016-2011</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="2">2010-2000</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="3">90年代</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="4">80年代</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="5">更早</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>

                        </p>
                    </Panel>
                </Collapse>
                <MovieList movieList={this.movieList} />    
            </div> 
        )
    }
}