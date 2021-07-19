import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import RootReducer from "./RootReducer";

const reduxStore = createStore(RootReducer, applyMiddleware(thunk));
const persistor = persistStore(reduxStore);

export { reduxStore, persistor };
