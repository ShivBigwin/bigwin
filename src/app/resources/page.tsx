"use client";

import Loader from '@/components/loader/loader';
import Navbar from '@/components/navbar';
import Resources from '@/components/resources';
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
        <Resources/>
    </Suspense>
    </Navbar>

    </div>
  )
}

export default page
