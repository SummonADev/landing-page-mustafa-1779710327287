import { Check } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small side projects.',
    features: [
      'Up to 3 projects',
      '2 collaborators',
      '5 GB storage',
      'Community templates',
      'Shareable links',
    ],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For growing teams shipping products at speed.',
    features: [
      'Unlimited projects',
      'Up to 20 collaborators',
      '50 GB storage',
      'Premium templates',
      'Custom domains',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Start 14-day free trial',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'Advanced security & compliance for large organisations.',
    features: [
      'Everything in Pro',
      'Unlimited collaborators',
      '500 GB storage',
      'SSO / SAML',
      'Audit logs',
      'Dedicated success manager',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 p-1 rounded-full bg-[#16162a] border border-[#2a2a45]">
            <button
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all',
                !yearly ? 'gradient-bg text-white' : 'text-slate-400 hover:text-white'
              )}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all',
                yearly ? 'gradient-bg text-white' : 'text-slate-400 hover:text-white'
              )}
              onClick={() => setYearly(true)}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative rounded-2xl border p-8 flex flex-col',
                plan.highlight
                  ? 'bg-gradient-to-b from-[#1e1b4b] to-[#16162a] border-brand-600/70 glow'
                  : 'bg-[#16162a] border-[#2a2a45]'
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-400 text-sm mb-1">/mo</span>
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/yr)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'block text-center py-3 rounded-xl font-semibold text-sm transition-all',
                  plan.highlight
                    ? 'gradient-bg text-white hover:opacity-90'
                    : 'bg-[#0f0f1a] border border-[#2a2a45] text-slate-300 hover:border-brand-600 hover:text-white'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
