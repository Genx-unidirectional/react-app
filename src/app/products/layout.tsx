"use client";
import ProductsNav from "@/components/products/Products-Nav";
import { ProductProvider } from "@/context/products/productProvider";
import { CartProvider } from "@/context/products/cartProvider";
import { useState } from "react";
import ChangingPanel from "@/components/products/ChangingPanel";
import SideBar from "@/components/products/SideBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen md:h-screen bg-white md:overflow-hidden ">
          <div className=" fixed z-10   bg-white top-0 mx-auto w-full ">
            <ProductsNav />
          </div>
          <div className="flex h-screen mt-20  gap-2  mx-auto md:max-w-4xl  flex-col md:flex-row mb-12">
            <div className="flex-none  hidden overflow-hidden md:w-60 md:block border-r border-slate-500">
              <SideBar />
            </div>
            <div className=" flex-grow  h-full md:overflow-y-auto">
              {children}
            </div>
            <ChangingPanel />
          </div>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}
export default layout;
