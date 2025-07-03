"use client";

import Navbar from "@/components/navbar";
import Signup from "@/components/signup";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
     <Navbar>
    <Suspense fallback={<div>Loading...</div>}>

      <div className="">
        <Signup />
      </div>
    </Suspense>
    </Navbar>
    </>
  );
}
