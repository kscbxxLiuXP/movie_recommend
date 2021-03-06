import React, { Component } from 'react'
import { Card, Button, Rate } from 'antd'
import { isLogin } from '../../../utils/auth'
import { withRouter } from 'react-router'
import './style.css'
import { backToTop } from '../../../utils/utils'


class GuessLike extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="GuessLike-Title">猜你喜欢</div>
                {isLogin() ? <div className="GuessLikeBoard-ListWrapper">
                    {this.props.movieList.map((item, index) => {
                        return <div className="GuessLikeBoard-ItemWrapper" key={index} onClick={() => { backToTop(); this.props.history.push('/movie/' + item.movieId) }}>
                            <img className="GuessLikeBoard-ItemImage" alt={item.title} width={"100px"} src={item.image_url} />
                            <div className="GuessLikeBoard-ItemRating">

                                <div className="GuessLikeBoard-ItemRating-name">{item.title}</div>
                                <div className="GuessLikeBoard-ItemRating-rate"> 评分： {item.rating.toFixed(1)}</div>
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


export default withRouter(GuessLike)