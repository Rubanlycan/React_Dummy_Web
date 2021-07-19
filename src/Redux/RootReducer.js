import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from "./Product/ProductReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products"],
};

const RootReducer = combineReducers({
  products: ProductReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export default persistedReducer;
