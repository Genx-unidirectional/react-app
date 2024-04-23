import { ProductProvider, CartProvider } from "@/context/products";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <ProductProvider>
        <CartProvider>
          <div className="flex h-screen md:max-w-4xl overflow-hidden flex-col md:flex-row">
            <div className="flex-none hidden md:block"></div>
            <div className=" flex-grow">{children}</div>
          </div>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}
export default layout;
