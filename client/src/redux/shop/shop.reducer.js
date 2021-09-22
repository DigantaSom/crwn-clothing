// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

export const INITIAL_STATE = {
  // collections: SHOP_DATA,
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } =
  ShopActionTypes;

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false,
      };

    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
