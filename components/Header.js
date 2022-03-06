import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
// react-date-range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header({ placeholder }) {
  // State
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  // Next Router
  const router = useRouter();

  // Handlers
  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const resetInput = (e) => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "Selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      {/* Left: Brand */}
      <div className="relative flex h-5 my-auto">
        <Image
          src="/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt=""
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Middle: Searchbar */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="ml-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search.."}
        />
        <SearchIcon className="hidden md:inline-flex mx-2 h-8 bg-blue-400 p-2 cursor-pointer text-white rounded-full" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end text-gray-500">
        <div className="flex space-x-2 items-center border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Search Controls */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={(ranges) => handleSelect(ranges)}
          />
          <div className="px-4 mb-4">
            <div className=" flex items-center border-b pb-2">
              <h2 className="text-xl flex-grow font-semibold">
                Number of guests
              </h2>
              <UserIcon className="h-5" />
              <input
                type="number"
                min={1}
                max={6}
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="w-12 pl-2 text-lg outline-none"
              />
            </div>
          </div>
          <div className="px-4 flex space-x-1">
            <button
              onClick={resetInput}
              className="flex-grow bg-red-400 py-1 rounded-md text-white"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow bg-blue-500 py-1 rounded-md font-semibold text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
