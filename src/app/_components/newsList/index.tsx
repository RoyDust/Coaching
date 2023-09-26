import React from "react";
import cn from "clsx";

interface NewsListProps {
  listData?: [];
  className?: string;
}

export const NewsList = (props: NewsListProps) => {
  const data = [
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
    {
      link: "#",
      title: "初一英语在线1对1辅导不得不承认的三大优点!",
      time: "2023-02-29",
    },
  ];

  return (
    <ul
      className={cn(" text-subtext_grey", props.className ?? props.className)}
    >
      {data.map((item, index) => (
        <li
          key={index}
          className=" border-subtext_grey flex items-center justify-between w-full h-10 gap-8 p-2 text-sm border-b border-dotted cursor-pointer"
        >
          <span className=" hover:border-b h-5">· {item.title}</span>
          <span className=" text-light_gray">{item.time}</span>
        </li>
      ))}
    </ul>
  );
};
