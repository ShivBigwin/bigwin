"use client";

import UserDashboardLayout from '@/components/dash/userDashboardLayout';
import React, { Suspense } from 'react'

const page = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
        <UserDashboardLayout/>
    </Suspense>
    
  )
}

export default page
