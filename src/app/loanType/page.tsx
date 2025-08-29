"use client";


import Loader from '@/components/website/loader/loader';
import LoanTypes from '@/components/website/loanType';
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
        <LoanTypes/>
    </Suspense>
    </Navbar>
    </div>
  )
}

export default page
