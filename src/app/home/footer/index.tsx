"use client";
import Footer from '@/components/Home/footer/page';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Navbar>
     <Suspense fallback={<div>Loading...</div>}>

        <Footer/>

     </Suspense>
    </Navbar>
    
  )
}

export default page
