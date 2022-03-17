import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContainer, SliderProps } from ".";

export const Slider = ({ children }: SliderProps) => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={16}
        mousewheel
        grabCursor
        slidesPerView={"auto"}
        navigation={{}}
        pagination={{ dynamicBullets: true }}
        modules={[Mousewheel, Navigation, Pagination]}
      >
        {children.map((chield, key) => {
          return (
            <SwiperSlide style={{ width: "auto" }} key={key}>
              {chield}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderContainer>
  );
};
