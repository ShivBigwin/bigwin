"use client";
import Home from '@/components/website/Home/home';
import Loader from '@/components/website/loader/loader';
import Navbar from '@/components/website/navbar';
import React, { Suspense, useState } from 'react'

const home = () => {

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

export default home
