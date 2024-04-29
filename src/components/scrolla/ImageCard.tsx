"use client";

import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Rating from "./Rating";
type Props = {
  title: string;
  imageUrl: string;
  category: string;
  stock: number;
  price: number;
  brand: string;
  rating: number;
};
export function ImageCard({
  imageUrl,
  category,
  price,
  stock,
  brand,
  title,
  rating,
}: Props) {
  return (
    <>
      <div className="col-span-1 csm:mx-auto csm:w-[365px] md:col-span-2 2xl:col-span-4 place-content-center lg:col-span-5 flex max-md:mx-auto  justify-center items-center">
        <div className="  md:h-[412px] shadow-lg shadow-slate-700 bg-white  text-black  h-[359px] md:w-80 2xl:w-96 w-[80%] rounded-lg flex flex-col  overflow-hidden items-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">{category}</p>
            <p className="font-normal text-sm">{brand}</p>
          </DirectionAwareHover>
          <div className="  flex items-start flex-col justify-between p-2  h-32 w-full ">
            <div className="flex flex-col w-full  items-start">
              <h3 className="text-xl font-medium leading-4">{title} </h3>
              <p className="">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(price)}
              </p>
            </div>
            <p className="text-slate-600">Only {stock} left</p>
            <Rating num={rating} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
