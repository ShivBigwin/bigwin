"use client";
export default function Model(){
    return(
        <>
        <div className=" items-center justify-center p-8">
           <h1 className="text-3xl text-center font-semibold text-blue-600">What Is P2P Lending?</h1>
           <p className=" text-lg font-semibold text-center p-14">P2P (Peer-to-peer) lending companies offer services that connect borrowers and lenders directly through online platforms,
             bypassing traditional financial institutions. They facilitate the borrowing and lending process by providing a platform for individuals to both seek and offer loans, 
             often with the aim of offering better interest rates than traditional banks for borrowers and higher returns for lenders.
            </p>
        </div>
        <div className=" flex items-center justify-center p-4">
                <img src="flowchart.jpg" 
                alt="P-2-P Lending" 
                className="w-[300px] md:w-[900px] " />
            </div>
        </>
    )
}