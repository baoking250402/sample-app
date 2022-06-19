import { createSlice } from "@reduxjs/toolkit";

const employeesSlice =  createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = {
                id: action.payload.id, 
                name: action.payload.name, 
                birthYear: action.payload.birthYear, 
                gender: action.payload.gender
            }
            state.push(newEmployee)
        },
        deleteEmployee: (state, action) => {
            return state.filter((employee) => employee.id !== action.payload.id);
        },
        modifyEmployee: (state, action) => {
            const index = state.findIndex(employee => employee.id === action.payload.prevID)
            state[index].id = action.payload.id
            state[index].name = action.payload.name
            state[index].birthYear = action.payload.birthYear
            state[index].gender = action.payload.gender
        },
        clearEmployees: (state, action) => {
            return []
        },
    }

})

export const {addEmployee, deleteEmployee, modifyEmployee, clearEmployees} = employeesSlice.actions;

export default employeesSlice.reducer;