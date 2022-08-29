import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slider;
