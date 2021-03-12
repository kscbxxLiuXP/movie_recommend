import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import { address_movie, address_offline_rec } from '../../utils/api'
import MovieList from '../../components/MovieList'
import { convertLegacyProps } from 'antd/lib/button/button'

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movieList: [],

        }
    }
    componentWillReceiveProps(newProps) {
        this.getData(newProps.match.params.id)
        this.setState({ id: newProps.match.params.id })
        // document.body.scrollTop = 0;
    }

    getData(id) {
        axios({
            url: address_movie + '/genre/genMovieList',
            method: 'get',
            params:{
                "genreid":id
            }
        }).then(res => {
            var arr = res.data.data;
            arr = arr.slice(0, 20);
            this.setState({ movieList: arr }, () => {
                // console.log(res.data.data)
            });
            // console.log("123123");
            // console.log(res);
            // res.data.data.movieList
            console.log(res.data.data);
            console.log(this.state.movieList[0]);

        })
    }
    componentDidMount() {
        this.getData(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                {this.state.id}

                <MovieList movieList={this.state.movieList}>
                </MovieList>
            </div>
        )
    }
}

export default withRouter(Genres)