const Guides = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Islamic Guides
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Structured learning paths and step-by-step guidance are being carefully prepared — designed to help you grow with clarity, purpose, and authenticity.
        </p>
      </div>

      <div 
        className="max-w-3xl mx-auto border border-white/10 rounded-3xl p-10
        bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
        text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16
          rounded-full bg-emerald-500/20 text-emerald-400 mb-6 text-2xl"
        >
          🧭
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Guides Coming Soon
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          We are currently working on a set of structured Islamic guides that will help you
          learn step-by-step — from the fundamentals to deeper understanding.
          Each guide will be simple, practical, and rooted in authentic sources.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🕌 Beginner Paths
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            📖 Qur'an Guides
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🧠 Knowledge Roadmaps
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🎯 Practical Steps
          </span>
        </div>

        <p className="mt-8 text-xs italic text-gray-500">
          Currently in development — launching soon, in shaa Allah.
        </p>
      </div>

      <div className="my-20 border-t border-white/10" />

      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-3 text-emerald-400">
          What to Expect
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Clear, structured, and distraction-free guidance — helping you avoid confusion
          and focus on what truly matters in your journey of seeking knowledge.
        </p>
      </div>

      <div className="mt-24 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
        "And say, My Lord, increase me in knowledge." — Qur'an 20:114
      </div>
    </div>
  );
};

export default Guides;