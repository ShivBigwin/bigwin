"use client";
import Home from '@/components/Home/home';
import Login from '@/components/login';
import Navbar from "@/components/navbar";
import Signup from "@/components/signup";
import { Suspense } from "react";

export default function Main() {
  return (
    <>
     <Navbar>
    <Suspense fallback={<div>Loading...</div>}>

      <div className="">
        <Login/>
      </div>
    </Suspense>
    </Navbar>
    </>
  );
}
