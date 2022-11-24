/* eslint-disable prefer-rest-params */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllEmployeesFromSelectedCompany } from '../../store/slice/employeesSlice';
import {
  deleteOneCompany,
  addToCheckedCompanyList,
  delFromCheckedCompanyList,
  updateCompanyAttribute,
} from '../../store/slice/companiesSlice';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

function OneCompany({ company }) {
  const [checked, setChecked] = useState(false);
  const { allEmployees } = useSelector((store) => store.employees);
  const dispatch = useDispatch();
  const { id } = company;
  let text;
  let attribute;
  const DeleteOneCompany = () => {
    dispatch(deleteOneCompany({ id }));
    dispatch(deleteAllEmployeesFromSelectedCompany({ id }));
  };

  const ChangeCkeckedItem = () => {
    setChecked((prev) => !prev);
    if (!checked) {
      dispatch(addToCheckedCompanyList({ item: company }));
    } else {
      dispatch(delFromCheckedCompanyList({ id }));
    }
  };
  const ChangeCompanyName = (e) => {
    text = e.currentTarget.textContent;
    attribute = 'name';
    dispatch(updateCompanyAttribute({ id, text, attribute }));
  };

  const ChangeCompanyAdress = (e) => {
    text = e.currentTarget.textContent;
    attribute = 'adress';
    dispatch(updateCompanyAttribute({ id, text, attribute }));
  };
  ErrorHandler();
  return (
    <tr className={checked ? 'checked_item' : null}>
      <td className="del_one_item_wrapper">
        <button
          type="button"
          className="del_one_item"
          onClick={DeleteOneCompany}
        >
          X
        </button>
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
    </tr>
  );
}

export default OneCompany;
