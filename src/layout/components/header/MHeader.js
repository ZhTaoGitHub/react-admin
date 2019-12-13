import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import logo from '../../../assets/logo.svg'

const { Header } = Layout

const MHeader = ({ collapsed, onClick }) => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: 0,
        display: 'flex',
        position: 'fixed',
        width: '100%',
        zIndex: 999
      }}>
      <div style={{ width: 200 }}>
        <img alt="logo" className='logo' src={logo} />
      </div>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => onClick(!collapsed)}
      />
    </Header>
  )
}

MHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MHeader
