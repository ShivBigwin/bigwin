"use client";

import UserDashboard from '@/components/dash';

import Loader from '@/components/loader/loader';

import React, { Suspense, useState } from 'react'

const page = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 3000);
  return (
    <div>
      {isLoading && <Loader />}
     {/* <Navbar> */}
    <Suspense fallback={<div>Loading...</div>}>
        <UserDashboard/> 
    </Suspense>
    {/* </Navbar> */}
    </div>
    
  )
}

export default page
