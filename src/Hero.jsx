// const foods = [
//   {
//     name: "Apple",
//     image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
//   },
//   {
//     name: "Mango",
//     image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
//   },
//   {
//     name: "Water Melon",
//     image: "https://images.unsplash.com/photo-1563114773-84221bd62daa",
//   },
// ];

// function Food() {
//   return (
//     <section className="py-10 px-6 text-center">
//       <h2 className="text-4xl font-bold mb-3 text-white">
//         Fresh & Healthy Fruits 🍎
//       </h2>

//       <p className="text-white mb-8">
//         Enjoy delicious fruits packed with vitamins and natural goodness.
//       </p>

//       <div className="grid md:grid-cols-3 gap-8">
//         {foods.map((food) => (
//           <div
//             key={food.name}
//             className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition"
//           >
//             <img
//               src={food.image}
//               alt={food.name}
//               className="w-full h-56 object-cover rounded-lg"
//             />

//             <h3 className="text-2xl font-semibold mt-4 text-blue-800">
//               {food.name}
//             </h3>

//             <p className="text-gray-600 mt-2">
//               Fresh, juicy and perfect for a healthy lifestyle.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Food;

// components/Hero.jsx

import {
  FileText,
  Globe,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-20">

        {/* Left */}
        <div>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-[#0B3D2E] mb-8">
            ● WELCOME TO EBA NETWORK
          </div>

          <h1 className="text-7xl font-black leading-tight">
            Researcher.
            <br />
            Scholar.
            <span className="text-[#0B3D2E]">
              {" "}Mentor.
            </span>
          </h1>

          <div className="w-20 h-1 bg-[#0B3D2E] mt-8 mb-8"></div>

          <p className="text-gray-600 text-xl leading-9 max-w-xl">
            Helping students and professionals present
            their best through impactful CVs and access
            to global opportunities.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-[#0B3D2E] text-white px-8 py-4 rounded-lg">
              Explore Services
            </button>

            <button className="border border-[#0B3D2E] px-8 py-4 rounded-lg">
              View Scholarships
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16">

            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center">
                <FileText />
              </div>

              <div>
                <h3 className="font-bold">1000+</h3>
                <p className="text-gray-600">
                  CVs Reviewed
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center">
                <Globe />
              </div>

              <div>
                <h3 className="font-bold">500+</h3>
                <p className="text-gray-600">
                  Scholarships Shared
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center">
                <Users />
              </div>

              <div>
                <h3 className="font-bold">
                  Years of
                </h3>

                <p className="text-gray-600">
                  Academic Experience
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="relative">

          <div className="bg-linear-to-br from-[#0B3D2E] to-[#14543f] rounded-[50px] overflow-hidden h-[650px]">

            <img
              src="/researcher.png"
              alt="researcher"
              className="w-full h-full object-cover"
            />

          </div>

          <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-2xl p-8 max-w-md">

            <div className="text-5xl text-[#0B3D2E]">
              "
            </div>

            <p className="text-lg">
              Committed to academic excellence
              and creating opportunities
              <span className="font-bold text-[#0B3D2E]">
                {" "}for a better future.
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}