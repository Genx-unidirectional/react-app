import BrandLogo from "../Brand-logo";
import { ModeToggle } from "../ModeToggle";
function SideNav() {
  return (
    <div className="">
      <div className="w-full p-2 h-10 bg- flex justify-between bg-background text-foreground ">
        <BrandLogo />
        <ModeToggle />
      </div>
    </div>
  );
}
export default SideNav;
