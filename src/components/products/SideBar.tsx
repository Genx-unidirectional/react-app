import useCart from "@/hooks/useCart";

function SideBar() {
  const { totalPrice, totalProducts, dispatch, Reducer_Actions } = useCart();
  return (
    <div className="h-full flex flex-col p-3 items-start justify-start">
      <p>Total Price : {totalPrice}</p>
      <p>Total Price : {totalProducts}</p>
      <button
        onClick={() => {
          dispatch({ type: Reducer_Actions.SUBMIT });
        }}
        className="bg-black text-white rounded-lg w-full p-1 font-medium"
      >
        {" "}
        buy
      </button>
    </div>
  );
}
export default SideBar;
