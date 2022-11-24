/* eslint-disable import/prefer-default-export */
export const handleChangeElemAttribute = (state, action) =>
  state.map((el) =>
    el.id === action.payload.id
      ? { ...el, [action.payload.attribute]: action.payload.text }
      : el
  );
