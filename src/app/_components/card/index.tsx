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
        " w-48 bg-white flex-col flex justify-center",
        props.className ?? props.className
      )}
    >
      <NextImage
        useSkeleton
        className=" relative w-full  h-48"
        imgClassName="object-cover transition "
        src={cardData.img}
        alt={"在线一对一辅导"}
        fill
      />
      <div className=" w-full text-xs p-2 pb-0 text-black gap-2 flex flex-col">
        <h2>{cardData.courseTitle}</h2>
        <p className="truncate text-grey">{cardData.courseIntroduction}</p>
      </div>
      <Button className=" border m-2 rounded-sm text-sm text-special">
        了解课程
      </Button>
    </div>
  );
};
