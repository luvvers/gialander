"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import React from "react";
import Image from "next/image";
import { EffectCoverflow, EffectCreative, Pagination } from "swiper/modules";

export const SwiperImages = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, EffectCreative, Pagination]}
      >
        <SwiperSlide>
          <Image
            src="/images/1.jpeg"
            alt="Image 1"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/2.jpeg"
            alt="Image 2"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3.jpeg"
            alt="Image 3"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/4.jpeg"
            alt="Image 4"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/5.jpeg"
            alt="Image 5"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/6.jpeg"
            alt="Image 6"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3.jpeg"
            alt="Image 6"
            sizes="100vw"
            decoding="async"
            loading="lazy"
            width={250}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
