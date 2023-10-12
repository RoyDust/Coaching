"use client";
import React, { useState } from "react";
import { NextImage } from "../../ui/image";
import Tags from "../../components/tags";
import lessonData from "@/data/lessonData";
import { Card } from "../../components/card";
import { Pagination } from "antd";
import { NewsList } from "../../components/newsList";

const Lesson = () => {
  const list: any[] = (lessonData as []).slice(0, 12);
  const tagsData = {
    switch: [
      {
        title: "小学",
        tab: "0",
      },
      {
        title: "初中",
        tab: "1",
      },
      {
        title: "高中",
        tab: "2",
      },
    ],
  };

  const [tab, setTab] = useState(tagsData.switch[0].tab);

  return (
    <div className=" flex justify-center">
      <div className=" w-[65rem] ">
        <NextImage
          src={"/img/10030.jpeg"}
          useSkeleton
          className="relative w-full h-56"
          imgClassName="object-fill transition "
          alt={"在线一对一辅导"}
          fill
        />
        <div className=" border-slate-300 flex flex-col items-center w-full pb-4 my-4 border">
          <Tags
            segmentProps={tagsData}
            setTab={setTab}
            tab={tab}
            className=" h-16"
          />
          <div className="gap-7 grid grid-cols-4 p-6">
            {list.map((item, index) => (
              <div key={index}>
                <Card
                  // data={item}
                  img={item.img}
                  title={item.courseTitle}
                  introduction={item.courseIntroduction}
                  className=" w-56"
                />
              </div>
            ))}
          </div>
          <Pagination className="" defaultCurrent={1} total={50} />
        </div>

        <div className="flex justify-center w-full gap-8 my-10">
          <div className="flex flex-col flex-1">
            <NewsList />
          </div>
          <div className="flex flex-col flex-1">
            <NewsList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lesson;
