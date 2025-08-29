"use client";


import About from '@/components/website/about';
import Loader from '@/components/website/loader/loader';
import Navbar from '@/components/website/navbar';
import React, { Suspense, useState } from 'react'

const page = () => {
const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 2000);
  return (
    <div>
      {isLoading && <Loader />}
    <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <About/>
    </Suspense>
    </Navbar>
    </div>  
  )
}

export default page
