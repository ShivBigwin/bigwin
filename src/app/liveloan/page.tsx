"use client";
import LiveLoans from '@/components/dash/liveloan';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <LiveLoans/>
    </Suspense>
    
  )
}

export default page
