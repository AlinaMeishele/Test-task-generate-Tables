/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllItemsCheckedCopmanies } from '../../store/slice/companiesSlice';
import { deleteAllItemsCheckedEmployees } from '../../store/slice/employeesSlice';
import { createNewItemList } from '../../helpers/RemoveDublicates';

function ButtonForAllDelete({ status }) {
  const { allEmployees, selectedEmployees } = useSelector(
    (store) => store.employees
  );
  const { selectedCompany, allCompanies } = useSelector(
    (store) => store.companies
  );
  const dispatch = useDispatch();
  let newItemList;
  const DeleteAllCompaniesChecked = () => {
    newItemList = createNewItemList(allCompanies, selectedCompany);
    dispatch(deleteAllItemsCheckedCopmanies({ newItemList }));
  };

  const DeleteAllEmployeesChecked = () => {
    newItemList = createNewItemList(allEmployees, selectedEmployees);
    dispatch(deleteAllItemsCheckedEmployees({ newItemList }));
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
