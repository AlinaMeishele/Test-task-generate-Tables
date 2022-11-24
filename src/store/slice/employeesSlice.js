/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { addToCheckedList } from '../../helpers/sliceHelpers/changeCheckedList';
import { handleChangeElemAttribute } from '../../helpers/sliceHelpers/changeElemAttribute';
import { handleFilter } from '../../helpers/sliceHelpers/filter';

export const initialState = {
  allEmployees: [],
  selectedEmployees: [],
};

const employeesSlice = createSlice({
  name: 'allEmployees',
  initialState,
  reducers: {
    deleteOneEmployee: (state, action) => {
      state.allEmployees = handleFilter(state.allEmployees, action);
    },
    updateEmployeeAttribute: (state, action) => {
      state.allEmployees = handleChangeElemAttribute(
        state.allEmployees,
        action
      );
    },
    deleteAllItemsCheckedEmployees: (state, action) => {
      state.allEmployees = action.payload.newItemList;
      state.selectedEmployees = [];
    },
    addToCheckedEmployeeList: (state, action) => {
      addToCheckedList(state.selectedEmployees, action);
    },
    delFromCheckedEmployeeList: (state, action) => {
      state.selectedEmployees = handleFilter(state.selectedEmployees, action);
    },
    deleteAllEmployeesFromSelectedCompany: (state, action) => {
      state.allEmployees = action.payload.employeesLeft;
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
  updateEmployeeAttribute,
  deleteAllItemsCheckedEmployees,
  addToCheckedEmployeeList,
  delFromCheckedEmployeeList,
  deleteAllEmployeesFromSelectedCompany,
  addNewEmployee,
} = employeesSlice.actions;
