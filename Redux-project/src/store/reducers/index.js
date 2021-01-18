import { combineReducers } from 'redux'
import listReducer from './lists'
import productReducer from './product'


////////////////////////////////////////// nyambungin action ke reducer
 const rootReducer = combineReducers({
    lists: listReducer,
    product: productReducer
})

export default rootReducer