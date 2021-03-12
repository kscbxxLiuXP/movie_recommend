import React, { Component } from 'react'
import './style.css'
import { withRouter } from 'react-router'
 class SimilarBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="SimilarBoard-Title">
                <div>
                    {this.props.title}
                </div>
                <div className="SimilarBoard-SubTitle">
                    {this.props.subtitle?null:"电影"}
                </div>

                <div className="SimilarBoard-ListWrapper">
                    {this.props.movieList.map((item, index) => {
                        return <div className="SimilarBoard-ItemWrapper" key={index}  onClick={() => { this.props.history.push('/movie/'+item.movieId) }}>
                            <img className="SimilarBoard-ItemImage" alt={item.title} width={"100px"} src={item.image_url} />
                            <div className="SimilarBoard-ItemRating">
                            
                                <div className="SimilarBoard-ItemRating-name">{item.title}</div>
                                <div className="SimilarBoard-ItemRating-rate"> {item.rating}</div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default withRouter(SimilarBoard)