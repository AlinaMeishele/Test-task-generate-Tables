/* eslint-disable import/prefer-default-export */
export const addToCheckedList = (state, action) => {
  state.push(action.payload.item);
};
