import { configureStore } from "@reduxjs/toolkit";
import intentReducer from './intent'
export default configureStore({
    reducer: {
        intent: intentReducer,

    }
})