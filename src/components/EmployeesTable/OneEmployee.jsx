import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteOneEmployee,
  updateEmployeeAttribute,
  addToCheckedEmployeeList,
  delFromCheckedEmployeeList,
} from '../../store/slice/employeesSlice';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

function OneEmployee({ employee }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { id } = employee;
  const currentAttribute = useRef();
  let text;
  let attribute;

  const DeleteOneEmployee = () => {
    dispatch(deleteOneEmployee({ id }));
  };

  const ChangeCkeckedItem = () => {
    setChecked((prev) => !prev);
    if (!checked) {
      dispatch(addToCheckedEmployeeList({ item: employee }));
    } else {
      dispatch(delFromCheckedEmployeeList({ id }));
    }
  };

  const ChangeEmployeeName = (e) => {
    text = e.currentTarget.textContent;
    attribute = 'name';
    dispatch(updateEmployeeAttribute({ id, text, attribute }));
  };

  const ChangeEmployeeSurename = (e) => {
    text = e.currentTarget.textContent;
    attribute = 'surename';
    dispatch(updateEmployeeAttribute({ id, text, attribute }));
  };

  const ChangeEmployeePosition = (e) => {
    text = e.currentTarget.textContent;
    attribute = 'position';
    dispatch(updateEmployeeAttribute({ id, text, attribute }));
  };

  ErrorHandler();
  return (
    <tr className={checked ? 'checked_item' : null}>
      <td className="del_one_item_wrapper">
        <button
          type="button"
          className="del_one_item"
          onClick={DeleteOneEmployee}
        >
          X
        </button>
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
        ref={currentAttribute}
        id="surename"
        onBlur={ChangeEmployeeSurename}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.surename}
      </td>
      <td
        ref={currentAttribute}
        id="name"
        onBlur={ChangeEmployeeName}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.name}
      </td>
      <td
        ref={currentAttribute}
        id="positon"
        onBlur={ChangeEmployeePosition}
        contentEditable
        suppressContentEditableWarning
      >
        {employee.position}
      </td>
    </tr>
  );
}

export default OneEmployee;
