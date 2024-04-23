import {
  CartItemType,
  ReducerAction,
  UseReducerActionType,
  ProductType,
} from "@/context/products";
import { Trash2 } from "lucide-react";
import { Dispatch } from "react";
type Props = {
  dispatch: Dispatch<ReducerAction>;
  Reducer_Actions: UseReducerActionType;
  item: CartItemType;
  totalPrice: string;
};

function CartListItem({ dispatch, Reducer_Actions, item, totalPrice }: Props) {
  const totalItemPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price * item.quantity);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-80" src={`/images/${item.sku}.jpg`} alt={item.name} />
        <div className="flex flex-col">
          <h3>{item.name}</h3>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <h3>{totalItemPrice}</h3>
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
export default CartListItem;
