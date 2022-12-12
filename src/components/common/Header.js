import logo from "./img/logo.svg";
import pp from "./img/pp.jpg";
import { FaChromecast } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import clsx from 'clsx';
import {useEffect, useState} from "react";

export default function Header() {

    const [scroll, setScroll] = useState('');

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const handleScroll = () => {
        window.pageYOffset > 60 ? setScroll("fixed") : setScroll("")
    }

  return (
      <div className={clsx("w-full p-4 flex justify-between items-center transition-colors delay-75", scroll, scroll && "bg-black/60")}>
          <img src={logo} alt="logo" className="w-20 object-cover" />

          <div className="flex items-center gap-10">
              <MenuItem label="Ana Sayfa" active />
              <MenuItem label="Keşfet" />
              <MenuItem label="Kitaplık" />
              <MenuItem label="Arayın" icon />
          </div>

          <div className="flex items-center gap-5">
              <FaChromecast size={24} color="white" />
              <img src={pp} alt="pp" className="w-8 rounded-full object-cover" />
          </div>
      </div>
  );
}

const MenuItem = ({ label, active, icon }) => (
  <div className={clsx("font-bold text-lg cursor-pointer px-2 flex items-center gap-5", active ? "text-white" : "text-white/50")}>
      {icon && <IoSearchOutline size={20} color="text-white/50" />}
      {label}
  </div>
);
