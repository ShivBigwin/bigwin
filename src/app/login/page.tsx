"use client";

import Login from "@/components/login";
import Navbar from "@/components/navbar";

import { Suspense } from "react";

export default function Home() {
  return (
    <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        <Login />
      </div>
    </Suspense>
    </Navbar>
  );
}
