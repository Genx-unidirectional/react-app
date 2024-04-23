"use client";
import useProducts from "@/hooks/useProduct";
import useCart from "@/hooks/useCart";
import Product from "@/components/products/Product";
function ProductPage() {
  const { products } = useProducts();
  const { dispatch, cart, Reducer_Actions } = useCart();
  let pageContent = products.map((product) => {
    const inCart = cart.some((cartItem) => cartItem.sku === product.sku);
    return (
      <Product
        key={product.sku}
        dispatch={dispatch}
        Reducer_Actions={Reducer_Actions}
        inCart={inCart}
        product={product}
      />
    );
  });

  return (
    <main className="grid grid-cols-1   sm:grid-cols-2  mb-20 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {pageContent}
    </main>
  );
}
export default ProductPage;
