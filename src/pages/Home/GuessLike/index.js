import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { isLogin } from '../../../utils/auth'
import { withRouter } from 'react-router'
import './style.css'


class GuessLike extends Component {
    constructor(props) {
        super(props)
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
    }
    render() {
        return (
            <div>
                <div className="GuessLike-Title">猜你喜欢</div>
                {isLogin() ? <div className="GuessLikeBoard-ListWrapper">
                    {this.movieList.map((item, index) => {
                        return <div className="GuessLikeBoard-ItemWrapper" key={index} onClick={() => { this.props.history.push('/movie/' + item.id) }}>
                            <img className="GuessLikeBoard-ItemImage" alt={item.name} width={"100px"} src={item.image_url} />
                            <div className="GuessLikeBoard-ItemRating">

                                <div className="GuessLikeBoard-ItemRating-name">{item.name}</div>
                                <div className="GuessLikeBoard-ItemRating-rate"> {item.rate}</div>
                            </div>
                        </div>
                    })}
                </div>
                    :
                    <div className="GuessLike-button"><span>登录获取个性化推荐！</span></div>

                }
            </div>
        )
    }
}

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

export default withRouter(GuessLike)