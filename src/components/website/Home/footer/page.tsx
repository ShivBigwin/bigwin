"use client";
import Image from 'next/image';
export default function Footer(){
    return(
    <>
        <div className="h-fit p-8 relative  w-full overflow-hidden">
       
      <Image
        src="/foot.jpg" // Replace with your image path
        alt=" "
        fill
        className="object-cover"
        quality={100}
        priority
        />
            <div className="relative z-10 border border-white rounded-2xl h-full font-sans ">
                <div className=" mb-12 text-indigo-50 px-4 py-16">
                    <div className="text-2xl font-semibold mb-1 px-4 text-center animate-fall"> BIGWIN INFOTECH
                    <p className="text-sm ">Innovate|Transform|Grow</p> 
                    </div>
                </div>
                {/* Grid Section */}
                <div className="mt-14 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-teal-50">
                    {/* About */}
                    <div className='relative animate-fall'>
                        <h3 className="text-xl font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="/home" className="hover:underline">Home</a></li>
                            <li><a href="about" className="hover:underline">About</a></li>
                            <li><a href="/login" className="hover:underline">Become a partner</a></li>
                            <li><a href="loanType" className="hover:underline">Our Services</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Lending */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Lending</h3>
                        <ul className="space-y-2">
                            <li><a href="dashboard" className="hover:underline">Portfolio Performance</a></li>
                            <li><a href="dash" className="hover:underline">Who can lend?</a></li>
                            <li><a href="#" className="hover:underline">Credit Assesment</a></li>
                            <li><a href="#" className="hover:underline">Help & Support</a></li>
                            <li><a href="termsAndCondition" className="hover:underline">Terms Of Service</a></li>
                            <li><a href="#" className="hover:underline">Fact Sheet</a></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/blogs" className="hover:underline">Help And Support</a></li>
                            <li><a href="#" className="hover:underline">Terms Of Service</a></li>
                            <li><a href="policy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Aggregators</a></li>
                            <li><a href="#" className="hover:underline">Recovery and Collection</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}