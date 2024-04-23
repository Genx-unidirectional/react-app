import { Dispatch, memo } from "react";
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
import { BookCheck } from "lucide-react";

function Product({ inCart, dispatch, Reducer_Actions, product }: Props) {
  return (
    <div className="flex flex-col relative hover:scale-[1.012] rounded-lg mb-4 shadow-lg shadow-slate-500 p-2 w-5/6 md:w-full gap-2 justify-between mx-auto   ">
      <div className="flex flex-col gap-2">
        <div className=" w-full overflow-hidden">
          <img
            className="mx-auto w-full rounded-lg"
            src={`/images/${product.sku}.jpg`}
            alt={product.name}
          />
        </div>
        <div className="flex justify-between items-baseline">
          <div className=" flex flex-col">
            <h3 className="text-2xl  font-medium">{product.name}</h3>

            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </p>
          </div>
          {inCart ? (
            <p className="text-green-500 text-nowrap md:text-sm font-bold flex ">
              <BookCheck />
              In Cart
            </p>
          ) : null}
        </div>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: Reducer_Actions.ADD,
            payload: { ...product, quantity: 1 },
          })
        }
        className="bg-black text-white p-2 rounded-lg  "
      >
        Add To Cart
      </button>
    </div>
  );
}

function arePropsEqual(
  { product: prevProduct, inCart: prevInCart }: Props,
  { product: newProduct, inCart: newInCart }: Props
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        newProduct[key as keyof ProductType]
      );
    }) && prevInCart === newInCart
  );
}

const MemoisedProduct = memo<typeof Product>(Product, arePropsEqual);
export default MemoisedProduct;
