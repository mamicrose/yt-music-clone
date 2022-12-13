import logo from "../img/logo.svg";
import pp from "../img/pp.jpg";
import { FaChromecast } from "react-icons/fa";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Search from "./Search";

export default function Header() {
  const [scroll, setScroll] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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
        <img src={logo} alt="logo" className="w-20 object-cover" />

        {showSearch ? (
          <Search onClose={handleShowSearch} />
        ) : (
          <div className="flex items-center gap-10">
            <MenuItem label="Ana Sayfa" active />
            <MenuItem label="Keşfet" />
            <MenuItem label="Kitaplık" />
            <MenuItem label="Arayın" icon onPress={handleShowSearch} />
          </div>
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
