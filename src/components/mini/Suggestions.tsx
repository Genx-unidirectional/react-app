import UseFetch from "@/hooks/useFetch";

type Props = {
  query: string;
  handleSuggestions: (item: string) => void;
};
function Suggestions({ query, handleSuggestions }: Props) {
  const { data, error, loading } = UseFetch("https://dummyjson.com/products");
  const filteredData = data.products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <ul className="w-full overflow-hidden h-40 overflow-y-scroll scrollbar-none">
      {loading ? (
        <p className="text-black w-full h-full flex justify-center items-center">
          loading
        </p>
      ) : (
        filteredData.map((item) => {
          return (
            <li
              onClick={(e) => handleSuggestions(item.title)}
              className="w-full hover:bg-slate-300 text-slate-800 text-left cursor-pointer rounded-lg p-2"
            >
              {item.title}
            </li>
          );
        })
      )}
    </ul>
  );
}
export default Suggestions;
