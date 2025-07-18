import React from "react";

const Capabilities = () => (
  <section
    id="capabilities"
    className="relative py-12 px-6 sm:px-12 my-10 rounded-3xl overflow-hidden max-w-4xl mx-auto bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#0f2027] shadow-2xl border-[1.5px] border-white/20 backdrop-blur-xl"
    style={{
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      border: '1.5px solid rgba(255,255,255,0.15)',
    }}
  >
    {/* Animated Glows */}
    <span className="absolute w-28 h-28 bg-fuchsia-700 opacity-60 blur-2xl rounded-full left-[-32px] top-[-32px] animate-pulse" />
    <span className="absolute w-20 h-20 bg-cyan-500 opacity-50 blur-2xl rounded-full bottom-[-24px] right-[-24px] animate-ping" />

    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-lg text-center uppercase tracking-wider mb-4">
      AI & Analytics Capabilities
    </h2>
    <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 max-w-2xl mx-auto">
      Unlock <span className="font-bold text-fuchsia-300">business breakthroughs</span> with futuristic, automated intelligence.
      <span className="block opacity-80 mt-2">From real-time dashboards to NLP, we deliver actionable insights at the speed of tomorrow.</span>
    </p>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center">
      {/* Feature Card 1 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-cyan-300"><circle cx="19" cy="19" r="18" stroke="#67e8f9" strokeWidth="2"/><path d="M19 9v10l6 4" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round"/></svg>
        <h3 className="text-xl font-semibold text-cyan-200 mb-2">Predictive Analytics</h3>
        <p className="text-sm text-gray-200 text-center">Machine learning that forecasts trends and customer actions, before they happen.</p>
      </div>
      {/* Feature Card 2 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-fuchsia-300"><rect x="7" y="13" width="24" height="12" rx="4" stroke="#f0abfc" strokeWidth="2"/><path d="M19 17v2" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round"/></svg>
        <h3 className="text-xl font-semibold text-fuchsia-200 mb-2">Smart Dashboards</h3>
        <p className="text-sm text-gray-200 text-center">Interactive dashboards reveal insights, KPIs, and deep-dives at a glance.</p>
      </div>
      {/* Feature Card 3 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-violet-300"><path d="M9 12l10 10m0 0l8-8m-8 8L9 12" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/></svg>
        <h3 className="text-xl font-semibold text-violet-200 mb-2">NLP & Automation</h3>
        <p className="text-sm text-gray-200 text-center">AI reads, understands, and automates text, voice, and workflow for faster business.</p>
      </div>
      {/* Feature Card 4 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-teal-300"><circle cx="19" cy="19" r="16" stroke="#5eead4" strokeWidth="2"/><path d="M14 19l4 4 7-7" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"/></svg>
        <h3 className="text-xl font-semibold text-teal-200 mb-2">Automated Insights</h3>
        <p className="text-sm text-gray-200 text-center">Realtime data, pattern recognition, automated alerts, and smart recommendations.</p>
      </div>
      {/* Feature Card 5 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-pink-300"><rect x="7" y="7" width="24" height="24" rx="8" stroke="#f9a8d4" strokeWidth="2"/><circle cx="19" cy="19" r="5" stroke="#f9a8d4" strokeWidth="2"/></svg>
        <h3 className="text-xl font-semibold text-pink-200 mb-2">Custom AI Solutions</h3>
        <p className="text-sm text-gray-200 text-center">End-to-end pipelines crafted for your unique business and data challenges.</p>
      </div>
      {/* Feature Card 6 */}
      <div className="bg-white/10 rounded-2xl border border-white/15 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
        <svg width="38" height="38" fill="none" className="mb-3 text-yellow-300"><path d="M19 4v30M4 19h30" stroke="#facc15" strokeWidth="2" strokeLinecap="round"/></svg>
        <h3 className="text-xl font-semibold text-yellow-200 mb-2">Cross-Industry Impact</h3>
        <p className="text-sm text-gray-200 text-center">From health to fintech, our AI adapts quickly to deliver transformation where it counts.</p>
      </div>
    </div>
    <div className="text-center mt-8">
      <button className="px-8 py-3 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg font-bold shadow-lg transition-colors duration-200 border border-white/20 backdrop-blur-lg">
        Book a Free AI Consultation 🚀
      </button>
    </div>
  </section>
);

export default Capabilities;
