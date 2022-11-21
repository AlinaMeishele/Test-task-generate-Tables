import React from 'react';

function FormToAddCompany({ AddNewCompany, notext }) {
  return (
    <form onSubmit={AddNewCompany}>
      <h1>Добавить новую компанию</h1>
      <div className="input_wrapper">
        <span>Название компании</span>
        <input
          type="text"
          placeholder="Введите название компании"
          name="companyName"
          required
          autoComplete="off"
        />
      </div>
      <div className="input_wrapper">
        <span>Адрес компании</span>
        <input
          type="text"
          placeholder="Введите адрес компании"
          name="companyAdress"
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

export default FormToAddCompany;
