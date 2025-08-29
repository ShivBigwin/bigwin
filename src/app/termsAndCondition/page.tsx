"use client";

import Navbar from '@/components/website/navbar';
import Conditions from '@/components/website/termsAndCondition';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Conditions/>
    </Suspense>
    </Navbar>
  )
}

export default page
