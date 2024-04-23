import { ProductProvider, CartProvider } from "@/context/products";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <ProductProvider>
        <CartProvider>
          <div className="">
            <div></div>
            <div>{children}</div>
          </div>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}
export default layout;
