"use client";
import CartListItem from "@/components/products/CartListItem";
import useCart from "@/hooks/useCart";
function CartPage() {
  const { dispatch, cart, Reducer_Actions, totalPrice, totalProducts } =
    useCart();
  const pageContent = cart.map((item) => {
    return (
      <CartListItem
        key={item.sku}
        item={item}
        dispatch={dispatch}
        Reducer_Actions={Reducer_Actions}
        totalPrice={totalPrice}
      />
    );
  });
  return (
    <div className="flex w-full flex-col my-12 p-3 md:p-6 gap-2">
      {pageContent.length > 0 ? (
        pageContent
      ) : (
        <h2 className="text-black">Click on add to add items in cart</h2>
      )}{" "}
    </div>
  );
}
export default CartPage;
