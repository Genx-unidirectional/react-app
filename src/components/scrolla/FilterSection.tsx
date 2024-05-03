"use client";
import {
  setCategories,
  setPrice,
  setRating,
  setDiscount,
} from "@/redux/features/filterProduct/filterSlice";
import { useDispatch, useSelector } from "@/redux/store";
import { Slider } from "../ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  defaultPriceRange,
  defaultRating,
  discountPercentage,
} from "@/types/scrolla";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
const CATEGORY = [
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
  { value: "fragrances", label: "Fragrances" },
  { value: "skincare", label: "Skincare" },
  { value: "groceries", label: "Groceries" },
  { value: "home-decoration", label: "Home Decoration" },
  { value: "furniture", label: "Furniture" },
  { value: "tops", label: "Tops" },
  { value: "womens-dresses", label: "Womens Dresses" },
  { value: "womens-shoes", label: "Womens Shoes" },
  { value: "mens-shirts", label: "Mens Shirts" },
  { value: "mens-shoes", label: "Mens Shoes" },
  { value: "mens-watches", label: "Mens Watches" },
  { value: "womens-watches", label: "Womens Watches" },
  { value: "womens-bags", label: "Womens Bags" },
  { value: "womens-jewellery", label: "Womens Jewellery" },
  { value: "sunglasses", label: "Sunglasses" },
  { value: "automotive", label: "Automotive" },
  { value: "motorcycle", label: "Motorcycle" },
  { value: "lighting", label: "Lighting" },
];
const PRICE = { isCustom: true, range: defaultPriceRange };
const RATING = { isCustom: true, range: defaultRating };
const DISCOUNT = { isCustom: true, range: discountPercentage };

function FilterSection() {
  const dispatch = useDispatch();
  const { categories, price, rating, discount } = useSelector(
    (state) => state.filters
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Filter className="text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="mt-16">
        <SheetHeader>
          <SheetTitle className="text-center  font-bold mb-4">
            Filter Products
          </SheetTitle>
        </SheetHeader>
        <div className="flex xsm:flex-col xsm:gap-4">
          <div className="flex flex-col w-1/2 xsm:w-full">
            <Label
              className="mb-4 xsm:text-center xsm:w-full text-nowrap leading-6 font-medium text-2xl w-3/4
"
            >
              Choose Category
            </Label>

            <ul className="flex  flex-wrap w-full  ">
              {CATEGORY.map((item, idx) => {
                return (
                  <li
                    className="flex gap-1 w-1/2 items-center mb-2"
                    key={`${idx}${item.label}`}
                  >
                    <input
                      type="checkbox"
                      id={`${item.value}${idx}`}
                      checked={categories.includes(item.value)}
                      onChange={() => dispatch(setCategories(item.value))}
                    />
                    <Label
                      className="md:text-xl"
                      htmlFor={`${item.value}${idx}`}
                    >
                      {item.label}
                    </Label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-1/2 gap-6 xsm:w-full  px-4 flex-col">
            <div className="w-full  flex flex-col gap-2">
              <Label
                className="mb-2 xsm:text-center leading-6 font-medium text-2xl  
             "
              >
                Select Price
              </Label>
              <div className="w-full flex flex-col gap-1">
                <div className="flex font-medium justify-between w-full">
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                      .format(price.range[0])
                      .slice(0, -3)}
                  </p>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                      .format(price.range[1])
                      .slice(0, -3)}
                  </p>
                </div>
                <Slider
                  className="w-full"
                  onValueChange={(range) => {
                    const [min, max] = range;
                    dispatch(setPrice([min, max]));
                  }}
                  min={PRICE.range[0]}
                  defaultValue={PRICE.range}
                  max={PRICE.range[1]}
                  step={5}
                />
              </div>
            </div>
            <div className="w-full   flex flex-col gap-2">
              <Label
                className="mb-2 xsm:text-center leading-6 font-medium text-2xl 
             "
              >
                Select Rating
              </Label>
              <div className="w-full flex  gap-1 flex-col">
                <div className="flex font-medium justify-between w-full">
                  <p>{rating.range[0]}</p>
                  <p>{rating.range[1]}</p>
                </div>
                <Slider
                  className="w-full"
                  onValueChange={(range) => {
                    const [min, max] = range;
                    dispatch(setRating([min, max]));
                  }}
                  min={RATING.range[0]}
                  defaultValue={RATING.range}
                  max={RATING.range[1]}
                />
              </div>
            </div>
            <div className="w-full  flex flex-col gap-2">
              <Label
                className="mb-2 xsm:text-center leading-6 font-medium text-2xl  
             "
              >
                Select Discount
              </Label>
              <div className="w-full flex  gap-1 flex-col">
                <div className="flex font-medium justify-between w-full">
                  <p>{discount.range[0]}</p>
                  <p>{discount.range[1]}</p>
                </div>
                <Slider
                  className="w-full"
                  onValueChange={(range) => {
                    const [min, max] = range;
                    dispatch(setDiscount([min, max]));
                  }}
                  min={DISCOUNT.range[0]}
                  defaultValue={DISCOUNT.range}
                  max={DISCOUNT.range[1]}
                />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FilterSection;
