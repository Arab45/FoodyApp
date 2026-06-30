// function Footer() {
//   return (
//     <footer className="bg-blue-800 text-white text-center py-6 mt-auto">
//       <p className="text-lg font-semibold">
//         © 2026 Foody. All rights reserved.
//       </p>

//       <p className="mt-2">
//         Delicious meals made with love 🍽️
//       </p>

//       <p className="mt-2">
//         Contact us:
//         <a
//           href="mailto:foody@gmail.com"
//           className="text-yellow-300 ml-1 hover:underline"
//         >
//           foody@gmail.com
//         </a>
//       </p>
//     </footer>
//   )
// }

// export default Footer

import {
  Mail,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#04281d] to-[#0B3D2E] text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold">
              EBA NETWORK
            </h2>

            <p className="mt-2">
              Research. Review. Empower.
            </p>

            <p className="mt-6 text-gray-300">
              Helping you stand out.
              Helping you go further.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              QUICK LINKS
            </h3>

            <div className="space-y-2">
              <p>Home</p>
              <p>Services</p>
              <p>Scholarships</p>
              <p>About</p>
              <p>Resources</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              RESOURCES
            </h3>

            <div className="space-y-2">
              <p>CV Tips</p>
              <p>Scholarship Tips</p>
              <p>LinkedIn Updates</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              CONNECT
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Globe />
                <span>LinkedIn Profile</span>
              </div>

              <div className="flex gap-3">
                <Mail />
                <span>Email Me</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          © 2026 EBA NETWORK. All rights reserved.
        </div>

      </div>
    </footer>
  );
}