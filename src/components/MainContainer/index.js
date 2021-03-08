import React, { Component } from 'react'
import { Divider, Layout } from 'antd';

import MyHeader from '../MyHeader';
import MySider from '../MySider';


const { Content, Sider } = Layout;
export default class MainContainer extends Component {
    render() {
        return (
            <Layout className="layout" >
               
                    <MyHeader />
               
                <Layout>
                    <Sider width={250} className="site-layout-background" style={{ backgroundColor: "white", }}>
                        <MySider />
                    </Sider>
                    <Content style={{ backgroundColor: "white" }} >
                        {this.props.children}
                    </Content>
                </Layout>


            </Layout>
        )
    }
}
