import Navbar from "../navbar"

export default function About(){
    return(
        <>
        
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-50 items-center justify-center 
                animate-pulse-1s-once" >
            <h1 className="text-4xl sm:text-4xl md:text-6xl  font-semibold text-center text-blue-500 drop-shadow-sm px-2 py-10 ">Driven by innovation</h1>
                <p className="font-semibold text-black text-center text-4xl py-0">
                    We prioritize impact and execution
                </p>
            <p className="text-center text-indigo-950 text-xl px-24 py-5">
                 Bigwin Infotech connects creditworthy borrowers with lenders looking for structured alternative financing opportunities.
                 While many Indians remain underserved by traditional credit institutions, lenders are actively seeking to diversify their portfolios through alternative investments that offer compelling returns.
            </p>
            <p className="text-center text-indigo-950 text-xl px-24 py-5">
                At Bigwin Infotech, we unite lenders and borrowers to build an ecosystem that empowers individuals to reach their financial goals.
                 As a market leader, we address critical gaps in the lending space and have emerged as the fastest-growing Peer-to-Peer lending platform in the country.
                  Backed by a global community of lenders and driven by a passionate, solution-focused team, our mission is to become the most trusted platform for both borrowers and lenders alike.
            </p>
            {/* {Our vision and Our mission } */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                <div className="bg-blue-200 flex flex-col items-center text-center h-72">
                    <h1 className="text-3xl text-center text-gray-600 py-4">Our Vision</h1>
                    <p className="text-gray-950 px-12 py-10 relative">
                         Our vision is to create a financially inclusive world where access to credit is seamless, transparent, and fair.
                         We aim to redefine lending by empowering individuals to support one another, building a trusted ecosystem that drives growth, opportunity, and financial well-being for all.
                    </p>
                </div>

                <div className="bg-blue-200  flex flex-col items-center text-center h-72">
                    <h1 className="text-3xl text-center text-gray-600 py-4">Our Mission</h1>
                    <p className="text-gray-950 px-12 py-10 relative">
                         Our mission is to simplify borrowing and investing by directly connecting creditworthy borrowers with individual lenders.
                         Through technology, transparency, and trust, we strive to offer a secure, efficient, and rewarding lending experience that empowers financial growth for both sides.
                    </p>
                </div>
            </div>
        </div>
        </>
    )

}