"use client";
import React from "react";
import { NextImage } from "../../ui/image";

export const Footer = () => {
  return (
    <div className=" w-full h-80 gap-8  bg-[rgb(255,97,0)] flex flex-col  px-44 py-4 text-slate-100">
      <div className=" flex items-center justify-center w-full gap-24">
        <div className=" rounded-xl flex items-center w-56 h-24 border">
          <NextImage
            useSkeleton
            className=" relative w-24 h-24"
            imgClassName="object-cover transition "
            src="/img/10000.png"
            alt={"在线一对一辅导"}
            fill
            unoptimized
          />
          <p className=" flex flex-col items-center justify-center">
            <h2 className=" text-xl">师资承诺</h2>
            <p className=" text-sm">不满意老师随时换</p>
          </p>
        </div>
        <div className=" rounded-xl flex items-center w-56 h-24 border">
          <NextImage
            useSkeleton
            className=" relative w-24 h-24"
            imgClassName="object-cover transition "
            src="/img/10000.png"
            alt={"在线一对一辅导"}
            fill
            unoptimized
          />
          <p className=" flex flex-col items-center justify-center">
            <h2 className=" text-xl">权益保障</h2>
            <p className=" text-sm">不满意可随时退费</p>
          </p>
        </div>
        <div className=" rounded-xl flex items-center w-56 h-24 border">
          <NextImage
            useSkeleton
            className=" relative w-24 h-24"
            imgClassName="object-cover transition "
            src="/img/10000.png"
            alt={"name"}
            fill
            unoptimized
          />
          <p className=" flex flex-col items-center justify-center">
            <h2 className=" text-xl">服务保障</h2>
            <p className=" text-sm">3对1全程教学服务</p>
          </p>
        </div>
      </div>
      <p className=" text-xs">
        火花教育---在线一对一辅导平台,
        坚定用科技和爱践行“以心唤心、以智启智、以情动情”的教育理念为使命，整合名校名师优势资源，针对成人学生学习中各类问题，通过学情分析、学习规划、家庭教育指导、心理咨询等为学生量身定制专属学习方案，利用在线智能教学系统打通
        “课前预习、课堂学习、课后练习、复习反思”的学习全过程，帮助孩子提高学习力和成绩，摆脱学习和成长困境。
      </p>
      <ul className=" text-xs">
        <li>●火花教育价值观：一切为了学生成长、成才！</li>
        <li>
          ●火花教育愿景：成为一家家长信赖，学生喜爱，有温度的教育科技企业！
        </li>
        <li>
          ●火花教育使命：用科技和爱践行“以心唤心、以智启智、以情动情”的教育理念!
        </li>
      </ul>
      <p className=" text-xs">
        版权所有：长沙火花教育科技有限公司
        总部地址：长沙高新开发区岳麓西大道588号芯城科技园9栋号866房
        备案号：湘ICP备19003962号 咨询电话：029-87577710
        公安备案号：湘公网安备61010402032493号
      </p>
    </div>
  );
};
