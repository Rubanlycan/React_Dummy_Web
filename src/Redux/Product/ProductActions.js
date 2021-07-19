import { ProductActionType } from "./ProductActionTypes";

export const addNewProduct = (formData) => {
  return {
    type: ProductActionType.ADD_PRODUCT,
    payload: formData,
  };
};

export const deleteProduct = (index, productInfo) => {
  let array = productInfo;
  productInfo.splice(index, 1);
  return {
    type: ProductActionType.DELETE_PRODUCT,
    payload: array,
  };
};
