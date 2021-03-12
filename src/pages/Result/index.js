import React, { Component } from 'react'
import MovieList from '../../components/MovieList'
import { Collapse, Row, Col, Radio,Tooltip, Button } from "antd";
import axios from 'axios';
import { address_offline_rec, address_movie } from '../../utils/api';
import { CloseOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.match.params.content,
            genre:-1,
            year:0,
            movieList:[],
            genreList:[]
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({ content: newProps.match.params.content },()=>this.componentDidMount())
        document.body.scrollTop = 0;
    }

    componentDidMount(){

        axios({
            url:address_offline_rec+'/getTypes',
            method:'GET'
        }).then(res => {
            console.log(res.data.data);
            this.setState({genreList:res.data.data})
        });
        this.getResult()
        
    }

    getResult() {
        axios({
            url:address_movie +'/movie/getResult',
            method:'GET',
            params:{
                "content":this.state.content,
                "genreid":this.state.genre,
                "yearid":this.state.year,
                
            }
        }).then(res => {
            var arr=res.data.data;
            arr = arr.slice(0,20);
            this.setState({movieList:arr},() => {
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
        this.setState({genre:checkedValues.target.value},() => {
            console.log('category = ' + this.state.genre);
            console.log('year = ' + this.state.year);
            this.getResult();
        });
    };

    onChangeYear = (checkedValues) => {
        
        this.setState({year:checkedValues.target.value},() => {
            console.log('category = ' + this.state.genre);
            console.log('year = ' + this.state.year);
            this.getResult();
        });
        
    };

    isNonEmpty(){
        if(this.state.movieList.length===0){
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div>
                {this.isNonEmpty()?
                <div>包含{this.state.content}的结果如下</div>
                :
                <div>暂无结果</div>}
                <Collapse style={{margin:30}} >
                    <Panel header="筛选" key="1">
                        <p>
                        <h1>分类</h1>
                        <Radio.Group style={{ width: '100%' }} onChange={this.onChangeCategoory}> 类别
                            <Row>
                                {
                                    this.state.genreList.map((item,indes) => {
                                        return <Col span={4}>
                                            <Radio value={item.typeId}>{item.typeName}</Radio>
                                        </Col>
                                    })
                                }
                            </Row>
                            <Row>
                            <Tooltip title="search">
                                <Button type="dashed" shape="circle" icon={<CloseOutlined  />} />
                            </Tooltip>
                            </Row>
                        </Radio.Group>
                        <h1>年代</h1>
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
                                    <Radio value="4">90年代</Radio>
                                </Col>
                                <Col span={6}>
                                    <Radio value="5">80年代</Radio>
                                </Col>
                                <Col span={6}>
                                    <Radio value="6">更早</Radio>
                                </Col>
                            </Row>
                        </Radio.Group>

                        </p>
                    </Panel>
                </Collapse>
                <MovieList movieList={this.state.movieList} />    
            </div> 
        )
    }
}