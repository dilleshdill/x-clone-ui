"use client";
import React from "react";
import Image from "@/Components/Image";
import Feed from "@/Components/Feed";
import Link from "next/link";
import Share from "@/Components/Share";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Homepage = () => {
  return (
    <div className=''>
      <div className="pt-4 px-4 flex items-center justify-between text-textGray border-b-[1px] border-borderGray font-bold">
        <Link href='/' className="pb-3 flex items-center border-b-4 border-iconBlue">For you</Link>
        <Link href='/' className="pb-3">Following</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage