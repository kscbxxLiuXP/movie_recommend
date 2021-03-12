import React, { Component } from 'react'
import { Affix } from 'antd'
import './style.css'
import homelogo from '../../assets/img/homelogo.svg'
import { withRouter } from 'react-router-dom'

import { backToTop } from '../../utils/utils'

import axios from 'axios'
import { address_offline_rec } from '../../utils/api'


class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGenreId: 1,
            id: 1,
            isGenre: false,
            genres:[],
        }

    }
    componentDidMount() {

        console.log("begin");
        axios({
            url:address_offline_rec+'/getTypes',
            method:'GET'
        }).then(res => {
            this.setState({genres:res.data.data})
        });


        let a = this.props.location.pathname.split('/');
        if (a[1] === 'genre') {
            this.setState({ id: a[2], isGenre: true })
        } else {
            this.setState({ isGenre: false })
        }

    }
    componentWillReceiveProps(newProps) {
        let a = newProps.location.pathname.split('/');
        if (a[1] === 'genre') {
            this.setState({ id: a[2], isGenre: true })
        } else {
            this.setState({ isGenre: false })
        }
    }
    renderItemClassName(id) {

        if (this.state.isGenre && id === parseInt(this.state.id)) {
            return "genre-slider-item-selected"
        } else {
            return "genre-slider-item"
        }
    }
    render() {
        return (
            <div className="sider-wrapper">

                <div style={{ marginTop: 50, marginBottom: 60 }}>
                    <img src={homelogo} style={{ cursor: 'pointer' }} alt="homelogo" width={180} onClick={() => { this.props.history.push('/') }}></img>
                </div>
                <Affix offsetTop={80}>
                    <div >
                        <div style={{ width: 200, fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>分类</div>
                        <>
                            {this.state.genres.map((item, index) => {

                                return <div key={index} className={this.renderItemClassName(item.typeId)} onClick={() => {
                                    backToTop()
                                    this.props.history.push('/genre/' + item.typeId);

                                }}>
                                    <svg aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="dot-circle"
                                        className="svg-inline--fa fa-dot-circle fa-w-16 fa-1x "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        style={{ marginRight: "10px", width: 10 }}>
                                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z">

                                        </path>
                                    </svg>
                                    {item.typeName}
                                </div>
                            })}
                        </>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 10, }}>Copyright ©2021 <br /><span style={{ fontWeight: 'bold' }}>MovieRecommender</span></div>
                </Affix>
            
            </div>
        )
    }
}
export default withRouter(MySider)