/* eslint-disable no-loop-func */
import { createSlice } from '@reduxjs/toolkit';
import { addToCheckedList } from '../../helpers/sliceHelpers/changeCheckedList';
import { handleChangeElemAttribute } from '../../helpers/sliceHelpers/changeElemAttribute';
import { handleFilter } from '../../helpers/sliceHelpers/filter';

const initialState = {
  allCompanies: [],
  selectedCompany: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    deleteOneCompany: (state, action) => {
      state.allCompanies = handleFilter(state.allCompanies, action);
    },
    addToCheckedCompanyList: (state, action) => {
      addToCheckedList(state.selectedCompany, action);
    },
    delFromCheckedCompanyList: (state, action) => {
      state.selectedCompany = handleFilter(state.selectedCompany, action);
    },
    updateCompanyAttribute: (state, action) => {
      state.allCompanies = handleChangeElemAttribute(
        state.allCompanies,
        action
      );
    },
    deleteAllItemsCheckedCopmanies: (state, action) => {
      state.allCompanies = action.payload.newItemList;
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
  updateCompanyAttribute,
  deleteAllItemsCheckedCopmanies,
  addNewCompany,
} = companiesSlice.actions;
