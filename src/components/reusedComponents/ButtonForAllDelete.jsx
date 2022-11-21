/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllItemsCheckedCopmanies } from '../../store/slice/companiesSlice';
import { deleteAllItemsCheckedEmployees } from '../../store/slice/employeesSlice';
import { removeDublicates } from '../../helpers/RemoveDublicates';

function ButtonForAllDelete({ status }) {
  const { allEmployees, selectedEmployees } = useSelector(
    (store) => store.employees
  );
  const { selectedCompany, allCompanies } = useSelector(
    (store) => store.companies
  );
  const dispatch = useDispatch();
  const DeleteAllCompaniesChecked = () => {
    if (!selectedCompany.length) {
      return;
    }
    const newComp = [];
    let foundDublic;
    const duplic = removeDublicates(
      newComp,
      foundDublic,
      allCompanies,
      selectedCompany
    );
    dispatch(deleteAllItemsCheckedCopmanies({ duplic }));
  };

  const DeleteAllEmployeesChecked = () => {
    if (!selectedEmployees.length) {
      return;
    }
    const newEmpl = [];
    let duplic;
    const duplicates = removeDublicates(
      newEmpl,
      duplic,
      allEmployees,
      selectedEmployees
    );
    dispatch(deleteAllItemsCheckedEmployees({ duplicates }));
  };
  return (
    <div>
      {status === 'company' ? (
        <button type="button" onClick={DeleteAllCompaniesChecked}>
          Удалить выделенное
        </button>
      ) : (
        <button type="button" onClick={DeleteAllEmployeesChecked}>
          Удалить выделенное
        </button>
      )}
    </div>
  );
}

export default ButtonForAllDelete;
