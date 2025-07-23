import { useState } from "react";

export default function Procedure() {
  const [showLender, setShowLender] = useState(true);
  return (
    <>
      <div className="mt-14 items-center justify-center bg-blue-50">
        <h1 className="text-3xl text-center text-black ">
          Steps To Start
        </h1>
        <div className="flex gap-4 mt-8 items-center justify-center ">
          <button
            className=" flex hover:shadow-2xl  w-fit bg-gradient-to-br from-blue-950 to-darkBlue rounded-md"
            onClick={() => {
              setShowLender(true);
            }}
          >
            <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
              Start as a Lender
            </h1>
          </button>
          <button className="flex hover:shadow-2xl  w-fit bg-gradient-to-br from-blue-950 to-darkBlue  rounded-md"
           onClick={() => {
              setShowLender(false);
            }}>
            <h1 className="ml-6 mr-6 p-2 text-white font-semibold text-lg">
              Start as a Borrow
            </h1>
          </button>
        </div>


            {/* Lender */}
        {showLender && (
          <div className="text-sm flex items-center justify-center p-8 gap-6">
            <div >
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-sm mt-5 font-semibold mb-3">
                <img src="registration.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
                <span className="text-sm "> Registration</span>
              </h1>
            </div>
            <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

             <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm  font-semibold">
                <img src="profileapproval.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Lender Profile Approval</span>
              </h1>
               
            </div> 
            <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>  
             </div>
            
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="listing1.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm" > View Loan Listing</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="funding.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Fund Loans</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                 <img src="sign-agreement1.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Sign Agreement With Borrower</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl  bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                 <img src="disbursment.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Disbursement</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl  bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="graph.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> EMI Profit Realization</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="re-lending.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Further <br /> Re-lending</span>
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
            <div className="text-sm flex items-center justify-center p-8 gap-6 ">
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-sm mt-5 font-semibold">
                <img src="profile-evaluation.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
                <span className="text-sm"> Registration</span>
              </h1>
            </div>
            <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

             <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 rounded-lg border border-black">            
              <h1 className="text-sm mt-4 font-semibold">
                <img src="evaluation.png" alt="" className="w-8 h-8 ml-12 mb-3"/>
                <span className="text-sm"> Profile Evaluation</span>
              </h1>
               
            </div> 
            <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>  
             </div>
            
            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
               <img src="listing.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm" > Listing On Platform</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="fund-loans.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Funding</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="sign-agreement.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm "> Sign Agreement With Lender</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="br-disbursement.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Disbursement</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="emi-repayment.png" alt="" className="w-8 h-8 mb-3 ml-8"/>
                <span className="text-sm"> EMI Repayment</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
                <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black h-32 w-32 p-4 rounded-lg border border-black">            
              <h1 className="text-sm top-5 font-semibold">
                <img src="loan-closure.png" alt="" className="w-8 h-8 ml-8 mb-3"/>
                <span className="text-sm"> Loan Closure</span>
              </h1>
               
            </div>
            <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                8
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
