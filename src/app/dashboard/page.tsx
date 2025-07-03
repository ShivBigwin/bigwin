"use client";

import Dashboard from '@/components/Dashboard';
import Navbar from '@/components/navbar';
import React, { Suspense } from 'react'

const page = () => {
  return (
    //  <Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Dashboard/>
    </Suspense>
    // </Navbar>
    
  )
}

export default page
