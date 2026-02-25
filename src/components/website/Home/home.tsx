"use client";

import Footer from "./footer/page";
import Sample from "./samplelist";
import JoinUs from "./joinUs";
import Model from "./model";
import Procedure from "./procedure";
import Disclaimer from "./disclaimer";
import SpecialFeatures from "./specialFeatures";
import GoToTopButton from "@/common/Button/goToTop";
import LoanTypes from "../loanType";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-black text-white">
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          {/* Floating Phone */}
          <img
            src="/phone-mockup.png"
            alt="App Screenshot"
            className="hidden md:block absolute right-6 top-16 w-[220px] lg:w-[300px] animate-float"
          />

          {/* Hero Content */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp">
              Experience smart investing by lending to{" "}
              <span className="text-indigo-400">creditworthy borrowers</span>{" "}
              through peer-to-peer lending in India.
            </h1>

            <p className="text-base sm:text-lg text-indigo-100 animate-fadeInUp delay-150">
              With a historical <span className="font-semibold">XIRR 11.28% p.a.</span>,{" "}
              <span className="font-semibold">Bigwin Infotech</span> gives lenders a
              rewarding, transparent investment opportunity.
            </p>

            <p className="text-base sm:text-lg text-indigo-100 animate-fadeInUp delay-300">
              Join <span className="font-semibold">India’s largest P2P lending platform</span>{" "}
              and earn consistent returns daily or monthly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeInUp delay-500">
              <a
                href="/login"
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition transform hover:scale-105 shadow-lg"
              >
                Start Now
              </a>
              <a
                href="/about"
                className="px-6 py-3 rounded-full border border-white/40 hover:bg-white hover:text-indigo-900 transition transform hover:scale-105"
              >
                About Us
              </a>
            </div>
          </div>

          {/* RBI Badge */}
          <div className="fixed bottom-4 left-4 z-50">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/70 backdrop-blur border border-white/20">
              <img src="/approved.svg" className="w-6 h-6" />
              <span className="text-xs">RBI Certified NBFC P-2-P</span>
            </div>
          </div>
        </div>
      </div>


      <div className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Features Heading */}
          {/* <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 px-2">
            Why join the largest P2P lending platform in India?
          </h2> */}

          {/* Features Grid */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-12">
                Why join India’s largest P2P lending platform?
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    title: "Portfolio Diversification",
                    text: "Move beyond traditional market-linked instruments.",
                    icon: "/portfolio.png",
                  },
                  {
                    title: "Low Entry Barrier",
                    text: "Start lending with just ₹25,000.",
                    icon: "/rupee.png",
                  },
                  {
                    title: "Attractive Interest",
                    text: "Earn consistent interest on loans.",
                    icon: "/interest-rate.png",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                  >
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-indigo-600/10 flex items-center justify-center group-hover:scale-110 transition">
                      <img src={item.icon} className="w-8 h-8 " />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <JoinUs />
              </div>
            </div>
          </div>

          {/* <div className="p-4 sm:p-8"><JoinUs /></div> */}
        </div>
      </div>

      {/* Rest of your components */}
      <Sample />
      <Model />
      <Procedure />
      <SpecialFeatures />
      <Footer />
      <GoToTopButton />
      <Disclaimer />
    </>
  )
}