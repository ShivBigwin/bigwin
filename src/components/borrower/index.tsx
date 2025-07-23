"use client";
export default function Borrower() {
  return (
    <>
      <div className="">
        <div className="flex rounded-lg bg-gradient-to-br from-blue-950 to-darkBlue mb-8 items-center justify-center text-4xl font-semibold text-white mt-8 p-2">
          <h1>Borrowers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center ">
          <div className=" group relative overflow-hidden rounded-md p-8 transition-shadow duration-300">
            <img
              src="borrower.jpg"
              alt=""
              className=" border border-blue-300 rounded-lg  transition-all duration-500 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <div className="items-center justify-center p-4 ">
            <h1 className="text-center text-xl font-semibold">
              Get the Funds You Need—Fast & Flexible!
            </h1>
            <p className="mt-10 p-4 text-gray-600">
              We offers competitive rates, quick approvals, and a hassle-free
              process.Skip the bank queues and secure a loan directly from
              investors who believe in your potential. No hidden fees, no rigid
              terms—just a smarter way to borrow <br /> <br />{" "}
              <span className="font-semibold text-gray-700 ">
                "Apply now and unlock the financial freedom you deserve!"
              </span>
            </p>
          </div>
        </div>

         <div className="bg-gradient-to-br from-blue-950 to-darkBlue rounded-lg">
            <h1 className="p-4  ml-4 text-2xl text-white font-semibold">
              Step By Step Process :
            </h1>
          </div>

        <div className="flex items-center justify-center p-4">
         
          <div className="grid grid-cols-1 md:grid-cols-8 text-sm  p-10 gap-6">
            <div className="">
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 rounded-lg border border-black">
                <h1 className="text-sm mt-5 font-semibold">
                  <img
                    src="profile-evaluation.png"
                    alt=""
                    className="w-8 h-8 ml-12 mb-3"
                  />
                  <span className="text-sm"> Registration</span>
                </h1>
              </div>
              <div className="ml-8 mt-5 w-10 h-10 bg-white text-2xl text-center text-black rounded-full border border-black">
                1
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 rounded-lg border border-black">
                <h1 className="text-sm mt-4 font-semibold">
                  <img
                    src="evaluation.png"
                    alt=""
                    className="w-8 h-8 ml-12 mb-3"
                  />
                  <span className="text-sm"> Profile Evaluation</span>
                </h1>
              </div>
              <div className=" text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                2
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img src="listing.png" alt="" className="w-8 h-8 ml-8 mb-3" />
                  <span className="text-sm"> Listing On Platform</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                3
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img
                    src="fund-loans.png"
                    alt=""
                    className="w-8 h-8 ml-8 mb-3"
                  />
                  <span className="text-sm"> Funding</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                4
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img
                    src="sign-agreement.png"
                    alt=""
                    className="w-8 h-8 ml-8 mb-3"
                  />
                  <span className="text-sm "> Sign Agreement With Lender</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                5
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img
                    src="br-disbursement.png"
                    alt=""
                    className="w-8 h-8 ml-8 mb-3"
                  />
                  <span className="text-sm"> Disbursement</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                6
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img
                    src="emi-repayment.png"
                    alt=""
                    className="w-8 h-8 mb-3 ml-8"
                  />
                  <span className="text-sm"> EMI Repayment</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                7
              </div>
            </div>

            <div>
              <div className=" items-center justify-center text-center hover:shadow-2xl bg-blue-300 text-black  h-32 w-32 p-4 rounded-lg border border-black">
                <h1 className="text-sm top-5 font-semibold">
                  <img
                    src="loan-closure.png"
                    alt=""
                    className="w-8 h-8 ml-8 mb-3"
                  />
                  <span className="text-sm"> Loan Closure</span>
                </h1>
              </div>
              <div className="text-center ml-8 mt-5 w-10 h-10 bg-white text-2xl text-black rounded-full border border-black">
                8
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center mt-10 mb-10">
          <div
            className=" bg-gradient-to-br from-blue-950 to-darkBlue rounded-lg w-fit p-4 hover:shadow-2xl "
          >
            <a href="login" className="text-sm font-semibold text-white  p-2 ">
              {" "}
              START BORROWING{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
