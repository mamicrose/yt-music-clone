import logo from "../img/logo.svg";
import resp_logo from "../img/resp_logo.svg";
import pp from "../img/pp.jpg";
import { FaChromecast } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { SlCompass } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Search from "./Search";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
  const [scroll, setScroll] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [width] = useMediaQuery();

  const isMobile = width >= 0 && width < 768 ? true : false;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.pageYOffset > 60 ? setScroll("fixed") : setScroll("");
  };

  const handleShowSearch = useCallback(() => {
    setShowSearch((prevState) => !prevState);
  }, [setShowSearch]);

  return (
    <>
      <div
        className={clsx(
          "w-full p-4 z-10 flex justify-between items-center transition-colors delay-75",
          scroll,
          scroll && "bg-black top-0"
        )}
      >
        {isMobile ? (
          <img src={resp_logo} alt="logo" className="w-9 object-contain" />
        ) : (
          <img src={logo} alt="logo" className="w-20 object-contain" />
        )}

        {showSearch ? (
          <Search onClose={handleShowSearch} />
        ) : (
          <>
            <div className="items-center gap-10 hidden lg:flex">
              <MenuItem label="Ana Sayfa" active />
              <MenuItem label="Keşfet" />
              <MenuItem label="Kitaplık" />
              <MenuItem label="Arayın" icon onClick={handleShowSearch} />
            </div>
            <div className="items-center gap-6 flex lg:hidden text-gray-400">
              <HiOutlineHome size={25} />
              <SlCompass size={25} />
              <MdOutlineLibraryMusic size={25} />
              <button type="button" onClick={handleShowSearch}>
                <IoSearchOutline size={25} />
              </button>
            </div>
          </>
        )}

        <div className="flex items-center gap-5">
          <button type="button">
            <FaChromecast size={24} color="white" />
          </button>
          <img
            src={pp}
            alt="pp"
            className="w-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
