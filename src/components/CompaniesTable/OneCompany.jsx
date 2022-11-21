/* eslint-disable prefer-rest-params */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllEmployeesFromSelectedCompany } from '../../store/slice/employeesSlice';
import {
  deleteOneCompany,
  addToCheckedCompanyList,
  delFromCheckedCompanyList,
  updateCompanyName,
  updateCompanyAdress,
} from '../../store/slice/companiesSlice';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

function OneCompany({ company }) {
  const [checked, setChecked] = useState(false);
  const { allEmployees } = useSelector((store) => store.employees);
  const dispatch = useDispatch();
  const DeleteOneCompany = () => {
    const { id } = company;

    dispatch(deleteOneCompany({ id }));
    dispatch(deleteAllEmployeesFromSelectedCompany({ id }));
  };

  const ChangeCkeckedItem = () => {
    setChecked((prev) => !prev);
    const { id } = company;
    if (!checked) {
      dispatch(addToCheckedCompanyList({ company }));
    } else {
      dispatch(delFromCheckedCompanyList({ id }));
    }
  };
  const ChangeCompanyName = (e) => {
    const text = e.currentTarget.textContent;
    const { id } = company;
    dispatch(updateCompanyName({ id, text }));
  };

  const ChangeCompanyAdress = (e) => {
    const text = e.currentTarget.textContent;
    const { id } = company;
    dispatch(updateCompanyAdress({ id, text }));
  };
  ErrorHandler();
  return (
    <tr className={checked ? 'checked_item' : null}>
      <td>
        <label htmlFor="checked_company">
          <input
            type="checkbox"
            checked={checked}
            onChange={ChangeCkeckedItem}
          />
        </label>
      </td>
      <td
        onBlur={ChangeCompanyName}
        contentEditable
        suppressContentEditableWarning
      >
        {company.name}{' '}
      </td>
      <td>{allEmployees.filter((el) => el.companyID === company.id).length}</td>
      <td
        onBlur={ChangeCompanyAdress}
        contentEditable
        suppressContentEditableWarning
      >
        {company.adress}
      </td>
      <td className="del_one_item_wrapper">
        {' '}
        <button
          type="button"
          className="del_one_item"
          onClick={DeleteOneCompany}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default OneCompany;
