import React, { Component } from 'react'
import MovieList_id from '../../components/MovieList-id'
import { Collapse, Row, Col, Radio, Tooltip, Button } from "antd";
import axios from 'axios';
import { address_offline_rec, address_movie } from '../../utils/api';
import { CloseOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.match.params.content,
            genre: -1,
            year: 0,
            movieList: [],
            genreList: []
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({ content: newProps.match.params.content }, () => this.componentDidMount())
        document.body.scrollTop = 0;
    }

    componentDidMount() {

        axios({
            url: address_offline_rec + '/getTypes',
            method: 'GET'
        }).then(res => {
            console.log(res.data.data);
            this.setState({ genreList: res.data.data })
        });
        this.getResult()

    }

    getResult() {
        axios({
            url: address_movie + '/movie/getResult',
            method: 'GET',
            params: {
                "content": this.state.content,
                "genreid": this.state.genre,
                "yearid": this.state.year,

            }
        }).then(res => {
            var arr = res.data.data;
            arr = arr.slice(0, 20);
            this.setState({ movieList: arr }, () => {
                console.log(res)
                // console.log(this.state.movieList);
            });
            // console.log("123123");
            // console.log(res);
            // res.data.data.movieList
            console.log("get result");
            // console.log(this.state.movieList);
            // console.log(this.state.movieList[0]);
            console.log(this.state.content);
            console.log(this.state.movieList);
        })
    }

    onChangeCategoory = (checkedValues) => {
        // console.log(checkedValues.target.value);
        this.setState({ genre: checkedValues.target.value }, () => {
            console.log('category = ' + this.state.genre);
            console.log('year = ' + this.state.year);
            this.getResult();
        });
    };

    onChangeYear = (checkedValues) => {

        this.setState({ year: checkedValues.target.value }, () => {
            console.log('category = ' + this.state.genre);
            console.log('year = ' + this.state.year);
            this.getResult();
        });

    };

    isNonEmpty() {
        if (this.state.movieList.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div>
                {this.isNonEmpty() ?
                    <div style={{ marginLeft: 50, marginTop: 50, fontSize: 22 }}>?????????<span style={{ color: "#f50" }}>{this.state.content}</span>???????????????????????????</div>
                    :
                    <div>????????????</div>}
                <Collapse style={{ margin: "30px 80px" }} >
                    <Panel header="??????" key="1">
                        <p>
                            <h1>??????</h1>
                            <Radio.Group style={{ width: '100%' }} onChange={this.onChangeCategoory}> ??????
                            <Row>
                                    {
                                        this.state.genreList.map((item, indes) => {
                                            return <Col span={4}>
                                                <Radio value={item.typeId}>{item.typeName}</Radio>
                                            </Col>
                                        })
                                    }
                                    <Col span={4}>
                                        <Radio value="-1">????????????</Radio>
                                    </Col>
                                </Row>

                            </Radio.Group>
                            <h1>??????</h1>
                            <Radio.Group style={{ width: '100%' }} onChange={this.onChangeYear}>

                                <Row>
                                    <Col span={6}>
                                        <Radio value="1">2021-2017</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="2">2016-2011</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="3">2010-2000</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="4">90??????</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="5">80??????</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="6">??????</Radio>
                                    </Col>
                                    <Col span={6}>
                                        <Radio value="0">????????????</Radio>
                                    </Col>
                                </Row>
                            </Radio.Group>

                        </p>
                    </Panel>
                </Collapse>
                <MovieList_id movieList={this.state.movieList} />
            </div>
        )
    }
}