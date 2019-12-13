import React, { Component } from 'react'
import { PageHeader, Card, Row, Col, Icon } from 'antd';

export default class index extends Component {
  render() {
    return (
      <div className='content_body'>
        {/* <PageHeader title="首页" /> */}
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card hoverable >
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <Icon type="global" style={{ fontSize: 32, color: '#1890ff' }} />
                </Col>
                <Col span={18}>
                  <div>日访问量</div>
                  <div style={{ fontWeight: 'bold', fontSize: 24 }}>2,000</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable >
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <Icon type="user" style={{ fontSize: 32, color: '#6CC788' }} />
                </Col>
                <Col span={18}>
                  <div>会员总量</div>
                  <div style={{ fontWeight: 'bold', fontSize: 24 }}>2,000</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable >
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <Icon type="shopping" style={{ fontSize: 32, color: '#F44455' }} />
                </Col>
                <Col span={18}>
                  <div>商品总数</div>
                  <div style={{ fontWeight: 'bold', fontSize: 24 }}>2,000</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable >
              <Row type="flex" justify="space-around" align="middle">
                <Col span={6}>
                  <Icon type="transaction" style={{ fontSize: 32, color: '#FFCD41' }} />
                </Col>
                <Col span={18}>
                  <div>总成交额</div>
                  <div style={{ fontWeight: 'bold', fontSize: 24 }}>2,000</div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

