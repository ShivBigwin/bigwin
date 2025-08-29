"use client";

import Navbar from '@/components/website/navbar';
import Policy from '@/components/website/policy';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Policy/>
    </Suspense>
    </Navbar>
  )
}

export default page
