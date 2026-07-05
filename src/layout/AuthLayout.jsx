import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white grid lg:grid-cols-2">

      <div className="hidden lg:flex flex-col justify-center px-20 relative overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl" />

        <h1 className="text-5xl font-bold leading-tight z-10">
          Abdus Sakur Taimy
        </h1>

        <p className="mt-6 text-gray-400 max-w-md z-10 text-lg">
          A platform dedicated to spreading authentic Islamic knowledge
          through articles, khutbas, and scholarly resources.
        </p>

        <p className="mt-10 text-sm text-gray-500 z-10 italic">
          “And say: My Lord, increase me in knowledge.”
        </p>
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-black/60 backdrop-blur-2xl 
        border border-white/10 rounded-3xl p-10 shadow-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
