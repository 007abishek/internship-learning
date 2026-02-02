import {useAppDispatch,useAppSelector} from "./reduxHooks";
import { addToCart, removeFromCart} from "../features/cart/cartSlice";
import type { Product } from "../features/products/types";

export function useCart(){
    const items=useAppSelector(state=>state.cart.items);
    const dispatch=useAppDispatch();

    return {
        items,
        add:(product: Product) =>dispatch(addToCart(product)),
        remove:(id: number) => dispatch(removeFromCart(id)),
    };
}