import { useState } from "react";

export default function Procedure() {
  const [showLender, setShowLender] = useState(true);
  return (
    <>
      <div className="mt-8 items-center justify-center">
        <h1 className="text-3xl text-center text-blue-600 font-semibold">
          Steps To Start
        </h1>
        <div className="flex gap-4 mt-8 items-center justify-center ">
          <button
            className=" flex hover:shadow-2xl  w-fit bg-blue-700 rounded-md"
            onClick={() => {
              setShowLender(true);
            }}
          >
            <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
              Start as a Lender
            </h1>
          </button>
          <button className="flex hover:shadow-2xl  w-fit bg-green rounded-md"
           onClick={() => {
              setShowLender(false);
            }}>
            <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
              Start as a Borrow
            </h1>
          </button>
        </div>

        {showLender && (
          <div className="text-sm flex items-center justify-center p-8 gap-6 bg-slate-200">
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-xl mt-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Registration</span>
              </h1>
            </div>
            <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

             <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-xl mt-4 font-semibold">
                👤 <br />
                <span className="text-sm"> Lender Profile Approval</span>
              </h1>
               
            </div> 
            <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>  
             </div>
            
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm" > View Loan Listing</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Fund Loans</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Sign Agreement With Borrower</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Disbursement</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> EMI Profit Realization</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-700 text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Further Re-lending</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                8
              </div>
            </div>
          </div>
        )}
            {/* Borrower */}
        {!showLender && (
            <div className="text-sm flex items-center justify-center p-8 gap-6 bg-slate-200">
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-xl mt-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Registration</span>
              </h1>
            </div>
            <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

             <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-xl mt-4 font-semibold">
                👤 <br />
                <span className="text-sm"> Lender Profile Approval</span>
              </h1>
               
            </div> 
            <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>  
             </div>
            
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm" > View Loan Listing</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Fund Loans</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Sign Agreement With Borrower</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Disbursement</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> EMI Profit Realization</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-green text-white h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-xl top-5 font-semibold">
                👤 <br />
                <span className="text-sm"> Further Re-lending</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                8
              </div>
            </div>
          </div>
        //   <div className="text-sm flex items-center justify-center p-8 gap-6">
        //     <div className=" relative items-center justify-center text-center hover:shadow-2xl bg-violet-500 text-white h-60 w-52 p-4 rounded-lg border border-black">
        //       <div className="absolute ml-16 bottom-0 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
        //         1
        //       </div>
        //       <h1 className="text-xl font-semibold ">
        //         👤 <br />
        //         SignUp
        //       </h1>
        //       <p className="p-4">
        //         Create your account <br />
        //         in just few steps
        //       </p>
        //     </div>
        //     <div className="relative items-center justify-center text-center hover:shadow-2xl bg-indigo-500 text-white h-60 w-52 p-4 rounded-lg border border-black">
        //       <div className="absolute ml-16 bottom-0 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
        //         2
        //       </div>
        //       <h1 className="text-xl font-semibold ">
        //         ⚙️ <br />
        //         Select Loan Amount and Tenure
        //       </h1>
        //       <p className="p-2">
        //         Choose how much you need and how long you'd like to repay.
        //       </p>
        //     </div>
        //     <div className="relative items-center justify-center text-center hover:shadow-2xl bg-blue-500 text-white h-60 w-52 p-4 rounded-lg border border-black">
        //       <div className="absolute ml-16 bottom-0 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
        //         3
        //       </div>
        //       <h1 className="text-xl font-semibold ">
        //         📝 <br />
        //         Fill Out Basic Details
        //       </h1>
        //       <p className="p-4">
        //         Just a few quick details no paperwork or trips to the bank
        //       </p>
        //     </div>
        //     <div className="relative items-center justify-center text-center hover:shadow-2xl bg-green text-white h-60 w-52 p-4 rounded-lg border border-black">
        //       <div className="absolute ml-16 bottom-0 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
        //         4
        //       </div>
        //       <h1 className="text-xl font-semibold ">
        //         ✔️ <br />
        //         Get Approved
        //       </h1>
        //       <p className="p-4">
        //         We'll review your application and give you an instant decision.
        //       </p>
        //     </div>
        //     <div className=" relative items-center justify-center text-center hover:shadow-2xl bg-yellow-500 text-white h-60 w-52 p-4 rounded-lg border border-black">
        //       <div className="absolute ml-16 bottom-0 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
        //         5
        //       </div>
        //       <h1 className="text-xl font-semibold ">
        //         💰 <br />
        //         Funds in your Account
        //       </h1>
        //       <p className="p-2">
        //         Fund is instantly transferred directly into your account <br />
        //         once approved
        //       </p>
        //     </div>
        //   </div>
        )}
      </div>
    </>
  );
}
