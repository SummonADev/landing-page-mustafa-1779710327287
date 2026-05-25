import { PenTool, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <PenTool className="w-7 h-7" />,
    number: '01',
    title: 'Design',
    description:
      'Start from a blank canvas or choose from 500+ professional templates. Build components visually with our intuitive drag-and-drop editor.',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    number: '02',
    title: 'Prototype & test',
    description:
      'Add interactions, animations, and real data to your designs. Run usability tests and gather insights directly inside Luminary.',
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    number: '03',
    title: 'Ship',
    description:
      'Export production-ready React components or publish instantly to a shareable URL. Your designs go live in seconds, not sprints.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            From idea to production
            <br />
            <span className="gradient-text">in three steps</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            We've distilled the entire product development workflow into a beautifully simple process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                {/* Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white glow-sm">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#16162a] border border-[#2a2a45] text-xs text-slate-400 flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image/screen mockup strip */}
        <div className="mt-20 rounded-2xl border border-[#2a2a45] bg-[#16162a] p-6 overflow-hidden relative">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Works with your stack</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Connect Luminary to GitHub, Jira, Slack, Figma, Notion, and 40+ integrations. Your
                workflow, amplified.
              </p>
              <div className="flex flex-wrap gap-3">
                {['GitHub', 'Jira', 'Slack', 'Figma', 'Notion', 'Vercel'].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-[#0f0f1a] border border-[#2a2a45] text-sm text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-[#2a2a45] bg-[#0f0f1a] flex items-center justify-center text-2xl"
                    style={{
                      opacity: 0.4 + i * 0.07,
                    }}
                  >
                    {['⚡', '🎨', '🚀', '🔧', '📊', '🛡️', '🌐', '💬', '🔗'][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
