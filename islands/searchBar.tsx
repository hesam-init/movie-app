function SearchBar() {
  return (
    <div className="w-full px-3">
      <h1 className="text-center">جستجوی فیلم و سریال</h1>
      <input
        className="search-input w-full placeholder:text-center mt-3 bg-[#1A1C22] px-3 py-1 rounded-lg shadow-lg"
        placeholder="جستجوی فیلم و سریال ..."
        type="text"
      />
    </div>
  );
}

export default SearchBar;
