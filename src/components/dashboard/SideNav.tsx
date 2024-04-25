import BrandLogo from "../Brand-logo";
import { ModeToggle } from "../ModeToggle";
function SideNav() {
  return (
    <div className="py-2 px-2 border-b border-slate-400">
      <div className="w-full  items-center h-10 bg- flex justify-between bg-background text-foreground ">
        <BrandLogo />
        <ModeToggle />
      </div>
    </div>
  );
}
export default SideNav;
