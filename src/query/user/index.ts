"use client";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../utils/axios";

export function useAllUserInfo() {
  return useQuery(["allUser"], () => {
    let data = get("http://localhost:4000/api/hello");
    console.log(data);
    return data;
  });
}
