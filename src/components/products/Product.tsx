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
    <div className="flex flex-col hover:scale-[1.012] rounded-lg mb-4 shadow-sm shadow-black p-2 w-5/6 md:w-full gap-2  mx-auto   ">
      <div className=" w-full overflow-hidden">
        <img
          className="mx-auto  rounded-lg"
          src={`/images/${product.sku}.jpg`}
          alt={product.name}
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-medium">{product.name}</h3>
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
