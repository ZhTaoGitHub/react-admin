import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import MHeader from './containers/header/MHeader';
import MSider from './containers/sider/MSider';
import { connect } from 'react-redux'
import Pages from '../router'

const { Content } = Layout;

class Root extends Component {
  state = {
    collapsed: false
  }

  render() {
    return (
      <Router>
        <Layout style={{ height: '100%' }}>
          <MHeader />
          <Layout style={{ marginTop: 64 }}>
            <MSider />
            <Layout className='main_body' style={{ marginLeft: this.props.collapsed ? 80 : 200 }}>
              <Content>
                <Pages />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default connect(
  state => ({ collapsed: state.collapsed.collapsed }),
)(Root);