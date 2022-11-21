/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  allEmployees: [],
  employeesToShow: [],
  selectedEmployees: [],
};

const employeesSlice = createSlice({
  name: 'allEmployees',
  initialState,
  reducers: {
    deleteOneEmployee: (state, action) => {
      state.allEmployees = state.allEmployees.filter(
        (el) => el.id !== action.payload.id
      );
    },
    deleteAllEmployeesFromSelectedCompany: (state, action) => {
      state.allEmployees = state.allEmployees.filter(
        (el) => el.companyID !== action.payload.id
      );
    },
    updateEmployeeName: (state, action) => {
      state.allEmployees = state.allEmployees.map((el) =>
        el.id === action.payload.id ? { ...el, name: action.payload.text } : el
      );
    },
    updateEmployeeSurename: (state, action) => {
      state.allEmployees = state.allEmployees.map((el) =>
        el.id === action.payload.id
          ? { ...el, surename: action.payload.text }
          : el
      );
    },
    updateEmployeePosition: (state, action) => {
      state.allEmployees = state.allEmployees.map((el) =>
        el.id === action.payload.id
          ? { ...el, position: action.payload.text }
          : el
      );
    },
    deleteAllItemsCheckedEmployees: (state, action) => {
      state.allEmployees = action.payload.duplicates;
      state.selectedEmployees = [];
    },
    addToCheckedEmployeeList: (state, action) => {
      state.selectedEmployees.push(action.payload.employee);
    },
    delFromCheckedEmployeeList: (state, action) => {
      state.selectedEmployees = state.selectedEmployees.filter(
        (el) => el.id !== action.payload.id
      );
    },
    addNewEmployee: (state, action) => {
      const id = `${state.allEmployees.length}-${action.payload.employeeName}-${action.payload.employeeSurename}-${action.payload.employeePosition} `;
      state.allEmployees.push({
        id,
        name: action.payload.employeeName,
        surename: action.payload.employeeSurename,
        position: action.payload.employeePosition,
        companyID: action.payload.companyId,
      });
    },
  },
});

export default employeesSlice.reducer;
export const {
  deleteOneEmployee,
  deleteAllEmployeesFromSelectedCompany,
  showChosenEmployees,
  updateEmployeeName,
  updateEmployeeSurename,
  updateEmployeePosition,
  deleteAllItemsCheckedEmployees,
  addToCheckedEmployeeList,
  delFromCheckedEmployeeList,
  addNewEmployee,
} = employeesSlice.actions;
