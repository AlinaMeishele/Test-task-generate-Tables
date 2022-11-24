/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../ReactPortal/Modal';
import { addNewCompany } from '../../store/slice/companiesSlice';
import { addNewEmployee } from '../../store/slice/employeesSlice';
import FormToAddCompany from '../CompaniesTable/FormToAddCompany';
import FormToAddEmployee from '../EmployeesTable/FormToAddEmployee';

function ButtonForFormAdd({ status }) {
  const { selectedCompany } = useSelector((store) => store.companies);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [notext, setNoText] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setNoText(false);
  };

  const AddNewCompany = (e) => {
    e.preventDefault();
    const companyName = e.target.companyName.value;
    const companyAdress = e.target.companyAdress.value;
    if (companyName.trim().length === 0 || companyAdress.trim().length === 0) {
      setNoText(true);
      return;
    }
    dispatch(addNewCompany({ companyName, companyAdress }));
    closeModal();
  };

  const AddNewEmployee = (e) => {
    e.preventDefault();
    const employeeName = e.target.employeeName.value;
    const employeeSurename = e.target.employeeSurename.value;
    const employeePosition = e.target.employeePosition.value;
    const companyId = e.target.companyId.value;
    if (
      employeeName.trim().length === 0 ||
      employeeSurename.trim().length === 0 ||
      employeePosition.trim().length === 0
    ) {
      setNoText(true);
      return;
    }
    dispatch(
      addNewEmployee({
        employeeName,
        employeeSurename,
        employeePosition,
        companyId,
      })
    );
    closeModal();
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div>
      {status === 'company' ? (
        <button
          className="modal_opener_button"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Добавить компанию
        </button>
      ) : (
        <button
          type="button"
          className="modal_opener_button"
          onClick={() => setIsOpen(true)}
        >
          Добавить сотрудника
        </button>
      )}
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        {status === 'company' ? (
          <FormToAddCompany AddNewCompany={AddNewCompany} notext={notext} />
        ) : (
          <FormToAddEmployee
            AddNewEmployee={AddNewEmployee}
            selectedCompany={selectedCompany}
            notext={notext}
          />
        )}
      </Modal>
    </div>
  );
}

export default ButtonForFormAdd;
