import { useRef, useEffect, useState, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; 
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiArrowDown } from "react-icons/fi";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    setMatches(media.matches); // initial check
    return () => media.removeEventListener("change", listener);
  }, [query]);

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
  const [mounted, setMounted] = useState(false);

  const isMobile = useMediaQuery("(max-width: 900px)");
  const isTablet = useMediaQuery("(min-width: 900px) and (max-width: 1280px)");

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const spaceBetween = isMobile ? 0 : isTablet ? 10 : 20;
  const slides = Array.isArray(children) ? children : [children];

  // Only mount Swiper on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`w-full mx-auto py-16 px-2 relative ${className}`}>
      <Swiper
        key={`${slidesPerView}-${spaceBetween}`}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (prevRef.current && nextRef.current && paginationRef.current) {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            if (swiper.params.pagination && typeof swiper.params.pagination !== "boolean") {
              swiper.params.pagination.el = paginationRef.current;
            }
          }
        }}
        onInit={(swiper: SwiperType) => {
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

      <div
        ref={paginationRef}
        className="flex justify-center mt-6 lg:mt-12 swiper-pagination-custom"
      />

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="p-3 bg-[#4C4C4C3B] rounded-full hover:bg-hover_service_bg transition hover:[box-shadow:0px_4px_6px_-4px_#AD46FF40,0px_10px_15px_-3px_#AD46FF40]"
        >
          <FiArrowDown size={24} className="text-white rotate-90" />
        </button>
        <button
          ref={nextRef}
          className="p-3 bg-[#4C4C4C3B] rounded-full hover:bg-hover_service_bg transition hover:[box-shadow:0px_4px_6px_-4px_#AD46FF40,0px_10px_15px_-3px_#AD46FF40]"
        >
          <FiArrowDown size={24} className="-rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default ContentSlider;
