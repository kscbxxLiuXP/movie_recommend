import React, { Component } from 'react';
import { getUsername, isLogin } from '../../utils/auth';
import { Timeline, Button, Rate } from 'antd';
import './style.css'
import axios from 'axios';
import { address_movie, address_rating, address_user } from '../../utils/api';

export default class History extends Component {

    // 记录从old到new的顺序
    constructor(props) {
        super(props);
        this.state = {
            rateHistoryList:[],
        }
    }

    componentDidMount(){


        axios({
            url: address_user + "/user/getUserID",
            method: "get",
            params: {
                username: getUsername()
            }
        }).then(res => {
            let userid = res.data.data
            this.setState({
                userid: userid
            })
            axios({
                url:address_rating+'/user/getHistoryInfoByUserName',
                method:'GET',
                params:{
                    userid:userid
                }
            }).then(res => {
                this.setState({rateHistoryList:res.data.data});
            })
        })
    }

    render() {
        return (
            <div>
                <h2 className="margin">历史记录</h2>
                 <div>
                     {isLogin() ? <>
                         <h1 className="margin">你好！{getUsername()}</h1>
                         <Timeline className="item-center" pending="期待您新的评分..." reverse="true" mode="left" >
                             {this.state.rateHistoryList.map((item, index) => {
                                 return <Timeline.Item position="left" label={item.timestamp}>
                                     {/* <Image width={100} src={item.image_url}></Image> */}
                                     您为电影
                                     <Button type="link"> {item.movieName}
                                     </Button>
                                     评分 <Rate disabled allowHalf defaultValue={item.rating} />
                                     <span className="ant-rate-text">{item.rating}分</span>
                                 </Timeline.Item>
                             })
                             }
                         </Timeline>
                         <div className="text-center">暂无更多评分记录</div>
                     </> : null}
                 </div>
            </div>
        )
    }
}