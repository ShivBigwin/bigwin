"use client";

import About from '@/components/about';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <About/>
    </Suspense>
    </Navbar>
  )
}

export default page
