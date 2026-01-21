import {
  takeEvery,
  put,
  delay,
  select,
  throttle,
  race,
  fork,
  take,
  cancel,
} from "redux-saga/effects";

/* ---------- WORKER SAGAS ---------- */

export function* addToCartSaga(action) {
  // 1️⃣ read cart state
  const cartItems = yield select(
    state => state.cart.cartItems
  );

  // 2️⃣ prevent duplicates
  const exists = cartItems.some(
    item => item.id === action.payload.id
  );

  if (exists) {
    yield put({ type: "ITEM_ALREADY_IN_CART" });
    return;
  }

  // 3️⃣ race: API vs timeout
  const { success, timeout } = yield race({
    success: delay(1000),
    timeout: delay(3000),
  });

  if (timeout) {
    yield put({ type: "ADD_TO_CART_TIMEOUT" });
    return;
  }

  // 4️⃣ success
  yield put({
    type: "ADD_TO_CART_SUCCESS",
    payload: action.payload,
  });
}

export function* removeFromCartSaga(action) {
  yield delay(500);
  yield put({
    type: "REMOVE_FROM_CART_SUCCESS",
    payload: action.payload,
  });
}



// Manual cancel example 
export function* watchAddToCart() {
  let lastTask;

  while (true) {
    const action = yield take("ADD_TO_CART");

    if (lastTask) {
      yield cancel(lastTask);
    }

    lastTask = yield fork(addToCartSaga, action);
  }
}

/* ---------- ROOT CART SAGA ---------- */

export default function* cartSaga() {
  // throttle add-to-cart
  yield throttle(1000, "ADD_TO_CART", addToCartSaga);

  // normal remove
  yield takeEvery("REMOVE_FROM_CART", removeFromCartSaga);
}
