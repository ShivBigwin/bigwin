"use client";
import Navbar from '@/components/navbar';
import Policy from '@/components/policy';
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
