"use client";
import MyLoans from '@/components/dash/myloan';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <MyLoans/>
    </Suspense>
    
  )
}

export default page
