"use client";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import ImageCard from "./ImageCard";
import axios from "axios";
import { useDispatch, useSelector } from "@/redux/store";
import { getProducts } from "@/redux/features/products/productSlice";
import { progress } from "framer-motion";
function ImageCardList() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsArray);

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
  }, [count]);
  useEffect(() => {
    if (products.length > count * 10) {
      setShow(false);
    }
  }, [products]);

  return (
    <div className="grid relative pb-20  scrollbar-none grid-cols-1 md:grid-cols-4 lg:grid-cols-10 place-content-center py-10  items-center  lg:overflow-y-scroll    gap-4 2xl:grid-cols-12">
      {products?.map((item) => {
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
