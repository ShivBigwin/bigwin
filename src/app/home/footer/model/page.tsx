"use client";
import Model from '@/components/Home/footer/model/page';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Navbar>
     <Suspense fallback={<div>Loading...</div>}>

        <Model/>

     </Suspense>
    </Navbar>
    
  )
}

export default page
