"use client";

import Home from '@/components/Home/home';
import Loader from '@/components/loader/loader';
import Navbar from '@/components/navbar';
import React, { Suspense, useState } from 'react'

const page = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 3000);
  return (
    <div>
      {isLoading && <Loader />}
     <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Home/>
    </Suspense>
    </Navbar>
    </div>
    
  )
}

export default page
