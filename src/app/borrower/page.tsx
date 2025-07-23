"use client";
import Borrower from '@/components/borrower';
import Loader from '@/components/loader/loader';
import Navbar from '@/components/navbar';
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
        <Borrower/>
    </Suspense>
    </Navbar></>
  )
}

export default page
