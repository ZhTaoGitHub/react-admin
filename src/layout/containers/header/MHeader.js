import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/collapsed'

import MHeader from '../../components/header/MHeader'

const stateToProps = state => {
  return {
    collapsed: state.collapsed.collapsed
  }
}

const dispatchToProps = dispatch => {
  return {
    onClick: value => {
      dispatch(actions.setCllapsed(value))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(MHeader)
