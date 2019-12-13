import { combineReducers } from 'redux';

import { collapsed } from './collapsed';

export const reducer = combineReducers({
  collapsed: collapsed
})