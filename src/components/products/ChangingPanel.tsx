import useCart from "@/hooks/useCart";

type Props = {};
function ChangingPanel() {
  const { totalPrice, totalProducts, dispatch, Reducer_Actions } = useCart();
  return (
    <div className="  flex border md:hidden border-black w-full bg-black md: text-white p-2 rounded-lg fixed z-10  bottom-4  justify-between  items-center ">
      <div className="flex items-center gap-4">
        <p className="font-medium">
          {" "}
          Total price : <span className="text-indigo-300">
            {" "}
            {totalPrice}
          </span>{" "}
        </p>
        <p className="font-medium">
          {" "}
          Total product :{" "}
          <span className="text-indigo-300"> {totalProducts}</span>{" "}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch({ type: Reducer_Actions.SUBMIT });
        }}
        className="p-1 bg-white text-black  rounded-lg font-bold"
      >
        Buy
      </button>
    </div>
  );
}
export default ChangingPanel;
