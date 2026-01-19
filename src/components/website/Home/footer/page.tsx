"use client";
import Image from "next/image";
export default function Footer() {
    return (
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
                        <div className="text-2xl font-semibold mb-1 px-4 text-center animate-fall">
                            {" "}
                            BIGWIN INFOTECH
                            <p className="text-sm ">Innovate|Transform|Grow</p>
                        </div>
                    </div>
                    {/* Grid Section */}
                    <div className="mt-14 mb-8 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-teal-50">
                        {/* About */}
                        <div className="relative animate-fall">
                            <h3 className="text-xl font-semibold mb-4">Explore</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/home" className="hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="about" className="hover:underline">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="hover:underline">
                                        Become a partner
                                    </a>
                                </li>
                                <li>
                                    <a href="loanType" className="hover:underline">
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Lending */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Lending</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="dashboard" className="hover:underline">
                                        Portfolio Performance
                                    </a>
                                </li>
                                <li>
                                    <a href="dash" className="hover:underline">
                                        Who can lend?
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Credit Assesment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Help & Support
                                    </a>
                                </li>
                                <li>
                                    <a href="termsAndCondition" className="hover:underline">
                                        Terms Of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Fact Sheet
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Resources */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Important Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/blogs" className="hover:underline">
                                        Help And Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="policy" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Disclaimer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Refund and Cancellation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Fair Practice Code
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Grievance Redressal Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Interest Rate Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        {/* Contact Us */}
                        <div className="relative animate-fall text-left">
                            <h3 className="text-xl font-semibold mb-6 text-teal-100">
                                Contact Us:
                            </h3>

                            <div className="space-y-4 mr-2">
                                {/* Phone */}
                                <a
                                    href="tel:+919911998997"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                                        📞
                                    </div>
                                    <div>
                                        <p className="text-sm text-teal-200">Call Us</p>
                                        <p className="font-semibold text-white">+91 99119 98997</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@bigwininfotech.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="text-sm text-indigo-200">Email Us</p>
                                        <p className="font-semibold text-white">
                                            info@bigwininfotech.com
                                        </p>
                                    </div>
                                </a>

                                {/* Address (Optional but recommended) */}
                                <div className="flex items-start  gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                                        📍
                                    </div>
                                    <p className="text-sm text-indigo-100 leading-relaxed">
                                        BIGWIN INFOTECH<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

// Privacy Policy
// Disclaimer
// Terms & Condition
// Refund & Cancellation
// Fair Practice Code
// Grievance Redressal Policy
// Interest Rate Policy
// Anti Money Laundering
