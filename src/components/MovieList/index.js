import React, { Component } from 'react'
import { Image, Button, Typography, Rate, Divider } from 'antd'
import "./style.css"
import { withRouter } from 'react-router'

const { Paragraph } = Typography;

class MovieList extends Component {
    // num(i) {
    //     var num = i.toFixed(2);    
    //     return num;
    // }
    render() {
        return (
            <div className="movie-list-wrapper">
                {this.props.movieList.map((item, index) => {
                    return <div className="divider">
                        <div className="movie-list-item">
                            <Image className="image" width={130} src={item.image_url}> </Image>
                            <div className="movie-list-item-details">
                                <Button type="link" onClick={() => { this.props.history.push('../movie/' + item.movieId) }}>{item.title}
                                </Button>
                                <Paragraph
                                    ellipsis={{
                                        rows: 3,
                                        expandable: true,
                                        onEllipsis: ellipsis => {
                                        },
                                    }}
                                >
                                    {item.overview}
                                        </Paragraph>
                                <div>
                                    <Rate allowHalf disabled defaultValue={item.rating} />
                                    
                                    <span className="ant-rate-text"> {item.rating}</span>
                                </div>
                            </div>
                        </div>
                        <Divider></Divider>
                    </div>

                })}

            </div>
        )
    }
}

export default withRouter(MovieList)