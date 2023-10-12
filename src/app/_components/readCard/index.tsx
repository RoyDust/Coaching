import React from "react";
import { NextImage } from "../../_ui/image";

export const ReadCard = () => {
  return (
    <div className=" h-28 border-subtext_grey flex w-full p-1 border-b border-dotted">
      <NextImage
        fill
        alt="教育"
        className=" w-44 relative h-full"
        imgClassName="object-cover transition "
        src="/img/textImg/10001.png"
      />
      <div className=" flex flex-col justify-around flex-1 gap-1 px-2">
        <p className=" text-black">
          还记得小时候的梦想吗？学习没有动力，没有目标怎么办？好好看看
        </p>
        <p className=" text-light_gray text-sm">
          学业规划：明确目标，制定计划，名师一对一辅导，助力金榜题名，这么多好大学，总有一个适合你！
        </p>
        <p className="text-light_gray text-sm">2023-08-22</p>
      </div>
    </div>
  );
};
