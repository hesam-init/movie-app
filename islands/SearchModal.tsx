import { useEffect, useRef, useState } from "preact/hooks";
import { Search } from "@/types/searchType.ts";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/search.tsx";
import Modal from "@/components/Modal.tsx";
import { useDisclosure } from "@/hooks/useDisclosure.tsx";
import useDebounce from "@/hooks/useDebounce.ts";
import { JSX, Ref } from "preact";
import { SearchSlide } from "@/components/Slide.tsx";

function SearchModal() {
  const inputRef = useRef<HTMLInputElement>();
  const [movieName, setMovieName] = useState<string>("");
  const [moviesList, setMoviesList] = useState<Search>({});
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [opened, { open, close }] = useDisclosure(false);

  const debouncedValue = useDebounce<string>(movieName, 500);

  const handleChange = (
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    setMovieName(currentTarget.value);
  };

  // handling autofocus
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [opened]);

  // handling data request
  useEffect(() => {
    if (movieName) {
      setMoviesList({});
      setIsSearching(true);
      fetch(`api/search/${movieName}`).then((res) => res.json()).then(
        (data) => {
          setMoviesList(data);
          console.log(data);
        },
      ).finally(() => {
        setIsSearching(false);
      });
    }
  }, [debouncedValue]);

  return (
    <div className="px-3 mr-auto">
      <div className="relative">
        {/* icon */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          <IconSearch size={20} />
        </div>

        {/* modal */}
        <Modal position="center" opened={opened} onClose={close}>
          <div className="flex flex-col justify-between h-full">
            {/* search input */}
            <div
              onClick={() => {
                if (inputRef && inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              className="cursor-text block px-2 pt-1 border-b-2 pb-1"
            >
              <div className="relative">
                <div className="absolute top-1/2 left-2 -translate-y-1/2">
                  <IconSearch color="black" size={20} />
                </div>
                <input
                  ref={inputRef as Ref<HTMLInputElement>}
                  onInput={handleChange}
                  placeholder="جستجو"
                  className="px-3 outline-none search-input-modal py-1 w-full"
                  type="text"
                />
              </div>
            </div>

            {/* loading */}
            <div className={`${isSearching && "mt-5"}`}>
              {isSearching && (
                <h1 className="text-black text-center">
                  searching...
                </h1>
              )}
            </div>

            {/* posters list */}
            <div className="overflow-y-auto p-3 flex-1 border-pink-500">
              <div className="grid grid-cols-3 gap-3">
                {moviesList.posters?.map((data) => (
                  <SearchSlide
                    type={data.type}
                    image={data.image}
                    title={data.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>

        {/* search button */}
        <input
          onClick={open}
          placeholder="جستجو"
          className="cursor-pointer px-3 outline-none search-input py-1 w-full placeholder:text-center bg-gray-800 rounded-lg shadow-lg"
          type="text"
        />
      </div>
    </div>
  );
}

export default SearchModal;
