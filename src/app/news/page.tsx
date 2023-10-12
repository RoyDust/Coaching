import React from "react";
import { NextImage } from "../_ui/image";
import { NewsList } from "../_components/newsList";
import { ReadCard } from "../_components/readCard";

const page = () => {
  const data = [1, 2, 4, 5, 6, 7, 10, 8, 9];

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <div className=" h-[25rem] w-full">
        <NextImage
          fill
          alt="教育"
          className="relative w-full h-full"
          imgClassName="object-cover transition "
          src="/img/news_bg.jpeg"
        />
      </div>
      <div className="w-[65rem] flex bg-pink/25 ">
        <div className=" w-[18rem] bg-rose-400 flex flex-col p-2">
          <span className=" ml-2 text-xl"> | 火爆文章</span>
          <NewsList isHiddenTime={true} className=" w-full" />
        </div>
        <div className=" flex-1">
          {data.map((item) => {
            return <ReadCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default page;
