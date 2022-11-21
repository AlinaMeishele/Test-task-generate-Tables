import React from 'react';

function FormToAddEmployee({ AddNewEmployee, selectedCompany, notext }) {
  return (
    <form onSubmit={AddNewEmployee}>
      <h1>Добавить нового сотрудника</h1>
      <div className="input_wrapper">
        <span>Название компании</span>
        <select name="companyId">
          {selectedCompany.map((company) => (
            <option value={company.id} key={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input_wrapper">
        <span>Фамилия сотрудника</span>
        <input
          type="text"
          placeholder="Введите фамилию сотрудника"
          name="employeeSurename"
          required
          autoComplete="off"
        />
      </div>
      <div className="input_wrapper">
        <span>Имя сотрудника</span>
        <input
          type="text"
          placeholder="Введите имя сотрудника"
          name="employeeName"
          required
          autoComplete="off"
        />
      </div>
      <div className="input_wrapper">
        <span>Должность сотрудника</span>
        <input
          type="text"
          placeholder="Введите должность сотрудника"
          name="employeePosition"
          required
          autoComplete="off"
        />
      </div>
      <div className={!notext ? 'visibility' : null}>
        Все поля должны быть заполнены
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default FormToAddEmployee;
