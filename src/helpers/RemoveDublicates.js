/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export const removeDublicates = (newArr, duplicates, all, selected) => {
  if (selected.length === 1) {
    for (let i = 0; i < all.length; i += 1) {
      for (let j = 0; j < selected.length; j += 1) {
        if (!_.isEqual(all[i], selected[j])) {
          newArr.push(all[i]);
        }
      }
    }
    duplicates = newArr;
  } else {
    for (let i = 0; i < all.length; i += 1) {
      for (let j = 0; j < selected.length; j += 1) {
        if (!_.isEqual(all[i], selected[j])) {
          newArr.push(all[i]);
        }
      }
    }
    duplicates = newArr.filter((e, index, arr) => arr.indexOf(e) !== index);
  }
  return duplicates;
};

export const createNewItemList = (all, selected) => {
  if (!selected.length) {
    return;
  }
  const newEmpl = [];
  let duplic;
  const duplicates = removeDublicates(newEmpl, duplic, all, selected);
  return duplicates;
};
