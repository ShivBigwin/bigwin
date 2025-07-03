"use client";

import Home from '@/components/Home/home';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
     <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Home/>
    </Suspense>
    </Navbar>
    
  )
}

export default page
