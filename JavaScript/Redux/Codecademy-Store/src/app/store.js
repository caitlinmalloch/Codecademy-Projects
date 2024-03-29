import { configureStore, combineReducers } from "redux";

import { cartReducer } from "../features/cart/cartSlice.js";
import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/CurrencyFilterSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";

export const store = configureStore(
  combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer,
  })
);
