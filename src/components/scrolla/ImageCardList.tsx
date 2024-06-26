"use client";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import ImageCard from "./ImageCard";
import axios from "axios";
import { useDispatch, useSelector } from "@/redux/store";
import { getProducts } from "@/redux/features/products/productSlice";
import { progress } from "framer-motion";
import { ProductState } from "@/redux/features/products/productSlice";
import { FilterStateType } from "@/redux/features/filterProduct/filterSlice";

function filterProducts(
  products: ProductState["products"],
  filters: FilterStateType
): ProductState["products"] {
  return products.filter((product) => {
    if (!filters.categories.includes(product.category)) {
      return false;
    }
    if (
      !(filters.price.range[0] <= product.price) ||
      !(product.price <= filters.price.range[1])
    ) {
      return false;
    }
    if (
      !(filters.rating.range[0] <= Number(product.rating.toFixed(0))) ||
      !(Number(product.rating.toFixed(0)) <= filters.rating.range[1])
    ) {
      return false;
    }
    if (
      !(
        filters.discount.range[0] <=
        Number(product.discountPercentage.toFixed(0))
      ) ||
      !(
        Number(product.discountPercentage.toFixed(0)) <=
        filters.discount.range[1]
      )
    ) {
      return false;
    }
    return true;
  });
}
function ImageCardList() {
  const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state) =>
      // filterProducts(state.productsArray.products, state.filters)
      state.productsArray
  );

  const { categories, price, rating, discount } = useSelector(
    (state) => state.filters
  );
  const filteredItems = filterProducts(products, {
    categories,
    price,
    rating,
    discount,
  });
  // const [data, setData] = useState<ImageDataType>([]);
  // const fetchUser = async () => {
  //   try {
  //     const result = await axios.get(
  //       `https://dummyjson.com/products?limit=10&skip=${
  //         counter === 0 ? 0 : counter * 10
  //       }`
  //     );
  //     ImageDataSchema.parse(result.data.products);
  //     setData((prev) => [...prev, ...result.data.products]);
  //     setShow(false);
  //   } catch {
  //     console.log("error while fetching");
  //   }
  // };
  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    setShow(true);
    // fetchUser();
    dispatch(getProducts(count));
  };

  useEffect(() => {
    dispatch(getProducts(count));
    setCount(count + 1);
  }, []);
  useEffect(() => {
    if (products.length === count * 10) {
      setShow(false);
    }
  }, [products]);

  return (
    <div className="grid relative pb-20  scrollbar-none grid-cols-1 md:grid-cols-4 lg:grid-cols-10 place-content-center py-10  items-center     gap-4 2xl:grid-cols-12">
      {filteredItems?.map((item) => {
        return (
          <ImageCard
            key={`${item.thumbnail}`}
            imageUrl={item.images[0]}
            price={item.price}
            category={item.category}
            stock={item.stock}
            brand={item.brand}
            title={item.title}
            rating={item.rating}
            discountPercentage={item.discountPercentage}
          />
        );
      })}
      {show &&
        Array(10)
          .fill(null)
          .map((item, idx) => <CardSkeleton key={`${idx}prod`} />)}
      <div className="absolute bottom-2 w-full flex justify-center items-center">
        <button
          onClick={handleClick}
          disabled={count === 10}
          className="inline-flex h-12 disabled:opacity-65 z-50 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
export default ImageCardList;
