import { NavLink, useNavigate } from "react-router-dom";
import { adminLogout } from "../../api/auth.api.js";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await adminLogout();
      navigate("/admin/login");
    } catch (err) {
      alert("Logout failed. Please try again.");
    }
  };

  return (
    // <aside className="w-64 bg-black border-r border-white/10 hidden md:flex flex-col">
    <aside className="w-64 bg-black border-r border-white/10 flex flex-col h-full">

      <div className="p-6 border-b border-white/10">
        <h2 className="text-lg font-semibold text-emerald-400">
          Admin Panel
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Abdus Sakur Taimy
        </p>
      </div>

      <nav className="p-4 space-y-2 text-sm flex-1">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400"
                : "hover:bg-white/5"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/articles"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400"
                : "hover:bg-white/5"
            }`
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/admin/khutba"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400"
                : "hover:bg-white/5"
            }`
          }
        >
          Khutba
        </NavLink>

        <NavLink
          to="/admin/tafser"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400"
                : "hover:bg-white/5"
            }`
          }
        >
          Tafser
        </NavLink>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2
          px-4 py-2 rounded-xl text-sm font-medium
          bg-red-500/10 text-red-400
          hover:bg-red-500/20 transition"
        >
          ⏻ Logout
        </button>
      </div>

    </aside>
  );
};

export default AdminSidebar;
