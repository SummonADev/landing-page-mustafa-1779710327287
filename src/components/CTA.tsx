import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-bg opacity-90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-6">
            <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Start building today.
              <br />
              It's free.
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
              Join 10,000+ teams already shipping better products faster with Luminary. No credit card
              needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-colors"
              >
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
