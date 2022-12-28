import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { RiPauseLine, RiRepeatLine } from "react-icons/ri";
import { IoPlaySharp, IoVolumeHighOutline } from "react-icons/io5";
import { BiDislike, BiDotsVerticalRounded, BiLike } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";

export default function Player() {
  return (
    <div className="fixed bottom-0 w-full p-3 bg-background z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div>
            <MdSkipPrevious color="#fff" size={24} />
          </div>
          <div>
            <RiPauseLine color="#fff" size={35} />
          </div>
          <div>
            <MdSkipNext color="#fff" size={24} />
          </div>
          <div>
            <span className="text-xs text-gray-400 -ml-3">1:37 / 7:45</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/YpcR7ERXem0lbeWF9H141Vxf1iCHch9ciEAQxWbXqzpL2inJDba2n9I2BldxBn6ERrny_dMawvhq_77F=w226-h226-l90-rj"
                alt="cover"
                className="h-12 w-12 rounded cursor-pointer hover:opacity-20"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <IoPlaySharp size={20} />
              </div>
            </div>

            <div className="block ml-4 truncate w-2/3">
              <p className="cursor-pointer">deneme</p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Zeynep Bastık, Uğur Etiler, Sıla Şahin, Sezer Sarıgöz
              </p>
            </div>
          </div>
          <div className="gap-5 text-gray-500 flex items-center justify-center">
            <div className="cursor-pointer hover:text-gray-300">
              <BiDislike size={23} />
            </div>
            <div className="cursor-pointer hover:text-gray-300">
              <BiLike size={23} />
            </div>
            <div className="cursor-pointer hover:text-gray-300">
              <BiDotsVerticalRounded size={23} />
            </div>
          </div>
        </div>

        <div className="flex-center text-gray-500 gap-7">
          <div>
            <IoVolumeHighOutline size={24} />
          </div>
          <div>
            <RiRepeatLine size={24} />
          </div>
          <div>
            <BsShuffle size={24} />
          </div>
          <div>
            <GoTriangleUp size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
