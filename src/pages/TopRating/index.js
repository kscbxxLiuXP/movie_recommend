import React, { Component } from 'react'
import MovieList from '../../components/MovieList'
import "./style.css"
import axios from 'axios'
import { address_movie } from '../../utils/api'
import { Divider } from 'antd'
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
                   <div style={{ textAlign: 'center',fontSize:46 ,marginTop:50}}>
                    评分榜
                </div>
                <Divider/>
                <MovieList  movieList={this.state.movieList}>
                </MovieList>
            </div>
        )
    }
}