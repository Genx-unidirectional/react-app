import { cn } from "@/lib/utils";
import { lusitana } from "./font";
import { AtomIcon } from "lucide-react";
function BrandLogo() {
  return (
    <div className={cn(lusitana.className, "flex items-center")}>
      <AtomIcon className="w-8 h-8" />
      <p className="text-4xl font-bold">Gex</p>
    </div>
  );
}
export default BrandLogo;
