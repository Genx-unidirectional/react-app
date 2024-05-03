"use client";
import {
  setCategories,
  setPrice,
  setRating,
  setDiscount,
} from "@/redux/features/filterProduct/filterSlice";
import { useDispatch, useSelector } from "@/redux/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import {
  defaultPriceRange,
  defaultRating,
  discountPercentage,
} from "@/types/scrolla";

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
function SideScroll() {
  const dispatch = useDispatch();
  const { categories, price, rating, discount } = useSelector(
    (state) => state.filters
  );
  return (
    <div className=" p-2  fixed  top-[72.8px] w-72  text-white ">
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-xl">
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex  flex-wrap w-full  ">
                {CATEGORY.map((item, idx) => {
                  return (
                    <li
                      className="flex gap-1 w-1/2 items-center mb-1"
                      key={`${idx}${item.label}`}
                    >
                      <input
                        type="checkbox"
                        id={`${item.value}${idx}`}
                        checked={categories.includes(item.value)}
                        onChange={() => dispatch(setCategories(item.value))}
                      />
                      <Label
                        className="text-md"
                        htmlFor={`${item.value}${idx}`}
                      >
                        {item.label}
                      </Label>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex w-full gap-6   flex-col">
          <div className="w-full  flex flex-col mt-4 gap-2">
            <Label
              className="mb-2  leading-6 font-medium text-xl  
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
          <hr className="bg-white w-full" />
          <div className="w-full  flex flex-col  gap-2">
            <Label
              className="mb-2  leading-6 font-medium text-xl  
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
            <hr className="bg-white w-full" />
            <div className="w-full  flex flex-col  gap-2">
              <Label
                className="mb-2  leading-6 font-medium text-xl  
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
      </div>
    </div>
  );
}
export default SideScroll;
