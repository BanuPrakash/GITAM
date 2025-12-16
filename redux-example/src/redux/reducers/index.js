import {combineReducer} from 'redux'
import profileReducer from './profileReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducer({
    "profile": profileReducer,
    "contacts": contactReducer
});

export default rootReducer;