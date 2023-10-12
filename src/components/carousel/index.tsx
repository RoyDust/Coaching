"use client";
import React from "react";
import { Carousel } from "antd";
import { NextImage } from "@/ui/image";

export const CarouselCpt = () => {
  return (
    <Carousel autoplay className=" h-[26rem]">
      <div className=" h-[26rem] w-full">
        <NextImage
          fill
          alt="教育"
          className="relative h-full w-full"
          imgClassName="object-cover transition "
          src="/img/10001.jpg"
        />
      </div>
      <div className=" h-[26rem] w-full">
        <NextImage
          fill
          alt="教育"
          className="relative h-full w-full"
          imgClassName="object-cover transition "
          src="/img/10002.jpg"
        />
      </div>
    </Carousel>
  );
};
