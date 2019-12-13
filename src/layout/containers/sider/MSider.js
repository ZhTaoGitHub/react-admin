import React from "react";
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { Link } from "react-router-dom"

import MSider from '../../components/sider/MSider'

const setMenus = (item) => (
  <Menu.Item key={item.key}>
    <Link to={item.key}>
      {item.icon && <Icon type={item.icon} theme="filled" />}
      <span>{item.title}</span>
    </Link>
  </Menu.Item>
)

const stateToProps = state => {
  return {
    collapsed: state.collapsed.collapsed,
    menus: setMenus
  }
}

export default connect(stateToProps)(MSider)
