"use client";

import Settings from '@/components/dash/setting';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <Settings/>
    </Suspense>
    
  )
}

export default page
