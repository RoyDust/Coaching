"use client";
import React from "react";
import cn from "clsx";
import { NextImage } from "../../_ui/image";
import Button from "../../_ui/button";

interface CardProps {
  className?: string;
  data: any;
}

export const Card = (props: CardProps) => {
  const cardData = props.data;
  console.log(cardData);

  return (
    <div
      className={cn(
        " w-48 bg-white flex-col flex justify-center rounded-xl",
        props.className ?? props.className
      )}
    >
      <NextImage
        useSkeleton
        className=" rounded-s-lg relative w-full h-48"
        imgClassName="object-cover transition rounded-t-lg"
        src={cardData.img}
        alt={"在线一对一辅导"}
        fill
      />
      <div className=" flex flex-col w-full gap-2 p-2 pb-0 text-xs text-black">
        <h2>{cardData.courseTitle}</h2>
        <p className="text-grey truncate">{cardData.courseIntroduction}</p>
      </div>
      <Button className=" text-special m-2 text-sm border rounded-sm">
        了解课程
      </Button>
    </div>
  );
};
