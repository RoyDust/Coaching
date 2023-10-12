import React, { useEffect, useRef } from "react";
import cn from "clsx";

const Tags = (props: {
  segmentProps: any;
  setTab: (e: string) => void;
  tab: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps, setTab, tab } = props;

  return (
    <div
      ref={ref}
      className={cn(
        " top-0 w-full bg-[rgb(235, 235, 235)] flex justify-around border-b border-slate-300 min-h-[2rem]",
        props.className ?? props.className
      )}
    >
      {segmentProps.switch.map((item: any, index: any) => (
        <div
          key={index}
          className="flex items-center justify-center flex-1 py-4 text-sm font-bold cursor-pointer"
          style={{
            borderBottom: tab === item.tab ? "2px solid #0FA24C" : "",
            color: tab === item.tab ? "#0FA24C" : "",
            background: tab === item.tab ? "#ffffff" : "",
          }}
          onClick={() => {
            setTab(item.tab);
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
export default Tags;
