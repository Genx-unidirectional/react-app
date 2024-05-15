import { TreeDataType } from "@/config/mini";
import RecursiveTree from "./RecursiveTree";
import { useState } from "react";
function TreeElement({ name, childrens }: TreeDataType) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <h2 className=" font-medium">
        {name}
        {childrens && childrens.length > 0 ? (
          isOpen ? (
            <span
              className="ml-2 cursor-pointer text-lg"
              onClick={() => {
                if (childrens && childrens?.length > 0) {
                  setIsOpen(false);
                }
              }}
            >
              -
            </span>
          ) : (
            <span
              className="ml-2 cursor-pointer text-lg"
              onClick={() => {
                if (childrens && childrens?.length > 0) {
                  setIsOpen(true);
                }
              }}
            >
              +
            </span>
          )
        ) : null}
      </h2>
      {childrens && childrens.length > 0 && isOpen ? (
        <RecursiveTree options={childrens} />
      ) : null}
    </li>
  );
}
export default TreeElement;
