import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IoPlaySharp } from "react-icons/io5";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BiLike, BiDislike, BiDotsVerticalRounded } from "react-icons/bi";
import "swiper/css";
import "./index.module.css";
import { songs } from "../../utils/songs";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function QuickSelect({ title }) {
  const sliderRef = useRef(null);

  const [data, setData] = useState(songs);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    currentPage !== 1 && displayItems(currentPage - 1);
  }, [currentPage]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    currentPage < pages && displayItems(currentPage + 1);
  }, [currentPage, pages]);

  useEffect(() => {
    displayItems();
    getPages();
  }, []);

  const perPage = 12;
  const displayItems = (page = 1) => {
    let index, offSet;
    if (page === 1 || page <= 0) {
      index = 0;
      offSet = perPage;
    } else if (page > songs.length) {
      index = page - 1;
      offSet = songs.length;
    } else {
      index = page * perPage - perPage;
      offSet = index + perPage;
    }

    const slicedItems = songs.slice(index, offSet);
    setCurrentPage(page);
    setData(slicedItems);
  };

  const getPages = () => {
    const totalItems = songs.length;
    const page = Math.ceil(totalItems / perPage);
    setPages(page);
  };

  return (
    <div className="w-full p-4 mb-20">
      <div className="flex items-center justify-between mb-3">
        <div className="block space-y-2">
          <h3 className="font-light text-sm lg:text-md text-gray-400">
            {title}
          </h3>
          <h3 className="font-bold text-xl lg:text-5xl">Hızlı Seçimler</h3>
        </div>

        <div className="flex items-center gap-5 m-3">
          <button
            onClick={handlePrev}
            className={clsx(
              "w-9 h-9 flex-center rounded-full border border-white/50 !disabled:hover:bg-white/20 transition-colors",
              currentPage === 1 && "disabled opacity-30"
            )}
          >
            <BsChevronLeft size={15} color="white" />
          </button>
          <button
            onClick={handleNext}
            className={clsx(
              "w-9 h-9 flex-center rounded-full border border-white/50 !disabled:hover:bg-white/20 transition-colors",
              currentPage === pages && "disabled opacity-30"
            )}
          >
            <BsChevronRight size={15} color="white" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        allowTouchMove={false} //disable dragg
        modules={[Pagination]}
        ref={sliderRef}
        className="mySwiper"
      >
        {Array.from({ length: pages }).map((el, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={item.cover}
                        alt="cover"
                        className="h-12 w-12 rounded cursor-pointer hover:opacity-20"
                      />
                      <div className="group-hover:block hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                        <IoPlaySharp size={20} />
                      </div>
                    </div>

                    <div className="block ml-4 truncate w-2/3">
                      <p className="cursor-pointer">{item.title}</p>
                      <p className="text-gray-400 hover:underline cursor-pointer">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                  <div className="gap-5 text-gray-500 hidden group-hover:flex items-center justify-center">
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
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
