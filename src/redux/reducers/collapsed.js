import * as actionTypes from '../actionTypes/collapsed';
import _ from "lodash"

const defaultState = {
  collapsed: false
};

export const collapsed = (state = defaultState, action) => {

  let newState = _.cloneDeep(state);
  switch (action.type) {
    case actionTypes.COLLAPSED:
      newState.collapsed = action.value;
      return newState;
    default:
      return defaultState;
  }
}