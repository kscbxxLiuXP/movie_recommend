import { Timeline } from 'antd';
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import im5 from '../../assets/img/im5.png'
class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,

        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({ id: newProps.match.params.id })
        document.body.scrollTop = 0;
    }

    render() {
        return (
            <div>
                {this.state.id}
                <Timeline>
                    <Timeline.Item>
                        <div>Create a services site 2015-09-01
                            </div>
                        <div>
                            <img src={"https://www.themoviedb.org//t/p/w300_and_h450_bestv2/dKTkxSeNgHdwgrAbhwbXuUk4tzb.jpg"} alt="a"></img>
                        </div>

                    </Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>,
            </div>
        )
    }
}

export default withRouter(Genres)