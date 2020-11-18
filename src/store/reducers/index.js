import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  number: numberReducer,
  form :formReducer
})