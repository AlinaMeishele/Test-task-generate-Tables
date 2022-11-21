/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import '../tables_common_styles.scss';
import ButtonForAllDelete from '../reusedComponents/ButtonForAllDelete';
import ButtonForFormAdd from '../reusedComponents/ButtonForFormAdd';
import OneCompany from './OneCompany';

function CompaniesTable() {
  const { allCompanies } = useSelector((store) => store.companies);
  const status = 'company';
  return (
    <div className="div_container">
      <table className="companies_table_wrapper">
        <caption>
          <ButtonForAllDelete status={status} />
        </caption>

        <thead>
          <tr>
            <th>Выбрать</th>
            <th>Название компании</th>
            <th>Количество сотрудников</th>
            <th>Адрес</th>
            {allCompanies.length ? <th> </th> : null}
          </tr>
        </thead>
        <tbody>
          {allCompanies.length
            ? allCompanies.map((company) => (
                <OneCompany company={company} key={company.id} />
              ))
            : null}
        </tbody>
      </table>
      <div>
        {' '}
        <ButtonForFormAdd status={status} />
      </div>
    </div>
  );
}

export default CompaniesTable;
