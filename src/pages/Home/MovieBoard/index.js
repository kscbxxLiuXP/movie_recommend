import React, { Component } from 'react'
import { Card, Button } from 'antd'
import './style.css'

export default class MovieBoard extends Component {
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
                    电影
                </div>

                <div className="Home-MovieBoard-ListWrapper">
                    {this.props.movieList.map((item, index) => {
                        return <div className="Home-MovieBoard-ItemWrapper" key={index}>
                            <img className="Home-MovieBoard-ItemImage" alt={item.name} width={"100px"} src={item.image_url} />
                            <div className="Home-MovieBoard-ItemRating">
                                {/* <div className="Home-MovieBoard-ItemRating-back"></div> */}
                                <div className="Home-MovieBoard-ItemRating-name">{item.name}</div>
                                <div className="Home-MovieBoard-ItemRating-rate"> {item.rate}</div>
                            </div>

                        </div>
                    })}
                    <div className="Home-MovieBoard-ItemWrapper" >
                        <Button onClick={() => { this.props.history.push(this.props.url) }}>下一页</Button>
                        <div className="Home-MovieBoard-ItemRating">

                        </div>
                    </div >
                </div>

            </div>
        )
    }
}
