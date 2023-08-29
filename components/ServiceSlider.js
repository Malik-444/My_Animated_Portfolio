// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Forging memorable identities that resonate and endure.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Creativity, aesthetics, innovation – all define great design.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Innovation, coding, progress – the essence of development.",
  },
  {
    icon: <RxReader />,
    title: "Content Creation",
    description: "Crafting engaging, informative, and impactful materials.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "SEO: Enhancing online visibility, rankings, and organic traffic.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[220px] sm:h-[310px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="text-accent text-4xl mb-4">{item.icon}</div>
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px]  leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
