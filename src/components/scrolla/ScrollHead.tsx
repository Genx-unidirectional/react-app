import BrandLogo from "../Brand-logo";
import FilterSection from "./FilterSection";
function ScrollHead() {
  return (
    <header
      id="navbar"
      className="w-full z-[100] py-4  px-1 sm:px-4 l flex transition-all delay-500 bg-black justify-between top-0 items-center fixed  border-b border-slate-700  text-white"
    >
      <BrandLogo className="text-white" />
      <div className="fxl:hidden">
        <FilterSection />
      </div>
    </header>
  );
}
export default ScrollHead;
