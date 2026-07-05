const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm tracking-wide">
          Loading knowledge…
        </p>
      </div>
    </div>
  );
};

export default Loader;
