import { createStore } from "redux";
import rootReducer from "./reducers"; // imports index.js if file is not mentioned

const store = createStore(rootReducer);

export default store;