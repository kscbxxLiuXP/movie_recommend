import React, { Component } from 'react'

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.match.params.content
        }

    }
    render() {
        return (
            <div>
                result
                {this.state.content}
            </div>
        )
    }
}
