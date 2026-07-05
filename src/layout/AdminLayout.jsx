import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">

      <div className="hidden md:flex">
        <AdminSidebar />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <AdminSidebar />
          </div>
        </div>
      )}

      <main className="flex-1 p-4 md:p-10 w-full">

        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>

          <h1 className="text-sm text-gray-400">
            Admin Panel
          </h1>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
