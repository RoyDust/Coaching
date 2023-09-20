"use client";
import { useAllUserInfo } from "@/query/user";
import { NextImage } from "./_ui/image";
import { Tabs, TabsProps } from "antd";
import Tags from "./_components/tags";
import { useState } from "react";
import answerData from "@/data/homeText.json";
import courseData from "@/data/courseData";
import { Card } from "./_components/card";

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
  const [tip, setTip] = useState(0);

  return (
    <main className=" w-full h-full gap-10 my-10">
      <div className=" flex flex-col items-center gap-2 min-w-[60rem]">
        <h1 className=" text-3xl font-medium">全国名师网上一对一辅导</h1>
        <p className=" text-slate-400 text-xl">提升孩子学习力和成绩</p>
        <div className="flex-nowrap flex items-center justify-between w-full h-52 gap-10">
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
        <div className=" flex my-4 flex-col items-center w-full gap-4">
          <h1 className=" text-3xl font-medium">5阶教学标准 一对一精准提高</h1>
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
              className=" h-16 "
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

        <div className=" w-full my-4 gap-4 ">
          <h2 className=" text-2xl text-[#f59e0b] text-center my-4">
            常见问题
          </h2>
          <div className=" gap-6 grid-cols-3 grid p-4 ">
            {answerList.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 justify-center bg-slate-100 p-4 rounded"
              >
                <p>{item.title}</p>
                <p className=" text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className=" text-black  text-xl mb-4">
            {courseDataList[0].title}
          </h2>
          <div className=" flex gap-6">
            {courseDataList[0].list.slice(0, 7).map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>

        <p className=" m-4 text-light_gray text-sm">
          <span>
            <span>
              <span>
                <span>友情链接：&nbsp;&nbsp;</span>
                <a href="https://www.ijq.tv/jiemubiao/" target="_blank">
                  <span>电视节目预告</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.365968.com/" target="_blank">
                  <span>问答系统</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.youjiaojie.com/" target="_blank">
                  <span>幼教网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.0460.com/view/211861.html" target="_blank">
                  <span>0460网站之家</span>
                </a>
                <span>&nbsp; </span>
                <a href="http://www.zqxuejava.com" target="_blank">
                  <span>深圳java培训</span>
                </a>
                <span>&nbsp; </span>
                <a href="http://www.angulan.com" target="_blank">
                  <span>安古蘭</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.stepwayedu.com/" target="_blank">
                  <span>低龄留学申请</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.cpachn.org.cn/" target="_blank">
                  <span>成语故事</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.kecaca.com/" target="_blank">
                  <span>课查查</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://caizhe.100xuexi.com/" target="_blank">
                  <span>才哲学习网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.ndjsw.com/" target="_blank">
                  <span>宁德教师成语网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.zgybsfjy.com" target="_blank">
                  <span>中国硬笔书法协会</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://cs.ubest.cn" target="_blank">
                  <span>少儿英语培训</span>
                </a>
                <span>&nbsp;&nbsp;</span>
              </span>
            </span>
            <span>
              <span>
                <a href="http://www.lgpc.com.cn" target="_blank">
                  <span>人才测评</span>
                </a>
                <span>&nbsp; </span>
                <a href="http://www.wanwen100.com" target="_blank">
                  <span>学习资料</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.5iedu.vip/" target="_blank">
                  <span>中小学教育升学网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://sidu.100xuexi.com/" target="_blank">
                  <span>英语四六级考试题库</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.51xiuxueli.com/" target="_blank">
                  <span>沈阳学历提升</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.qdcent.com/" target="_blank">
                  <span>取英文名</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.jinlingjiajiao.com/" target="_blank">
                  <span>南京家教</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.chinaypt.com/" target="_blank">
                  <span>日语网校</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.zzjzbg.com/" target="_blank">
                  <span>儿童日语</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.eduzm.com/" target="_blank">
                  <span>日语培训</span>
                </a>
                <span>&nbsp; </span>
                <a href="http://www.prfudao.com" target="_blank">
                  <span>培人辅导网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.besthappykids.com/" target="_blank">
                  <span>南京少儿英语</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.cshope.net/" target="_blank">
                  <span>it培训</span>
                </a>
                <span>&nbsp;</span>
                <a href="http://www.jingch.net/" target="_blank">
                  <span>南京北大青鸟</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.jungeliaoliang.net.cn" target="_blank">
                  <span>师学思大教育</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.js-teacher.cn" target="_blank">
                  <span>江苏教师资格证考试</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://jiaowu.chenggui.com.cn" target="_blank">
                  <span>郑州城轨交通学校</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.langjiayikao.com" target="_blank">
                  <span>传媒艺考培训</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.jiufangms.com" target="_blank">
                  <span>石家庄画室</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.yijiahuashi.com" target="_blank">
                  <span>武汉画室</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="http://www.relunwen.com" target="_blank">
                  <span>热论文网</span>
                </a>
                <span>&nbsp; </span>
                <a href="http://www.haochxuexi.com" target="_blank">
                  <span>好成学习网</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.riji.cn/zuowen/" target="_blank">
                  <span>作文大全</span>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="https://www.riji.cn/scb/" target="_blank">
                  <span>手抄报</span>
                </a>
              </span>
            </span>
          </span>
        </p>
      </div>
    </main>
  );
}
