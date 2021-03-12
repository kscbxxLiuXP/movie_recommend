import React, { Component } from 'react'
import MovieList from '../../components/MovieList'
import "./style.css"
import axios from 'axios'
import { address_movie } from '../../utils/api'
export default class TopPopular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList:[],
        }
    }

        componentDidMount(){
        axios({
            url:address_movie+'/movie/getHighRateMovieList',
            method:'GET',
        }).then(res => {
            var arr=res.data.data;
            arr = arr.slice(0,50);
            this.setState({movieList:arr});
            console.log(res.data.data);
            console.log(this.state.movieList[0]);

        })
    }

    render() {
        return (
            <div>
                <h1 className="title"> 评分榜</h1>
                <MovieList  movieList={this.state.movieList}>
                </MovieList>
            </div>
        )
    }
}