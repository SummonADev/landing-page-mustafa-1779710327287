import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: 'Is Luminary free to start?',
    a: 'Yes! Our Starter plan is completely free, forever. No credit card required. You can upgrade at any time as your team grows.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Absolutely. There are no long-term contracts. You can cancel, downgrade, or upgrade your plan at any time from your account settings.',
  },
  {
    q: 'How does real-time collaboration work?',
    a: 'Every change you make is synced instantly across all connected team members using WebSockets. You can see live cursors, changes, and comments from your entire team with zero latency.',
  },
  {
    q: 'What kind of code can I export?',
    a: 'Luminary exports clean, production-ready React (JSX/TSX) components with Tailwind CSS classes, or vanilla HTML/CSS. The output integrates seamlessly into any modern front-end codebase.',
  },
  {
    q: 'Is my data secure?',
    a: 'We take security extremely seriously. Luminary is SOC 2 Type II certified, all data is encrypted at rest and in transit, and we offer SSO/SAML for Enterprise customers. We never sell your data.',
  },
  {
    q: 'Do you offer discounts for startups or non-profits?',
    a: 'Yes! We have special pricing for early-stage startups, educational institutions, and non-profit organisations. Reach out to our team at hello@luminary.io to learn more.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Frequently asked
            <br />
            <span className="gradient-text">questions</span>
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#16162a] border border-[#2a2a45] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={clsx(
                    'w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={clsx(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-40' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
