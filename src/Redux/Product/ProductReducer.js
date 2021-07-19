import { ProductActionType } from "./ProductActionTypes";

const initialState = {
  productInfo: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionType.ADD_PRODUCT:
      return {
        ...state,
        productInfo: [...state.productInfo, action.payload],
      };
    case ProductActionType.DELETE_PRODUCT:
      return {
        ...state,
        productInfo: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
