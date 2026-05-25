import { Layers, Zap, Shield, Users, BarChart2, Globe } from 'lucide-react';
import clsx from 'clsx';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
};

const features: Feature[] = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Component-first design',
    description:
      'Build reusable UI components that scale across your entire product. Every change propagates instantly across all screens.',
    highlight: true,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning-fast prototyping',
    description:
      'Go from idea to interactive prototype in minutes. Share with stakeholders and collect feedback without leaving the platform.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Real-time collaboration',
    description:
      'Your entire team works together simultaneously. See cursors, edits, and comments happen live — no more version conflicts.',
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Built-in analytics',
    description:
      'Track engagement, spot friction points, and make data-driven design decisions without switching to another tool.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II certified, end-to-end encryption, SSO support, and granular role-based permissions for every team.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Publish anywhere',
    description:
      'One-click publish to a CDN-backed URL, or export clean React / HTML code directly into your existing codebase.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            A complete toolkit for modern product teams — from ideation to production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={clsx(
                'card-hover relative rounded-2xl border p-6',
                f.highlight
                  ? 'bg-gradient-to-br from-[#1e1b4b] to-[#16162a] border-brand-600/50'
                  : 'bg-[#16162a] border-[#2a2a45]'
              )}
            >
              {f.highlight && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at top left, rgba(99,102,241,0.15) 0%, transparent 60%)',
                  }}
                />
              )}
              <div
                className={clsx(
                  'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
                  f.highlight
                    ? 'gradient-bg text-white'
                    : 'bg-[#0f0f1a] border border-[#2a2a45] text-brand-400'
                )}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
