import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IoPlaySharp } from "react-icons/io5";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "swiper/css";
import "./index.module.css";
import { songs } from "../../utils/songs";
import clsx from "clsx";
import { useCallback, useRef } from "react";

export default function Slider({ title }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-5xl">{title}</h3>

        <div className="flex items-center gap-3 m-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/20 transition-colors"
          >
            <BsChevronLeft size={18} color="white" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/20 transition-colors"
          >
            <BsChevronRight size={18} color="white" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        modules={[Pagination]}
        ref={sliderRef}
        className="mySwiper"
      >
        {songs.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <div className="absolute left-[40%] top-[40%] opacity-100">
                <IoPlaySharp size={40} color="white" />
              </div>
              <img
                src={item.cover}
                className={clsx(
                  "w-60 h-60 object-cover mb-3 cursor-pointer hover:opacity-50 transition-opacity",
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
