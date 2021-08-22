import { takeLatest, all, call, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
import { clearCart, setCartFromFirebase } from './cart.actions';

import UserActionTypes from '../user/user.types';
import CartActionTypes from '../cart/cart.types';

function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (err) {
      console.log('Error while updating cart in firebase: ', err);
    }
  }
}

function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}

// ------

function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartInFirebase,
  );
}

function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

// Root cart saga
export function* cartSagas() {
  yield all([call(onCartChange), call(onUserSignIn), call(onSignOutSuccess)]);
}
