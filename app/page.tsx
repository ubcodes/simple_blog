"use client";
import Image from "next/image";
import { Hero, Articles } from "@/components";
// import Blog from "./Blog/page";
import Blog from "./Blog/[slug]/page";
import { useEffect, useState } from "react";
import { getPosts } from "@/services";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("effect triggered");

    // getPosts().then((res) => {
    //   setText(JSON.stringify(res));
    // });
  }, []);
  return (
    <div>
      {/* <Hero />
      <Articles post={post} /> */}
      {text}
    </div>
  );
}
