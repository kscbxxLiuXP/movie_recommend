import React, { Component } from 'react'
import { Card, Button } from 'antd'
import './style.css'
import whiteback from '../../../assets/img/whiteback.jpg'
import { withRouter } from 'react-router'
import { backToTop, num } from '../../../utils/utils'
class MovieBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="Home-MovieBoard-Title">
                <div>
                    {this.props.title}
                </div>
                <div className="Home-MovieBoard-SubTitle">
                    {this.props.subtitle ? null : "电影"}
                </div>

                <div className="Home-MovieBoard-ListWrapper">
                    {this.props.movieList.map((item, index) => {
                        return <div className="Home-MovieBoard-ItemWrapper" key={index} onClick={() => { backToTop(); this.props.history.push('/movie/' + item.movieid) }}>
                            <img className="Home-MovieBoard-ItemImage" alt={item.name} width={"100px"} src={item.image_url} />
                            <div className="Home-MovieBoard-ItemRating">

                                <div className="Home-MovieBoard-ItemRating-name">{item.title}</div>
                                <div className="Home-MovieBoard-ItemRating-rate"> 评分：{num(item.rating)}</div>
                            </div>
                        </div>
                    })}
                    <div className="Home-MovieBoard-ItemWrapper" onClick={() => { backToTop(); this.props.history.push(this.props.url) }}>

                        <img className="Home-MovieBoard-ItemImage" alt="blank" width={"100px"} src={whiteback} />
                        <div className="Home-MovieBoard-ItemRating">
                            <div>查看</div>
                            <div>更多</div>
                        </div>
                    </div >
                </div>

            </div>
        )
    }
}

export default withRouter(MovieBoard)