import {
  CartItemType,
  ReducerAction,
  UseReducerActionType,
  ProductType,
} from "@/context/products";
import { Trash2 } from "lucide-react";
import { Dispatch, memo, useState } from "react";
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
  const [count, setCount] = useState(item.quantity);
  const handleClick = () => {
    dispatch({
      type: Reducer_Actions.QUANTITY,
      payload: { ...item, quantity: count },
    });
  };
  return (
    <div className="flex justify-between p-2 shadow-lg rounded-lg shadow-slate-400 items-center">
      <div className="flex items-center gap-2">
        <img
          className="sm:w-40 w-36 rounded-lg"
          src={`/images/${item.sku}.jpg`}
          alt={item.name}
        />
        <div className="flex flex-col justify-evenly items-start  gap-10">
          <div>
            <h3 className="font-medium md:text-xl ">{item.name}</h3>
            <p className="text-slate-600">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price)}
            </p>
          </div>
          <div className="flex bg-yellow-300 font-medium border gap-3 px-1 rounded-l-lg rounded-r-lg border-slate-300">
            <button
              className=""
              onClick={() => {
                setCount((prev) => {
                  if (prev < 1) {
                    return 0;
                  } else {
                    return prev - 1;
                  }
                });
                handleClick();
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className=""
              onClick={() => {
                setCount((prev) => {
                  if (prev === 20) {
                    return 20;
                  } else {
                    return prev + 1;
                  }
                });
                handleClick();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-end  gap-16">
        <h3 className="font-medium">{totalItemPrice}</h3>
        <button
          onClick={() => {
            dispatch({ type: Reducer_Actions.REMOVE, payload: { ...item } });
          }}
        >
          <Trash2 className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

function arePropsEqual({ item: prevItem }: Props, { item: newItem }: Props) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] === newItem[key as keyof CartItemType]
    );
  });
}

const MemoisedCartListItem = memo<typeof CartListItem>(
  CartListItem,
  arePropsEqual
);
export default MemoisedCartListItem;
