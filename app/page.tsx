export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Freelancers &amp; Gig Workers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-Track Business Miles<br />
          <span className="text-[#58a6ff]">for Freelancer Taxes</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          GPS-powered mileage tracking that automatically separates business from personal trips, applies IRS rates, and exports audit-ready reports — so you keep more of what you earn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automatic GPS trip detection</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart business/personal categorization</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> IRS-compliant PDF reports</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cancel anytime</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to maximize your mileage deductions</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited trip tracking",
              "Auto business/personal split",
              "Client address rules engine",
              "Time-pattern categorization",
              "IRS-rate mileage calculation",
              "PDF &amp; CSV export",
              "Mobile-first PWA",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does automatic trip detection work?</h3>
            <p className="text-sm text-[#8b949e]">MileTrack uses your browser&apos;s Geolocation API to detect when you start and stop moving. Trips are logged automatically and matched against your saved client addresses and time-of-day rules to classify them as business or personal — no manual logging needed.</p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Are the reports accepted by the IRS?</h3>
            <p className="text-sm text-[#8b949e]">Yes. MileTrack generates mileage logs that meet IRS Publication 463 requirements: date, destination, business purpose, and miles driven. Reports are exported as PDFs you can attach directly to your tax return or hand to your accountant.</p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I use this on my phone?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. MileTrack is built mobile-first and works as a Progressive Web App (PWA). Add it to your home screen on iOS or Android for a native-app feel with background trip tracking — no app store download required.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} MileTrack. Built for freelancers who hate overpaying taxes.</p>
      </footer>
    </main>
  );
}
