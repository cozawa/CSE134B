import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import signin from './signinreducer';
import signup from './signupreducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  signin,
  signup
});

export default rootReducer;
