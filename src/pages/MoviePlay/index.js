import { Button } from 'antd';
import React, { Component } from 'react'

export default class MoviePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,

        }
    }
    render() {
        return (
            <div>
                {this.state.id}
                <Button onClick={() => { this.props.history.push('/') }}>1</Button>
            </div>
        )
    }
}
