"use client";

import Model from '@/components/website/Home/model';
import Navbar from '@/components/website/navbar';
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
