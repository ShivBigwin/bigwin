"use client";

import Loader from '@/components/loader/loader';
import LoanTypes from '@/components/loanType';
import Navbar from '@/components/navbar';
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
