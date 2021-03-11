import React, { Component } from 'react';
import { getUsername, isLogin } from '../../utils/auth';
import { Timeline, Button, Rate } from 'antd';
import './style.css'

export default class History extends Component {

    // 记录从old到new的顺序
    rateHistoryList = [
        {
            id: 1,
            time: "2020-12-11",
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
            name: "玩具总动员",
            rate: "9.0"
        },
        {
            id: 2,
            time: "2020-12-12",
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/5aeZQhMHghOZUK30qNCjgpQlkIq.jpg",
            name: "勇敢者的游戏",
            rate: "8.0"
        },
        {
            id: 3,
            time: "2020-12-13",
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/2Z19YpRxntcEQZN02NWWoxbGmAL.jpg",
            name: "玩具总动员",
            rate: "9.0"
        },
        {
            id: 4,
            time: "2020-12-14",
            image_url: "https://www.themoviedb.org//t/p/w300_and_h450_bestv2/5aeZQhMHghOZUK30qNCjgpQlkIq.jpg",
            name: "勇敢者的游戏",
            rate: "8.0"
        }
    ]


    render() {
        return (
            <div>
                <h2 className="margin">历史记录</h2>
                <div>
                    {isLogin() ? <>
                        <h1 className="margin">你好！{getUsername()}</h1>
                        <Timeline className="item-center" pending="期待您新的评分..." reverse="true" mode="left" >
                            {this.rateHistoryList.map((item, index) => {
                                return <Timeline.Item position="left" label={item.time}>
                                    {/* <Image width={100} src={item.image_url}></Image> */}
                                    您为电影
                                    <Button type="link" onClick={() => { this.props.history.push('../movie/' + item.id) }}>{item.name}
                                    </Button>
                                    评分 <Rate disabled allowHalf defaultValue={item.rate / 2} />
                                    <span className="ant-rate-text">{item.rate}分</span>
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