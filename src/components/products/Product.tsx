import { Dispatch } from "react";
import {
  ReducerAction,
  UseReducerActionType,
  ProductType,
} from "@/context/products";
type Props = {
  inCart: boolean;
  dispatch: Dispatch<ReducerAction>;
  Reducer_Actions: UseReducerActionType;
  product: ProductType;
};

function Product({ inCart, dispatch, Reducer_Actions, product }: Props) {
  return (
    <div className="flex flex-col">
      <img src={`/images/${product.sku}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      {inCart ? <p>In Cart</p> : null}
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <button
        onClick={() =>
          dispatch({
            type: Reducer_Actions.ADD,
            payload: { ...product, quantity: 1 },
          })
        }
        className="bg-black text-white p-2 rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
}
export default Product;
