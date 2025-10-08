"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiArrowDown } from "react-icons/fi";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

interface ContentSliderProps {
  children: ReactNode;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
}

const ContentSlider = ({
  children,
  autoplayDelay = 5000,
  loop = true,
  className = "",
}: ContentSliderProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTablet = useMediaQuery("(min-width: 900px) and (max-width: 1280px)");

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const spaceBetween = isMobile ? 0 : isTablet ? 10 : 20;

  // Normalize children into array
  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className={`w-full mx-auto py-16 px-2 relative ${className}`}>
      <Swiper
        key={`${slidesPerView}-${spaceBetween}`} 
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop={loop}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onBeforeInit={(swiper: { params: { navigation: { prevEl: HTMLButtonElement; nextEl: HTMLButtonElement; }; pagination: { el: HTMLDivElement; }; }; }) => {
          if (prevRef.current && nextRef.current && paginationRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        onInit={(swiper: { navigation: { init: () => void; update: () => void; }; pagination: { init: () => void; update: () => void; }; }) => {
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
      >
        {slides.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div
        ref={paginationRef}
        className="flex justify-center mt-6 lg:mt-12 swiper-pagination-custom"
      />

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FiArrowDown size={24} className="rotate-90" />
        </button>
        <button
          ref={nextRef}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FiArrowDown size={24} className="-rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default ContentSlider;
