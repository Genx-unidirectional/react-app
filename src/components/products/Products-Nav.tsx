"use client";
import { ShoppingCart, WatchIcon } from "lucide-react";
import BrandLogo from "../Brand-logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
function ProductsNav() {
  const pathName = usePathname();
  return (
    <nav className="border-b flex justify-between border-slate-400">
      <BrandLogo />
      {pathName === "/products" ? (
        <Link href={"/products/cart"}>
          <ShoppingCart className="w-8 text-blue-600 h-8" />
        </Link>
      ) : (
        <Link href={"/products"}>
          <WatchIcon className="w-8 h-8 text-blue-500" />
        </Link>
      )}
    </nav>
  );
}
export default ProductsNav;
