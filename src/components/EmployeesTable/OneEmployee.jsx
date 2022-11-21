import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteOneEmployee,
  updateEmployeeName,
  updateEmployeeSurename,
  updateEmployeePosition,
  addToCheckedEmployeeList,
  delFromCheckedEmployeeList,
} from '../../store/slice/employeesSlice';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

function OneEmployee({ employee }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const DeleteOneEmployee = () => {
    const { id } = employee;
    dispatch(deleteOneEmployee({ id }));
  };
  const ChangeCkeckedItem = () => {
    setChecked((prev) => !prev);
    const { id } = employee;
    if (!checked) {
      dispatch(addToCheckedEmployeeList({ employee }));
    } else {
      dispatch(delFromCheckedEmployeeList({ id }));
    }
  };

  const ChangeEmployeeName = (e) => {
    const text = e.currentTarget.textContent;
    const { id } = employee;
    dispatch(updateEmployeeName({ id, text }));
  };
  const ChangeEmployeeSurename = (e) => {
    const text = e.currentTarget.textContent;
    const { id } = employee;
    dispatch(updateEmployeeSurename({ id, text }));
  };

  const ChangeEmployeePosition = (e) => {
    const text = e.currentTarget.textContent;
    const { id } = employee;
    dispatch(updateEmployeePosition({ id, text }));
  };

  ErrorHandler();
  return (
    <tr className={checked ? 'checked_item' : null}>
      <td>
        <label htmlFor="checked_employee">
          <input
            type="checkbox"
            id="checked_employee"
            checked={checked}
            onChange={ChangeCkeckedItem}
          />
        </label>
      </td>
      <td
        onBlur={ChangeEmployeeSurename}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.surename}
      </td>
      <td
        onBlur={ChangeEmployeeName}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.name}
      </td>
      <td
        onBlur={ChangeEmployeePosition}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.position}
      </td>
      <td className="del_one_item_wrapper">
        {' '}
        <button
          type="button"
          className="del_one_item"
          onClick={DeleteOneEmployee}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default OneEmployee;
