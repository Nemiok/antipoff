import { combineReducers } from '@reduxjs/toolkit';
import { PAGES_NAMES } from '../../utils/objects';
import teamReducer from './team-page-reducer/team-reducer';

export const rootReducer = combineReducers({
  [PAGES_NAMES.TEAM_PAGE]: teamReducer
});
