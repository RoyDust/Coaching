"use client";
import React from "react";
import cn from "clsx";
import { useState } from "react";
import { Card } from "../../components/card/index";
import data from "@/data/teachersData";
import { Pagination } from "antd";

const Teachers = () => {
  const list = [
    {
      title: "全部",
      index: 0,
    },
    {
      title: "初一",
      index: 1,
    },
    {
      title: "初二",
      index: 2,
    },
    {
      title: "初三",
      index: 3,
    },
    {
      title: "高一",
      index: 4,
    },
    {
      title: "高二",
      index: 5,
    },
    {
      title: "高三",
      index: 6,
    },
  ];

  const [isActive, setIsActive] = useState(0);

  const listData = data.slice(0, 9);

  return (
    <div className=" flex flex-col items-center">
      <div className=" flex items-center w-full gap-4 py-8">
        <div className=" border-slate-300 flex-1 border-[.2px]" />
        <h1 className=" text-gray text-3xl font-bold">名师专题课</h1>
        <div className=" flex-1 border-[.2px] border-slate-300 " />
      </div>
      <div className=" flex flex-col items-center py-4">
        <nav className=" text-light_gray flex items-center justify-center gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className={cn(
                "hover:text-gray-dark  py-1  px-3",
                index === isActive ? "bg-gray text-white" : ""
              )}
              onClick={() => setIsActive(index)}
            >
              {item.title}
            </div>
          ))}
        </nav>
        <div className=" grid grid-cols-3 gap-6 py-6">
          {listData.map((item, index) => (
            <Card
              img={item.img}
              title={item.lessonName}
              key={index}
              className=" w-80"
              introduction={"主讲老师" + item.name}
              bntText="立即报名"
            />
          ))}
        </div>
        <Pagination defaultCurrent={1} total={50} className="mb-4" />
      </div>
    </div>
  );
};
export default Teachers;
