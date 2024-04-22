import React, { useMemo, useReducer, createContext } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type UseReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

//reducer function
const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("No payload provided in 'Add' action");
      }
      const { sku, name, price } = action.payload;
      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      const itemExists = state.cart.find((item) => item.sku === sku);
      const newQty = itemExists ? itemExists.quantity + 1 : 1;
      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity: newQty }],
      };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("Payload is missing in 'Quantity' action");
      }
      const { sku, quantity } = action.payload;
      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      const itemExists = state.cart.find((item) => item.sku === sku);
      if (!itemExists) {
        throw new Error("Item must exists in order to increase it's quantity");
      }
      return { ...state, cart: [...filteredCart, { ...itemExists, quantity }] };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("Payload is missing in 'Remove' action");
      }
      const { sku } = action.payload;
      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default: {
      throw new Error("Invalid action type ");
    }
  }
};

//creating custom hook to provide state, dispatch, totalPrice, totalProducts

function useCartMaker(initCartState: CartStateType) {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const Reducer_Actions: UseReducerActionType = useMemo(
    () => REDUCER_ACTION_TYPE,
    []
  );
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((acc, curr) => curr.price * curr.quantity + acc, 0)
  );
  const totalProducts = state.cart.reduce(
    (acc, curr) => curr.quantity + acc,
    0
  );
  const cart = state.cart.sort((a, b) => {
    let aItem = Number(a.sku.slice(-4));
    let bItem = Number(a.sku.slice(-4));
    return aItem - bItem;
  });

  return { dispatch, cart, totalPrice, totalProducts, Reducer_Actions };
}

type CartContextState = ReturnType<typeof useCartMaker>;
const initContextState: CartContextState = {
  dispatch: () => {},
  totalPrice: "",
  totalProducts: 0,
  cart: [],
  Reducer_Actions: REDUCER_ACTION_TYPE,
};
//context
const CartContext = createContext<CartContextState>(initContextState);
//context provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartContext.Provider value={useCartMaker(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};
