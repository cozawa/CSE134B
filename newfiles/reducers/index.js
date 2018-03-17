import { combineReducers } from 'redux';
import signin from './signin_reducer';
import signup from './signup_reducer';

const rootReducer = combineReducers({
    signin,
    signup
});