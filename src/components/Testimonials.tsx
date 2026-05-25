import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Luminary cut our design-to-dev handoff time by 60%. The component export feature alone has saved us dozens of hours every sprint.',
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Waveline',
    avatar: 'SC',
  },
  {
    quote:
      "I've used every design tool out there. Nothing comes close to Luminary's real-time collaboration. It feels like magic the first time you see it.",
    name: 'Marcus Webb',
    role: 'Lead Designer',
    company: 'NovaBuild',
    avatar: 'MW',
  },
  {
    quote:
      'We shipped our MVP in 3 weeks using Luminary. The templates are stunning and customizable. Our investors loved the prototypes we demoed.',
    name: 'Priya Ramaswamy',
    role: 'Co-founder & CTO',
    company: 'Orbitly',
    avatar: 'PR',
  },
  {
    quote:
      'Security was our top concern. Luminary\'s SOC 2 certification and granular permissions gave our enterprise clients the confidence they needed.',
    name: 'James O'Brien',
    role: 'VP Engineering',
    company: 'SecureStack',
    avatar: 'JO',
  },
  {
    quote:
      'The analytics integration is a game-changer. We finally understand how users interact with our designs before writing a single line of code.',
    name: 'Amara Diallo',
    role: 'UX Researcher',
    company: 'Pulse Labs',
    avatar: 'AD',
  },
  {
    quote:
      'Onboarding the whole team took under an hour. The learning curve is basically zero. We were shipping polished prototypes on day one.',
    name: 'Lena Hoffmann',
    role: 'Design Lead',
    company: 'Kreativ AG',
    avatar: 'LH',
  },
];

const avatarColors = [
  'from-violet-500 to-indigo-600',
  'from-pink-500 to-rose-600',
  'from-cyan-500 to-blue-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-fuchsia-500 to-purple-600',
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Trusted by product teams
            <br />
            <span className="gradient-text">at top companies</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover bg-[#16162a] border border-[#2a2a45] rounded-2xl p-6 flex flex-col"
            >
              <Quote className="w-6 h-6 text-brand-400 mb-4 flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {['Waveline', 'NovaBuild', 'Orbitly', 'SecureStack', 'Pulse Labs', 'Kreativ AG'].map((c) => (
            <span key={c} className="text-slate-300 font-semibold text-sm tracking-wide">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
