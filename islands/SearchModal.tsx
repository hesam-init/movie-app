import { useEffect, useState } from "preact/hooks";
import { Search } from "@/types/searchType.ts";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/search.tsx";
import Modal from "../components/Modal.tsx";
import { useDisclosure } from "@/hooks/useDisclosure.tsx";

function SearchModal() {
  const [movieName, setMovieName] = useState<string>("");
  const [moviesList, setMoviesList] = useState<Search>({});

  const [opened, { open, close }] = useDisclosure(false);

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
    <div className="px-3 mr-auto">
      <div className="relative">
        {/* icon */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          <IconSearch size={20} />
        </div>

        {/* modal */}
        <Modal position="center" opened={opened} onClose={close}>
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
