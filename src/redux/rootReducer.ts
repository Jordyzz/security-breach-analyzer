import { combineReducers, Reducer } from 'redux';
import * as RI from './redux.interface';
import configReducer from './config';
import favoritesReducer from './breaches';

const rootReducer = combineReducers({
  config: configReducer as Reducer<RI.ConfigState>,
  breaches: favoritesReducer as Reducer<RI.BreachesState>
});

export default rootReducer;
