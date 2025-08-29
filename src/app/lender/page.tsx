"use client";

import Lender from '@/components/website/lender';
import Loader from '@/components/website/loader/loader';
import Navbar from '@/components/website/navbar';
import React, { Suspense, useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading
  setTimeout(() => setIsLoading(false), 2000);
  return (
    <>
   {isLoading && <Loader />}
   <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Lender/>
    </Suspense>
    </Navbar>
    </>
  )
}

export default page
