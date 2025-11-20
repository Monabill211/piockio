"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProCard from "./proudectcard";

export default function ProductSlider({ products }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProCard title={item.title} price={item.price} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
