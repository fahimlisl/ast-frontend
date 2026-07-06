// import { Facebook } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden bg-[#020617] border-t border-white/10">

//       <div
//         className="absolute -bottom-40 left-1/2 -translate-x-1/2 
//         w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"
//       />

//       <div className="relative max-w-7xl mx-auto px-6 py-20">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

//           <div>
//             <h3 className="text-2xl font-bold text-emerald-400 mb-4">
//             عبد الشكور تيمي
//             </h3>

//             <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
//               A platform dedicated to spreading authentic Islamic
//               knowledge through articles, khutbas, and scholarly
//               resources — shared with sincerity and clarity.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
//               Explore
//             </h4>

//             <ul className="space-y-3 text-sm text-gray-400">
//               <li>
//                 <Link to="/articles" className="hover:text-emerald-400 transition">
//                   Articles
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/khutba" className="hover:text-emerald-400 transition">
//                   Khutbas
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-emerald-400 transition">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/downloads" className="hover:text-emerald-400 transition">
//                   Downloads
//                 </Link>
//               </li>
//             </ul>

//             <div className="mt-8">
//               <h5 className="text-xs font-semibold text-white mb-3 tracking-wide">
//                 Connect
//               </h5>

//               <div className="flex items-center gap-4">
//                 <a
//                   href="https://www.facebook.com/mdtuzzammel.haq"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg
//                   border border-white/10 text-gray-400
//                   hover:text-emerald-400 hover:border-emerald-400/40
//                   transition"
//                 >
//                   <Facebook size={18} />
//                   <span className="text-sm">Facebook</span>
//                 </a>

//                 <span className="flex items-center gap-2 px-3 py-2 rounded-lg
//                   border border-white/10 text-gray-500 cursor-not-allowed">
//                   <span className="text-sm">YouTube (soon)</span>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
//               Reminder
//             </h4>

//             <p className="text-emerald-400 text-sm mb-2">
//               وَقُل رَّبِّ زِدْنِي عِلْمًا
//             </p>

//             <p className="text-gray-400 text-sm leading-relaxed">
//               “And say: My Lord, increase me in knowledge.”
//             </p>
//           </div>
//         </div>

//         <div className="mt-16 border-t border-white/10" />

//         <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

//           <span>
//             © {new Date().getFullYear()} Abdus Sakur Taimy. All rights reserved.
//           </span>

//           <span className="flex items-center gap-1">
//             Developed & maintained by
//             <a
//               href="https://fahim.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-emerald-400 hover:underline ml-1"
//             >
//               Fahim Abdullah
//             </a>
//           </span>

//           <span className="italic">
//             Built with sincerity, shared for the Ummah.
//           </span>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0a0700] border-t border-white/10">

      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 
        w-[500px] h-[500px] bg-amber-500/15 blur-[120px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
            عبد الشكور تيمي
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A platform dedicated to spreading authentic Islamic
              knowledge through articles, khutbas, and scholarly
              resources — shared with sincerity and clarity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Explore
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/articles" className="hover:text-amber-400 transition">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/khutba" className="hover:text-amber-400 transition">
                  Khutbas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-amber-400 transition">
                  Downloads
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-xs font-semibold text-white mb-3 tracking-wide">
                Connect
              </h5>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/14h85B2gS8J/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg
                  border border-white/10 text-gray-400
                  hover:text-amber-400 hover:border-amber-400/40
                  transition"
                >
                  <Facebook size={18} />
                  {/* <span className="text-sm">Facebook</span> */}
                </a>
                              <a 
                href="https://youtube.com/@abdussakurtaimy?si=xhraClloYvz3fxHF"
                className="px-4 py-2 rounded-full  border border-white/10  transition"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Youtube className="text-red-500" size={18} />
              </a>

                {/* <span className="flex items-center gap-2 px-3 py-2 rounded-lg
                  border border-white/10 text-gray-500 cursor-not-allowed">
                  <span className="text-sm">YouTube (soon)</span>
                </span> */}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Reminder
            </h4>

            <p className="text-amber-400 text-sm mb-2">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              "And say: My Lord, increase me in knowledge."
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10" />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <span>
            © {new Date().getFullYear()} Abdus Sakur Taimy. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Developed & maintained by
            <a
              href="https://fahim.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline ml-1"
            >
              Fahim Abdullah
            </a>
          </span>

          <span className="italic">
            Built with sincerity, shared for the Ummah.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;