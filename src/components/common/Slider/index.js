import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IoPlaySharp } from "react-icons/io5";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "swiper/css";
import "./index.module.css";
import { songs } from "../../utils/songs";
import clsx from "clsx";
import { useCallback, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Slider({ title }) {
  const sliderRef = useRef(null);
  const [width] = useMediaQuery();

  let perView = 6;
  if (width >= 500 && width < 600) {
    perView = 2;
  } else if (width >= 600 && width < 992) {
    perView = 3;
  } else if (width >= 992 && width < 1200) {
    perView = 4;
  } else if (width >= 1200) {
    perView = 6;
  } else {
    perView = 1;
  }

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full p-4 mb-20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-xl lg:text-4xl">{title}</h3>

        <div className="flex items-center gap-5 m-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 flex-center rounded-full border border-white/50 hover:bg-white/20 transition-colors"
          >
            <BsChevronLeft size={15} color="white" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 flex-center rounded-full border border-white/50 hover:bg-white/20 transition-colors"
          >
            <BsChevronRight size={15} color="white" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={perView}
        spaceBetween={10}
        modules={[Pagination]}
        ref={sliderRef}
        className="mySwiper"
      >
        {songs.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100">
                <IoPlaySharp size={40} color="white" />
              </div>
              <img
                src={item.cover}
                alt="cover"
                className={clsx(
                  "w-full lg:w-60 h-60 object-contain mb-3 cursor-pointer hover:opacity-50 transition-opacity",
                  item.type === "profile" ? "rounded-full" : "rounded-md"
                )}
              />
            </div>
            <div className="w-60">
              <p className="font-medium">{item.title}</p>
              <p className="text-white/60">
                {item.type === "profile"
                  ? item.subTitle
                  : `Şarkı • ${item.subTitle}`}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
