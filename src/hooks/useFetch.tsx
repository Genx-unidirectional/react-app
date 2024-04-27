import { useEffect, useState } from "react";
import { ProductSchema, ProductSchemaType } from "@/types/SearchAutoComplete";
type Props = {
  url: string;
  options?: { [index: string]: string };
};

export default function UseFetch(
  url: Props["url"],
  options: Props["options"] = {}
) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProductSchemaType>();

  useEffect(() => {
    const abortControl = new AbortController();
    const fetchUser = async () => {
      try {
        const result = await fetch(url, { signal: abortControl.signal });
        if (!result.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something happen while fetching");
        }
        const data = await ProductSchema.safeParseAsync(result.json());
        setLoading(false);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    setLoading(false);
    return () => {
      abortControl.abort();
    };
  }, [url]);
  return { data, loading, error };
}
