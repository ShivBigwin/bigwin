"use client";

import Loader from '@/components/website/loader/loader';
import Navbar from '@/components/website/navbar';
import Resources from '@/components/website/resources';
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
