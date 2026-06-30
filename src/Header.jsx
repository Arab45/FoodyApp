// import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="bg-blue-900 text-white px-8 py-5">
//       <div className="flex justify-between items-center">
        
//         {/* Brand */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold tracking-wide">
//             EBA NETWORK
//           </h1>
//           <p className="text-sm text-blue-200">
//             Touching lives with opportunities
//           </p>
//         </div>

//         {/* Navigation */}
//         <ul className="flex gap-8 text-lg font-medium">
//           <li className="hover:text-yellow-300 cursor-pointer">Home</li>
//           <li className="hover:text-green-300 cursor-pointer">About</li>
//           {/* <li className="hover:text-red-300 cursor-pointer">Menu</li> */}
//           <li className="hover:text-yellow-200 cursor-pointer">Contact</li>
//         </ul>

//       </div>
//     </header>
//   )
// }

// export default Header

// components/Header.jsx

import { ArrowRight } from "lucide-react";

export default function Header() {
  const navItems = [
    "Home",
    "Services",
    "Scholarships",
    "About",
    "Resources",
    "Contact",
  ];

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-[#0B3D2E] flex items-center justify-center">
            <span className="text-white text-2xl">🎓</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#0B3D2E]">
              EBA NETWORK
            </h1>

            <p className="text-gray-600 text-sm">
              Research. Review. Empower.
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="/"
              className="font-medium hover:text-[#0B3D2E]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Button */}
        <button className="bg-[#0B3D2E] text-white px-7 py-3 rounded-lg flex items-center gap-2 hover:bg-[#14543f]">
          Let's Connect
          <ArrowRight size={18} />
        </button>
      </div>
    </header>
  );
}