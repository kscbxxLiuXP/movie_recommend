import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,

        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({ id: newProps.match.params.id })
        document.body.scrollTop=0;
    }

    render() {
        return (
            <div>
                {this.state.id}
            </div>
        )
    }
}

export default withRouter(Genres)