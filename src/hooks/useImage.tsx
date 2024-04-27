import { useEffect, useState } from "react";
import { ImageSchema, ImageDataType } from "@/types/image";
type Props = {
  url: string;
  page?: string;
  limit?: string;
};

function UseImage({ url, page = "1", limit = "4" }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ImageDataType>([]);
  useEffect(() => {
    let ignore = false;
    const fetchImage = async () => {
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
    fetchImage();
    return () => {
      ignore = true;
    };
  }, [url, limit, page]);
  return { error, loading, data };
}
export default UseImage;
