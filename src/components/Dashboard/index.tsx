"use client";

import Content from "./content";
import Header from "./header";
import SideBar from "./sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar/>

      {/* Dashboard navbar */}
      <div className="flex-1 flex flex-col">
        <Header/>
        {/* Header */}
       

        {/* Content Area */}
          <Content/>
      </div>
    </div>
  )
}
