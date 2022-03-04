import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      {/* Left: Brand */}
      <div className="relative flex h-5 cursor-pointer my-auto">
        <Image
          src="/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle: Searchbar */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input
          className="ml-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search..."
        />
        <SearchIcon className="hidden md:inline-flex mx-2 h-8 bg-blue-400 p-2 cursor-pointer text-white rounded-full" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
