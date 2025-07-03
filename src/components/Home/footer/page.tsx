"use client";

export default function Footer(){
    return(
    <>
        <div className="h-full bg-gradient-to-r from-blue-800 to-blue-700 p-8 ">
            <div className=" border border-white rounded-2xl h-full font-sans ">
                {/* Header */}
                <div className=" mb-12 text-indigo-50 px-4 py-16">
                    <div className="text-2xl font-semibold mb-1 px-4 text-center "> BIGWIN INFOTECH
                    <p className="text-sm ">Innovate|Transform|Grow</p> 
                    </div>
                </div>
                {/* Grid Section */}
                <div className="mt-14 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-teal-50">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About</h3>
                        <ul className="space-y-2">
                            <li><a href="/home" className="hover:underline">Home</a></li>
                            <li><a href="about" className="hover:underline">About</a></li>
                            <li><a href="/auth" className="hover:underline">Become a partner</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="/...[model]" className="hover:underline">Bussiness Model</a></li>
                        </ul>
                    </div>
                    {/* Lending */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Lending</h3>
                        <ul className="space-y-2">
                            <li><a href="dashboard" className="hover:underline">Portfolio Performance</a></li>
                            <li><a href="#" className="hover:underline">Who can lend?</a></li>
                            <li><a href="#" className="hover:underline">Credit Assesment</a></li>
                            <li><a href="#" className="hover:underline">Help & Support</a></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Partners and Loans</a></li>
                            <li><a href="#" className="hover:underline">Aggregators</a></li>
                            <li><a href="#" className="hover:underline">Fact Sheet</a></li>
                            <li><a href="#" className="hover:underline">Recovery and Collection</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}