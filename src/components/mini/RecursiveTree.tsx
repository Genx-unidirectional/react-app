import { TreeDataType } from "@/config/mini";
import TreeElement from "./TreeElement";

type Props = {
  options: TreeDataType[];
};
function RecursiveTree({ options }: Props) {
  return (
    <ul className="ml-10">
      {options.map((option, idx) => {
        return (
          <TreeElement
            key={`${idx}recursivetree`}
            name={option.name}
            childrens={option.childrens}
          />
        );
      })}
    </ul>
  );
}
export default RecursiveTree;
