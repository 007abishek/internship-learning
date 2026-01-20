import { delay, put } from "redux-saga/effects";
import {
  addToCartSaga,
  removeFromCartSaga,
} from "../cartSaga";

describe("Cart Saga Generator Tests", () => {
  test("addToCartSaga should delay then dispatch success", () => {
    const product = { id: 1, name: "Laptop" };
    const action = { payload: product };

    const gen = addToCartSaga(action);

    expect(gen.next().value).toEqual(delay(1000));

    expect(gen.next().value).toEqual(
      put({
        type: "ADD_TO_CART_SUCCESS",
        payload: product,
      })
    );

    expect(gen.next().done).toBe(true);
  });

  test("removeFromCartSaga should delay then dispatch success", () => {
    const productId = 1;
    const action = { payload: productId };

    const gen = removeFromCartSaga(action);

    expect(gen.next().value).toEqual(delay(500));

    expect(gen.next().value).toEqual(
      put({
        type: "REMOVE_FROM_CART_SUCCESS",
        payload: productId,
      })
    );

    expect(gen.next().done).toBe(true);
  });
});
