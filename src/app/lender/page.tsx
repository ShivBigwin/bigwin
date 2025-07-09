"use client";



import Lender from '@/components/lender';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
   <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Lender/>
    </Suspense>
    </Navbar>
  )
}

export default page
