import { testSaga } from "redux-saga-test-plan";
import cartSaga, {
  addToCartSaga,
  removeFromCartSaga,
} from "../cartSaga";

describe("cartSaga watcher", () => {
  test("should watch ADD_TO_CART and REMOVE_FROM_CART actions", () => {
    testSaga(cartSaga)
      .next()
      .takeEvery("ADD_TO_CART", addToCartSaga)
      .next()
      .takeEvery("REMOVE_FROM_CART", removeFromCartSaga);
      // ❌ NO .done()
  });
});
