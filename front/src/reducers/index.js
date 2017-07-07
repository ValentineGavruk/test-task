import {combineReducers} from 'redux'
import Goods from './goods'
import Info from './info'
import UserRole from './user-role'

const rootReducer = combineReducers({
    Goods,
    Info,
    UserRole
});

export default rootReducer