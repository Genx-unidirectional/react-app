import RecursiveTree from "./RecursiveTree";
import Wrapper from "./Wrapper";
import { TREEDATA } from "@/config/mini";
function TreeHolder() {
  return (
    <Wrapper className="h-[300px] flex justify-start items-center">
      <RecursiveTree options={TREEDATA} />
    </Wrapper>
  );
}
export default TreeHolder;
