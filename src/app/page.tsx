"use client";
import { useAllUserInfo } from "@/query/user";
import Image from "next/image";

export default function Home() {
  const allUser = useAllUserInfo();
  console.log(allUser.data);

  return (
    <main className="">
      <h2>首页</h2>
    </main>
  );
}
