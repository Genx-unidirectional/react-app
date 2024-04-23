"use client";
import { ShoppingCart, WatchIcon } from "lucide-react";
import BrandLogo from "../Brand-logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useCart from "@/hooks/useCart";
function ProductsNav() {
  const { totalProducts } = useCart();
  const pathName = usePathname();
  return (
    <nav className="border-b p-2 md:max-w-4xl items-center mx-auto flex justify-between border-slate-400">
      <BrandLogo />
      {pathName === "/products" ? (
        <Link href={"/products/cart"} className="relative">
          <ShoppingCart className="w-8 text-blue-600 h-8" />
          <div className="rounded-full absolute -top-2 w-4 h-4 flex justify-center text-xs -right-1 items-center text-black bg-yellow-200 font-medium ">
            {totalProducts}
          </div>
        </Link>
      ) : (
        <Link href={"/products"} className="relative">
          <WatchIcon className="w-8 h-8 text-blue-500" />
        </Link>
      )}
    </nav>
  );
}
export default ProductsNav;
