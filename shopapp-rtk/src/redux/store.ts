import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import profileReducer from './features/profileSlice';
import { useSelector, type TypedUseSelectorHook } from "react-redux";

// instead of createStore
// by default REDUX_DEVTOOLS_EXTENSION is enabled
const store = configureStore({
    // combineReducer for RootReducer
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    },
    // devTools: false
});

// check our ReturnTypeOf util we wrote in TS examples
// infer a new type
export type RootType = ReturnType<typeof store.getState>

// type safe useSelector
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;

export default store;