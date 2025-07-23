"use client";
import Image from "next/image";
export default function Model() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center ">
        <div className="items-center justify-center p-4 ">
          <h1 className="text-center text-xl font-semibold">
            What Is P2P Lending?
          </h1>
          <p className="mt-10 p-4 text-gray-600">
            P2P (Peer-to-peer) lending companies offer services that connect
            borrowers and lenders directly through online platforms, bypassing
            traditional financial institutions. They facilitate the borrowing
            and lending process by providing a platform for individuals to both
            seek and offer loans, often with the aim of offering better interest
            rates than traditional banks for borrowers and higher returns for
            lenders.
            <br /> <br />{" "}
            <span className="font-semibold text-gray-700 ">
              "Money moving smarter."
            </span>
          </p>
        </div>
        <div className=" group relative overflow-hidden rounded-md p-8 transition-shadow duration-300">
          <img
            src="P2P.jpg"
            alt=""
            className=" border border-blue-300 rounded-lg  transition-all duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </div>
      {/* <div className="mb-8 p-6">
            <div className=" items-center justify-center ">
           <h1 className="text-3xl text-center font-semibold text-blue-950">What Is P2P Lending?</h1>
           <p className=" text-lg text-gray-500 text-center p-14">P2P (Peer-to-peer) lending companies offer services that connect borrowers and lenders directly through online platforms,
             bypassing traditional financial institutions. They facilitate the borrowing and lending process by providing a platform for individuals to both seek and offer loans, 
             often with the aim of offering better interest rates than traditional banks for borrowers and higher returns for lenders.
            </p>
        </div>
        <div className="flex items-center justify-center ">
            <div className="  group relative overflow-hidden rounded-lg  transition-shadow duration-300">
                <img src="P2P.jpg" 
                alt="P-2-P Lending" 
                className="border border-blue-300 rounded-lg  transition-all duration-500 ease-in-out transform group-hover:scale-110 " />
            </div>
        </div>
        </div> */}
    </>
  );
}
