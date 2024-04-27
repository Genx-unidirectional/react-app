import { useState, lazy, Suspense } from "react";
import Wrapper from "./Wrapper";
const Suggestions = lazy(() => import("@/components/mini/Suggestions"));
function SearchAutoComplete() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(true);
  const handleSuggestion = (item: string) => {
    setQuery(item);
    setShow(false);
  };
  return (
    <Wrapper className="rounded-lg gap-1 flex flex-col items-center justify-center">
      <input
        className="bg-white border border-black rounded-lg p-3 w-full h-full"
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShow(true);
        }}
      />
      {query.length > 0 && show ? (
        <Suspense>
          <Suggestions query={query} handleSuggestions={handleSuggestion} />
        </Suspense>
      ) : null}
    </Wrapper>
  );
}
export default SearchAutoComplete;
