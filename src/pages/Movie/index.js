import React, { Component } from 'react'

export default class Movie extends Component {
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
            </div>
        )
    }
}
