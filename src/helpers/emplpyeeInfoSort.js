/* eslint-disable no-loop-func */
/* eslint-disable import/prefer-default-export */
export const formListOfEmployeesToSHow = (selectedCompany, allEmployees) => {
  let counter = 0;
  let info = [];
  while (counter < selectedCompany.length) {
    const found = allEmployees.filter(
      (el) => el.companyID === selectedCompany[counter].id
    );
    info = info.concat(found);
    counter += 1;
  }
  return info;
};
