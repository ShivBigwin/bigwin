"use client";
export default function SpecialFeatures() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Gain Value from Our Exclusive Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden group transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition-colors duration-300">📝</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                We're Committed to Making Financial Access Universal
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                We empower platforms that support individuals—like small business
                owners, families, and first-time borrowers—in gaining the
                financial resources they need. As our partners grow, the
                communities they serve grow with them.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden group transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition-colors duration-300">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                Committed to Compliance and Openness
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                We follow RBI regulations with utmost diligence and ensure
                complete transparency across all our processes. This builds trust,
                fosters accountability, and lays a strong foundation for lasting
                partnerships.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden group transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition-colors duration-300">⏱️</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                Continuous Support Beyond Funding
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                Our collaboration goes beyond just providing capital — we offer
                ongoing guidance and support to help ensure long-term growth and
                success.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden group transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition-colors duration-300">⏱️</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                Technology-Enabled Financial Solutions
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                We support companies that leverage cutting-edge technology to make
                lending more efficient, accessible, and equitable. We believe the
                future of finance should be seamless, secure, and inclusive for
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// // components/SpecialFeatures.tsx
// "use client";
// export default function SpecialFeatures() {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
//           Gain Value from Our Exclusive Features
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border">
//           {/* Feature 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-shadow ">
//             <div className=" text-blue-600 text-4xl mb-4">📝</div>
//             <h3 className="text-xl font-semibold mb-3">
//               We’re Committed to Making Financial Access Universal
//             </h3>
//             <p className="text-gray-600">
//               We empower platforms that support individuals—like small business
//               owners, families, and first-time borrowers—in gaining the
//               financial resources they need. As our partners grow, the
//               communities they serve grow with them.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-blue-600 text-4xl mb-4">👨‍🏫</div>
//             <h3 className="text-xl font-semibold mb-3">
//               Committed to Compliance and Openness
//             </h3>
//             <p className="text-gray-600">
//               We follow RBI regulations with utmost diligence and ensure
//               complete transparency across all our processes. This builds trust,
//               fosters accountability, and lays a strong foundation for lasting
//               partnerships.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-blue-600 text-4xl mb-4">⏱️</div>
//             <h3 className="text-xl font-semibold mb-3">
//               Continuous Support Beyond Funding
//             </h3>
//             <p className="text-gray-600">
//               Our collaboration goes beyond just providing capital — we offer
//               ongoing guidance and support to help ensure long-term growth and
//               success.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-blue-600 text-4xl mb-4">⏱️</div>
//             <h3 className="text-xl font-semibold mb-3">
//               Technology-Enabled Financial Solutions
//             </h3>
//             <p className="text-gray-600">
//               We support companies that leverage cutting-edge technology to make
//               lending more efficient, accessible, and equitable. We believe the
//               future of finance should be seamless, secure, and inclusive for
//               all.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
