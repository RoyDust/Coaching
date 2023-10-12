"use client";
import React from "react";
import { motion } from "framer-motion";
import cn from "clsx";
import Button from "@/ui/button";
import { usePathname } from "next/navigation";
import { NextImage } from "../../ui/image";
import Link from "next/link";

export const Nav = () => {
  const pathName = usePathname();

  console.log(pathName);
  // router.push("href");

  const routerList = [];

  return (
    <motion.div className=" h-16 bg-slate-100 w-full px-20 flex items-center  justify-around ">
      <motion.div className=" mr-4 w-44 h-full  text-center ">
        <NextImage
          useSkeleton
          className="relative h-full"
          imgClassName="object-cover transition p-1"
          src="/img/火花教育icon.png"
          alt={"name"}
          fill
          unoptimized
        />
      </motion.div>
      <motion.ul className="flex gap-6 h-full  align-middle leading-8">
        <Link
          href="/"
          className={cn(pathName === "/" && "nav-item-active", "nav-item")}
        >
          首页
        </Link>
        <Link
          href="/lessons"
          className={cn(
            pathName === "/lessons" && "nav-item-active",
            "nav-item"
          )}
        >
          课程中心
        </Link>
        <Link
          href="/teachers"
          className={cn(
            pathName === "/teachers" && "nav-item-active",
            "nav-item"
          )}
        >
          优秀教师
        </Link>
        <Link
          href="/case"
          className={cn(pathName === "/case" && "nav-item-active", "nav-item")}
        >
          学生案例
        </Link>
        <Link
          href="/news"
          className={cn(pathName === "/news" && "nav-item-active", "nav-item")}
        >
          教育头条
        </Link>
        <Link
          href="/live_list"
          className={cn(
            pathName === "/live_list" && "nav-item-active",
            "nav-item"
          )}
        >
          在线直播
        </Link>
      </motion.ul>
      <Button className="  ml-4 px-4 py-2 text-sm text-slate-200 bg-[#0177A9]">
        登录/注册
      </Button>
    </motion.div>
  );
};
