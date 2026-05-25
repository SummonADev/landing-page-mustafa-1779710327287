import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, #6366f1 0%, #a855f7 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #f43f5e 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-[30%] left-[-100px] w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #06b6d4 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#2a2a45] bg-[#16162a] text-sm text-slate-300">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="#facc15" />
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="#facc15" />
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="#facc15" />
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="#facc15" />
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="#facc15" />
          </span>
          <span className="text-slate-400">Loved by 10,000+ teams worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          Build products your
          <br />
          <span className="gradient-text">users will love</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Luminary gives your team a collaborative workspace to design, prototype, and ship
          world-class digital products — in a fraction of the time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity glow"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-[#16162a] border border-[#2a2a45] text-slate-300 font-semibold px-8 py-3.5 rounded-xl text-base hover:border-[#4f46e5] hover:text-white transition-all"
          >
            <Play className="w-4 h-4 text-brand-400" fill="currentColor" />
            Watch demo
          </a>
        </div>

        {/* Hero image / dashboard mockup */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#2a2a45] bg-[#16162a] p-2 glow">
            <div className="rounded-xl overflow-hidden border border-[#2a2a45] bg-[#0f0f1a]">
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a45]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-4 bg-[#16162a] rounded-md h-6 flex items-center px-3">
                  <span className="text-xs text-slate-500">app.luminary.io/dashboard</span>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 grid grid-cols-3 gap-4 min-h-[280px]">
                <div className="col-span-3 sm:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[['Total Projects', '128', '+12%'], ['Active Users', '4,921', '+8%']].map(([label, value, badge]) => (
                      <div key={label} className="bg-[#16162a] border border-[#2a2a45] rounded-xl p-4">
                        <p className="text-xs text-slate-500 mb-1">{label}</p>
                        <p className="text-2xl font-bold text-white">{value}</p>
                        <span className="inline-block mt-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">{badge}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#16162a] border border-[#2a2a45] rounded-xl p-4 h-32 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, #6366f1, #a855f7)`,
                          opacity: 0.6 + i * 0.03,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-1 space-y-3">
                  {['Design System', 'Component Library', 'User Research', 'Sprint Planning'].map((item, i) => (
                    <div key={item} className="bg-[#16162a] border border-[#2a2a45] rounded-lg p-3 flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: ['#6366f1', '#a855f7', '#f43f5e', '#06b6d4'][i] }}
                      />
                      <span className="text-xs text-slate-400 truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
