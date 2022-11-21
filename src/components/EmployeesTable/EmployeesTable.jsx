/* eslint-disable no-loop-func */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonForAllDelete from '../reusedComponents/ButtonForAllDelete';
import ButtonForFormAdd from '../reusedComponents/ButtonForFormAdd';
import '../tables_common_styles.scss';
import OneEmployee from './OneEmployee';
import { formListOfEmployeesToSHow } from '../../helpers/emplpyeeInfoSort';

function EmployeesTable() {
  const { allEmployees } = useSelector((store) => store.employees);
  const { selectedCompany, allCompanies } = useSelector(
    (store) => store.companies
  );
  const info = formListOfEmployeesToSHow(selectedCompany, allEmployees);
  return (
    <div className="div_container">
      <div>
        {selectedCompany.length > 0 && allCompanies.length > 0 && (
          <table className="companies_table_wrapper">
            <caption>
              <ButtonForAllDelete />
            </caption>

            <thead>
              <tr>
                <th>Выбрать</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Должность</th>
                {info.length ? <th> </th> : null}
              </tr>
            </thead>
            <tbody>
              {info.length > 0 &&
                info.map((employee) => (
                  <OneEmployee employee={employee} key={employee.id} />
                ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedCompany.length === 0 ? null : <ButtonForFormAdd status />}
    </div>
  );
}

export default EmployeesTable;
