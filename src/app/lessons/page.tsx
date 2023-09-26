"use client";
import React, { useState } from "react";
import { NextImage } from "../_ui/image";
import Tags from "../_components/tags";
import lessonData from "@/data/lessonData";
import { Card } from "../_components/card";
import { Pagination } from "antd";

const Lesson = () => {
  const list = (lessonData as []).slice(0, 12);
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
                <Card data={item} className=" w-56" />
              </div>
            ))}
          </div>
          <Pagination className="" defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};
export default Lesson;
