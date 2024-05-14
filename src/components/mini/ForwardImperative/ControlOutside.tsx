import { forwardRef, useImperativeHandle, useRef } from "react";

export type RefType = {
  focus: () => void;
};

type Props = {};

const ControlInput = forwardRef<RefType, Props>((RefType, ref) => {
  const refContainer = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      refContainer.current?.focus();
    },
  }));

  return (
    <input
      type="text"
      className="w-full p-1 text-lg rounded-lg bg-white border border-black text-black"
      ref={refContainer}
    />
  );
});

export default ControlInput;
