import { useEffect, useRef } from "react";
import Wrapper from "./Wrapper";

function Model() {
  const refContainer = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const handleChange = (e: MouseEvent) => {
      const dialogDimension = refContainer.current?.getBoundingClientRect();
      if (
        e.clientX < dialogDimension?.left! ||
        e.clientX > dialogDimension?.right! ||
        e.clientY < dialogDimension?.top! ||
        e.clientY > dialogDimension?.bottom!
      ) {
        refContainer?.current?.close();
      }
    };
    refContainer.current?.addEventListener("click", handleChange);
    return () => {
      refContainer?.current?.removeEventListener("click", handleChange);
    };
  }, []);
  return (
    <Wrapper className="h-12 flex justify-center items-center animate-animate-color">
      <button
        className="text-2xl w-full h-full "
        onClick={() => {
          refContainer.current?.showModal();
        }}
      >
        Click
      </button>
      <dialog
        className="bg-white rounded-lg border border-black p-3 text-black"
        ref={refContainer}
      >
        <form
          action=""
          className="w-full gap-4 flex font-medium flex-col items-start h-full"
          method="dialog"
        >
          <label htmlFor="modelInput" className="text-2xl ">
            Can you fix all things
          </label>
          <input
            type="text"
            id="modelInput"
            className="p-2 border w-full border-black rounded-lg"
            placeholder="give me binary answer"
          />
          <div className="w-full justify-between gap-4 flex">
            <button
              formMethod="dialog"
              type="submit"
              className="bg-black w-1/2 text-white rounded-lg p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black w-1/2 text-white rounded-lg p-2"
            >
              Conform
            </button>
          </div>
        </form>
      </dialog>
    </Wrapper>
  );
}
export default Model;
