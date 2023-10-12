"use client";
import { useAllUserInfo } from "@/query/user";
import { NextImage } from "../ui/image";
import { Tabs, TabsProps } from "antd";
import Tags from "../components/tags";
import { useState } from "react";
import answerData from "@/data/homeText.json";
import courseData from "@/data/courseData";
import { Card } from "../components/card";
import { CarouselCpt } from "../components/carousel";
import { Links } from "../components/links";
import { NewsList } from "../components/newsList";

export default function Home() {
  const allUser = useAllUserInfo();
  const answerList = answerData.listData;
  console.log(allUser.data);

  const tagsData = {
    switch: [
      {
        title: "小学",
        tab: "0",
        img: "/img/10006.png",
      },
      {
        title: "初中",
        tab: "1",
        img: "/img/10007.png",
      },
      {
        title: "高中",
        tab: "2",
        img: "/img/10011.png",
      },
    ],
  };

  const listData = [
    {
      text1: "网上一对一辅导",
      text2: "互动体验好",
      imgSrc: "/img/10003.png",
    },
    {
      text1: "网上一对一辅导",
      text2: "互动体验好",
      imgSrc: "/img/10004.png",
    },
    {
      text1: "网上一对一辅导",
      text2: "互动体验好",
      imgSrc: "/img/10004.png",
    },
    {
      text1: "网上一对一辅导",
      text2: "互动体验好",
      imgSrc: "/img/10004.png",
    },
  ];

  const courseDataList = courseData.slice(0, 6);

  const [tab, setTab] = useState(tagsData.switch[0].tab);

  return (
    <>
      <div className=" w-full">
        <CarouselCpt />
      </div>
      <main className=" w-full h-full gap-10 px-48 my-10">
        <div className=" flex flex-col items-center gap-2 min-w-[60rem]">
          <h1 className=" text-3xl font-medium">全国名师网上一对一辅导</h1>
          <p className=" text-slate-400 text-xl">提升孩子学习力和成绩</p>
          <div className="flex-nowrap h-52 flex items-center justify-between w-full gap-10">
            {listData.map((item) => (
              <div
                className="  h-full   w-[19rem] bg-contain bg-no-repeat  bg-[url('/img/10003.png')]"
                key={item.imgSrc}
              >
                <div className=" top-14 left-6 relative z-10 text-sm">
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-col items-center w-full gap-4 my-4">
            <h1 className=" text-3xl font-medium">
              5阶教学标准 一对一精准提高
            </h1>
            <p className=" text-slate-400 text-xl">提升孩子学习力和成绩</p>
            <div className=" flex flex-col w-full min-w-[60rem] border-t-2 border-[#333]">
              {/* <div className=" flex items-center justify-center w-full border-t-2">
              {tabsData.map((item) => (
                <div
                  className=" bg-slate-300 flex items-center justify-center flex-1 h-12"
                  key={item.index}
                >
                  {item.name}
                </div>
              ))}
            </div> */}
              <Tags
                segmentProps={tagsData}
                setTab={setTab}
                tab={tab}
                className=" h-16"
              />
              <div className=" w-full h-[40rem]">
                <NextImage
                  src={tagsData.switch[tab as any].img}
                  useSkeleton
                  className="relative w-full h-full"
                  imgClassName="object-fill transition "
                  alt={"在线一对一辅导"}
                  fill
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className=" w-full gap-4 my-4">
            <h2 className=" text-2xl text-[#f59e0b] text-center my-4">
              常见问题
            </h2>
            <div className=" grid grid-cols-3 gap-6 p-4">
              {answerList.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-100 flex flex-col justify-center gap-4 p-4 rounded"
                >
                  <p>{item.title}</p>
                  <p className=" text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full gap-4 my-4">
            <h2 className=" mb-4 text-xl text-black">
              {courseDataList[0].title}
            </h2>
            <div className=" scroll-smooth flex justify-around w-full gap-6">
              {courseDataList[0].list.slice(0, 4).map((item, index) => (
                <Card
                  key={index}
                  img={item.img}
                  title={item.courseTitle}
                  introduction={item.courseIntroduction}
                  className=" w-[12rem]"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full gap-8 my-8">
            <div className="flex flex-col flex-1">
              <div className=" flex justify-between px-2">
                <h2>新闻资讯</h2>
                <span className="text-light_gray text-sm">更多{">"}</span>
              </div>
              <NewsList />
            </div>
            <div className="flex flex-col flex-1">
              <div className=" flex justify-between px-2">
                <h2>教育资讯</h2>
                <span className="text-light_gray text-sm">更多{">"}</span>
              </div>
              <NewsList />
            </div>
          </div>

          <Links />
        </div>
      </main>
    </>
  );
}
