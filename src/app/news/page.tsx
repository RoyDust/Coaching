import React from "react";
import { NextImage } from "../../ui/image";
import { NewsList } from "../../components/newsList";
import { ReadCard } from "../../components/readCard";

const page = () => {
  const data = [1, 2, 4, 5, 6, 7, 10, 8, 9];

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <div className=" h-[25rem] w-full relative">
        <NextImage
          fill
          alt="教育"
          className="relative w-full h-full"
          imgClassName="object-cover transition "
          src="/img/news_bg.jpeg"
        />
        <div className=" left-[23%] absolute top-28">
          <h2 className=" text-special text-2xl">
            教育头条 <br />
            News information
          </h2>
          <br />
          <p className=" text-gray-dark text-xs">
            家长最关心的资讯都在这里
            <br />
            名师在线一对一辅导 小学一对一辅导 初中一对一辅导 高中一对一辅导
          </p>
        </div>
      </div>
      <div className="w-[65rem] flex  mt-6 gap-4">
        <div className=" w-[18rem] flex flex-col p-2">
          <span className=" ml-2 text-xl"> | 火爆文章</span>
          <NewsList isHiddenTime={true} className=" w-full" />
        </div>
        <div className=" flex-1">
          <span className=" ml-2 text-xl">教育资讯</span>
          {data.map((item) => {
            return <ReadCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default page;
