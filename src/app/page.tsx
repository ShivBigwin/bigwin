"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/home");
    }
  }, []);

  return <div>
   
    {/* <AuthContainer /> */}</div>;
}
