"use client";
import MyProfile from '@/components/dash/myprofile';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <MyProfile/>
    </Suspense>
    
  )
}

export default page
