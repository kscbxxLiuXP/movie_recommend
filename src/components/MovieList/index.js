import React, { Component } from 'react'
import { Image, Button, Typography, Rate, Divider } from 'antd'
import "./style.css"
import { withRouter } from 'react-router'

const { Paragraph } = Typography;

class MovieList extends Component {
    render() {
        return (
            <div className="movie-list-wrapper">
                {this.props.movieList.map((item, index) => {
                    return <div className="divider">
                        <div className="movie-list-item">
                            <Image className="image" width={130} src={item.image_url}> </Image>
                            <div className="movie-list-item-details">
                                <Button type="link" onClick={() => { this.props.history.push('../movie/' + item.id) }}>{item.name}
                                </Button>
                                <Paragraph
                                    ellipsis={{
                                        rows: 3,
                                        expandable: true,
                                        onEllipsis: ellipsis => {
                                        },
                                    }}
                                >
                                    {/* {item.overview} */}
                                            To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life--William Shakespeare
                                        </Paragraph>
                                <div>
                                    <Rate allowHalf disabled defaultValue={item.rate / 2} />
                                    <span className="ant-rate-text">{item.rate}</span>
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