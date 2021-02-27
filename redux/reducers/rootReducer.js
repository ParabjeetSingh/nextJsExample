import counterReducer from './login/loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;