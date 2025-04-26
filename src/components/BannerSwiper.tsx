import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Danh sách ảnh banner
const banners = [
  { src: "/img/banner_1.png", alt: "Banner 1" },
  { src: "/img/banner_2.jpg", alt: "Banner 2" },
];

export default function BannerSwiper() {
  return (
    <div className="w-full bg-gray-200">
      <div className="container mx-auto py-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="rounded shadow"
        >
          {banners.map((banner, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full object-cover max-h-[350px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
