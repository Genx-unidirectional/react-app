import UseImage from "@/hooks/useImage";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageSchema, ImageDataType } from "@/types/image";
type Props = {
  url: string;
  page?: string;
  limit?: string;
};
function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ImageDataType>([]);
  useEffect(() => {
    let ignore = false;
    const fetchImage = async (url: string, page: string, limit: string) => {
      try {
        const result = await fetch(`${url}?page=${page}&limit=${limit}`);
        if (!result.ok) {
          setLoading(false);
          setError(false);
          throw new Error("Error while data fetching");
        }
        if (ignore) {
          return;
        }
        setLoading(false);
        const parsedData = await result.json();
        // console.log(parsedData);
        ImageSchema.parse(parsedData);
        setData(parsedData);
      } catch (err) {
        // setError(true)
        console.log(err);
      }
    };
    fetchImage("https://picsum.photos/v2/list", "1", "4");
    return () => {
      ignore = true;
    };
  }, []);
  const handleLeft = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      return;
    }
  };
  const handleRight = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      return;
    }
  };
  return (
    <Wrapper className="relative  rounded-lg overflow-hidden">
      <div className="w-full bg-black overflow-hidden h-[265.14px] rounded-lg ">
        {data.map((item) => {
          if (Number(item.id) !== index) {
            return;
          }
          console.log(item.url);
          return (
            <img
              className="w-full"
              key={item.id}
              src={item.download_url}
              alt="image"
            />
          );
        })}
      </div>
      <div className="absolute left-0 gap-4 w-full z-20 top-[42%] flex justify-between items-center ">
        <button onClick={() => handleLeft()}>
          <ChevronLeft className="w-10 h-10 text-white " />
        </button>
        <button onClick={() => handleRight()}>
          <ChevronRight className="w-10 h-10 text-white " />
        </button>
      </div>
      <div className="absolute w-full flex gap-2 justify-center items-center z-10 bottom-5">
        {data.map((item) => {
          return (
            <button
              onClick={() => setIndex(Number(item.id))}
              key={`${item.id}dot`}
              className={cn("w-4 h-4 bg-slate-600 rounded-full", {
                "bg-slate-50": index === Number(item.id),
              })}
            ></button>
          );
        })}
      </div>
    </Wrapper>
  );
}
export default ImageSlider;
