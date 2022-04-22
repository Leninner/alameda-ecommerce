import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { shopListReducer } from './shopListReducer'

export const rootReducer = combineReducers({
  cart: cartReducer,
  shopList: shopListReducer,
})
