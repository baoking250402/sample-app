import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";
import accountReducer from "./accountSlice";

export default configureStore({
    reducer: {
        employees: employeesReducer,
        account: accountReducer,
    },
})