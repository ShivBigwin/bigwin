"use client";
import Navbar from '@/components/navbar';
import Signup from '@/components/signup';
import React, { Suspense } from 'react'

const page = () => {
  return (
     //<Navbar>
    <Suspense fallback={<div>Loading...</div>}>
        <Signup/>
    </Suspense>
    //</Navbar>
    
  )
}

export default page
