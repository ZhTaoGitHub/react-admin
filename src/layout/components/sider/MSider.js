import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import _ from 'lodash'
import config from '../../../router/config'

const { Sider } = Layout

const MSider = ({ collapsed, menus }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        backgroundColor: '#fff',
        zIndex: 999
      }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={[config.default]}>
        {
          _.map(config.menus, item => (
            menus(item)
          ))
        }
      </Menu>
    </Sider>
  )
}

MSider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  menus: PropTypes.func.isRequired
}

export default MSider
