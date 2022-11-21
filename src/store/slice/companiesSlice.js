/* eslint-disable no-loop-func */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCompanies: [],
  selectedCompany: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    deleteOneCompany: (state, action) => {
      state.allCompanies = state.allCompanies.filter(
        (el) => el.id !== action.payload.id
      );
    },
    addToCheckedCompanyList: (state, action) => {
      state.selectedCompany.push(action.payload.company);
    },
    delFromCheckedCompanyList: (state, action) => {
      state.selectedCompany = state.selectedCompany.filter(
        (el) => el.id !== action.payload.id
      );
    },
    updateCompanyName: (state, action) => {
      state.allCompanies = state.allCompanies.map((el) =>
        el.id === action.payload.id ? { ...el, name: action.payload.text } : el
      );
    },
    updateCompanyAdress: (state, action) => {
      state.allCompanies = state.allCompanies.map((el) =>
        el.id === action.payload.id
          ? { ...el, adress: action.payload.text }
          : el
      );
    },
    deleteAllItemsCheckedCopmanies: (state, action) => {
      state.allCompanies = action.payload.duplic;
      state.selectedCompany = [];
    },
    addNewCompany: (state, action) => {
      const id = `${state.allCompanies.length}-${action.payload.companyName}-${action.payload.companyAdress}`;
      state.allCompanies.push({
        id,
        name: action.payload.companyName,
        adress: action.payload.companyAdress,
      });
    },
  },
});

export default companiesSlice.reducer;
export const {
  deleteOneCompany,
  addToCheckedCompanyList,
  delFromCheckedCompanyList,
  allCompaniesChecked,
  noCompaniesChecked,
  updateCompanyName,
  updateCompanyAdress,
  deleteAllItemsCheckedCopmanies,
  addNewCompany,
} = companiesSlice.actions;
