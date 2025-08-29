"use client";
import Documents from '@/components/dash/document';
import MyLoans from '@/components/dash/myloan';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <Documents/>
    </Suspense>
    
  )
}

export default page
