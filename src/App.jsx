import React from 'react';
import './App.scss';
import CompaniesTable from './components/CompaniesTable/CompaniesTable';
import EmployeesTable from './components/EmployeesTable/EmployeesTable';

function App() {
  return (
    <div className="all_table_wrapper">
      <CompaniesTable />
      <EmployeesTable />
    </div>
  );
}

export default App;
