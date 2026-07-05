// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Menu,
//   X,
//   BookOpen,
//   ScrollText,
//   FileText,
//   LogIn,
//   Shield,
//   Download,
//   Signpost
// } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false);

//   const navLinks = [
//     { name: "Tafser", path: "/tafser", icon: FileText },
//     { name: "Articles", path: "/articles", icon: BookOpen },
//     { name: "Khutba", path: "/khutba", icon: ScrollText },
//     { name: "Contact", path: "/contact", icon: FileText },
//     { name: "Downloads", path: "/downloads", icon: Download },
//     { name: "Guides", path: "/guides", icon: Signpost },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         <Link to="/" className="text-xl font-bold text-emerald-400 tracking-wide">
//         عبد الشكور تيمي
//         </Link>

//         <div className="hidden md:flex items-center gap-10 text-sm">
//           {navLinks.map(({ name, path }) => (
//             <NavLink
//               key={name}
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-emerald-400"
//                   : "text-gray-300 hover:text-white transition"
//               }
//             >
//               {name}
//             </NavLink>
//           ))}

//           <div className="relative">
//             <button
//               onClick={() => setAuthOpen(!authOpen)}
//               className="flex items-center gap-2 px-4 py-2 rounded-full
//               bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition"
//             >
//               <LogIn size={16} />
//               Sign In
//             </button>

//             {authOpen && (
//               <div className="absolute right-0 mt-3 w-44 bg-black border border-white/10 rounded-xl shadow-xl overflow-hidden">
//                 <Link
//                   to="/login"
//                   onClick={() => setAuthOpen(false)}
//                   className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
//                 >
//                   <LogIn size={14} />
//                   User Login
//                 </Link>

//                 <Link
//                   to="/admin/login"
//                   onClick={() => setAuthOpen(false)}
//                   className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
//                 >
//                   <Shield size={14} />
//                   Admin Login
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-gray-200"
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </nav>

//       {open && (
//         <div className="md:hidden bg-black/95 border-t border-white/10">
//           <div className="flex flex-col px-6 py-6 gap-6">

//             {navLinks.map(({ name, path, icon: Icon }) => (
//               <NavLink
//                 key={name}
//                 to={path}
//                 onClick={() => setOpen(false)}
//                 className="flex items-center gap-3 text-gray-300 hover:text-emerald-400"
//               >
//                 <Icon size={18} />
//                 {name}
//               </NavLink>
//             ))}

//             <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
//               <Link
//                 to="/login"
//                 onClick={() => setOpen(false)}
//                 className="flex items-center gap-3 text-gray-300"
//               >
//                 <LogIn size={18} />
//                 User Login
//               </Link>

//               <Link
//                 to="/admin/login"
//                 onClick={() => setOpen(false)}
//                 className="flex items-center gap-3 text-gray-300"
//               >
//                 <Shield size={18} />
//                 Admin Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  BookOpen,
  ScrollText,
  FileText,
  LogIn,
  Shield,
  Download,
  Signpost
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const navLinks = [
    { name: "Tafser", path: "/tafser", icon: FileText },
    { name: "Articles", path: "/articles", icon: BookOpen },
    { name: "Khutba", path: "/khutba", icon: ScrollText },
    { name: "Contact", path: "/contact", icon: FileText },
    { name: "Downloads", path: "/downloads", icon: Download },
    { name: "Guides", path: "/guides", icon: Signpost },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-amber-400 tracking-wide">
        عبد الشكور تيمي
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              {name}
            </NavLink>
          ))}

          <div className="relative">
            <button
              onClick={() => setAuthOpen(!authOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition"
            >
              <LogIn size={16} />
              Sign In
            </button>

            {authOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-black border border-white/10 rounded-xl shadow-xl overflow-hidden">
                <Link
                  to="/login"
                  onClick={() => setAuthOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
                >
                  <LogIn size={14} />
                  User Login
                </Link>

                <Link
                  to="/admin/login"
                  onClick={() => setAuthOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
                >
                  <Shield size={14} />
                  Admin Login
                </Link>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6">

            {navLinks.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400"
              >
                <Icon size={18} />
                {name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-gray-300"
              >
                <LogIn size={18} />
                User Login
              </Link>

              <Link
                to="/admin/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-gray-300"
              >
                <Shield size={18} />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;