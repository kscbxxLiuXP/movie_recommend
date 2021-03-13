import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

import { address_movie, address_offline_rec } from '../../utils/api'

import MovieList from '../../components/MovieList'
import { convertLegacyProps } from 'antd/lib/button/button'
import { Divider } from 'antd'

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movieList: [],
            genreName: ""

        }
    }
    componentWillReceiveProps(newProps) {
        this.getData(newProps.match.params.id)
        this.getGenreName()
        this.setState({ id: newProps.match.params.id })
        // document.body.scrollTop = 0;
    }

    getData(id) {
        axios({
            url: address_movie + '/genre/genMovieList',
            method: 'get',
            params: {
                "genreid": id
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
    getGenreName() {
        axios({
            url: address_movie + '/genre/getGenreList',
            method: "get",
        }).then(res => {
            let genres = res.data.data
            genres.forEach(element => {
                if (element.typeid === parseInt(this.props.match.params.id)) {

                    this.setState({ genreName: element.typename })
                }
            });

        })
    }
    componentDidMount() {
        this.getData(this.props.match.params.id)
        this.getGenreName()
    }

    render() {
        return (
            <div >

                <div style={{ textAlign: 'center',fontSize:46 ,marginTop:50}}>
                    {this.state.genreName}
                </div>
                <div className="Home-MovieBoard-SubTitle" style={{ textAlign: 'center',fontSize:30 }}>
                    {this.props.subtitle ? null : "电影"}
                </div>
                <Divider/>
                <MovieList movieList={this.state.movieList}>
                </MovieList>
            </div>
        )
    }
}

export default withRouter(Genres)