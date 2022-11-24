/* eslint-disable import/prefer-default-export */
export const handleFilter = (state, action) =>
  state.filter((el) => el.id !== action.payload.id);
