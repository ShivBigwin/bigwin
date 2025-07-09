"use client";
export default function Lender(){
return(
    <>
    <div className="">
        <div className="text-center text-4xl font-semibold text-blue-600 mt-8">
            <h1>Start Lending In Easy Steps</h1>
        </div>

        <div className="flex items-center justify-center p-8 gap-6 mt-12" >
            <div className= "relative items-center justify-center text-center hover:shadow-2xl bg-indigo-600 text-white h-60 w-52 p-4 rounded-lg border border-black">
            <div className="absolute ml-16 top-2 w-10 h-10 bg-white text-2xl text-black  rounded-full">1</div>
                <h1 className="text-xl font-semibold mt-10 ">🧾 <br />Setup Account</h1>
                <p className="p-2">KYC Verification - Aadhaar, PAN, Bank account</p>       
        </div>

            <span className="text-2xl">➡️</span>

        <div className= "relative items-center justify-center text-center hover:shadow-2xl bg-indigo-600 text-white h-60 w-52 p-4 rounded-lg border border-black">
            <div className="absolute ml-16 top-2 w-10 h-10 bg-white text-2xl text-black  rounded-full ">2</div>
                <h1 className="text-xl font-semibold mt-10 ">💵 <br />Add Fund</h1>
                <p className="p-2">Bank Transfer</p>       
        </div>

            <span className="text-2xl">➡️</span>

        <div className= "relative items-center justify-center text-center hover:shadow-2xl bg-indigo-600 text-white h-60 w-52 p-4 rounded-lg border border-black">
            <div className="absolute ml-16 top-2 w-10 h-10 bg-white text-2xl text-black  rounded-full ">3</div>
                <h1 className="text-xl font-semibold mt-10 "> ✔️<br />All Set</h1>
                <p className="p-2">E Sign Terms and Condition</p>       
        </div>

            <span className="text-2xl">➡️</span>

        <div className= "relative items-center justify-center text-center hover:shadow-2xl bg-indigo-600 text-white h-60 w-52 p-4 rounded-lg border border-black">
            <div className="absolute ml-16 top-2 w-10 h-10 bg-white text-2xl text-black  rounded-full ">4</div>
                <h1 className="text-xl font-semibold mt-10 ">👤 <br />Select Borrowers</h1>
                <p className="p-2">See Available Loans</p>       
        </div>
        </div>
        <div className=" flex items-center justify-center mt-10">
            <div className="bg-blue-700 rounded-lg w-fit p-4 hover:bg-blue-800 ">
            <a href="login" className="text-sm font-semibold text-white ml-10 mr-10 p-2"> START LENDING </a>
        </div>
        </div>
        
    </div>
    </>
)
}