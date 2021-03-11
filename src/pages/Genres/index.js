import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import { address } from '../../utils/api'
import MovieList from '../../components/MovieList'
import { convertLegacyProps } from 'antd/lib/button/button'

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movieList:[],

        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({ id: newProps.match.params.id })
        document.body.scrollTop = 0;
    }

    componentDidMount(){
        axios({
            url:address+'/certainTypeMovies',
            method:'GET',
            params:{
                typeId:this.state.id
            }
        }).then(res => {
            this.setState({movieList:res.data.data});
            console.log("qwe");
            console.log(res);
            // res.data.data.movieList
        })
    }

    render() {
        return (
            <div>
                {this.state.id}
                
                {/* <MovieList  movieList={this.movieList}>
                </MovieList> */}
            </div>
        )
    }
}

export default withRouter(Genres)