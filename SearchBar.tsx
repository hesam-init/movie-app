import { useEffect, useState } from "preact/hooks";
import { Search } from "../types/searchType.ts";

function SearchBar() {
  const [movieName, setMovieName] = useState<string>("");
  const [moviesList, setMoviesList] = useState<Search>({});

  useEffect(() => {
    if (movieName) {
      fetch(`api/search/${movieName}`).then((res) => res.json()).then(
        (data) => {
          console.log(data);
        },
      );
    }
  }, [movieName]);

  return (
    <div className="w-full px-3">
      <h1 className="text-center">جستجوی فیلم و سریال</h1>
      <input
        onInput={(e) => {
          setMovieName(e.currentTarget.value);
        }}
        className="border search-input w-full placeholder:text-center mt-3 bg-[#1A1C22] px-3 py-2 rounded-lg shadow-lg"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
