import { combineReducers } from '@reduxjs/toolkit';
import { PAGES_NAMES } from '../../utils/objects';
import teamReducer from './team-page-reducer/team-reducer';
import commonReducer from './common-reducer';
import singleUserReducer from './single-user-reducer';

export const rootReducer = combineReducers({
  commonReducer,
  [PAGES_NAMES.TEAM_PAGE]: teamReducer,
  [PAGES_NAMES.SINGLE_USER_PAGE]: singleUserReducer
});
