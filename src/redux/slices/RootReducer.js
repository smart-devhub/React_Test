import { combineReducers } from 'redux';
import userReducer from './userSlice';
import soccerSlice from './soccerSlice';

const rootReducer = combineReducers({
 user:userReducer,
 soccer:soccerSlice
});

export default rootReducer;