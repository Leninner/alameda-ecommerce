import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { shopListReducer } from './shopListReducer'
import { checkoutReducer } from './checkoutReducer'

export const rootReducer = combineReducers({
  cart: cartReducer,
  shopList: shopListReducer,
  checkout: checkoutReducer,
})
