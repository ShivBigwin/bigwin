import HomeDrop from "@/common/Dropdown/homedrop";
import { useState } from "react";

export default function Hamburger(){
  const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
      {isOpen && (
        <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <HomeDrop/> 
        </div>
      )}
      </>
    )
}
