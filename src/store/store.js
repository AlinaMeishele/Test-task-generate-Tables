import { configureStore } from '@reduxjs/toolkit';
import companiesSlice from './slice/companiesSlice';
import employeesSlice from './slice/employeesSlice';

const store = configureStore({
  reducer: {
    companies: companiesSlice,
    employees: employeesSlice,
  },
});

export default store;
