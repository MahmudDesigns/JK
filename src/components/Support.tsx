import { useState } from 'react';

export default function Support() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', area: '', role: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  return (
    <section id="support" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
            Stand With Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxford mb-4">
            Support the Movement
          </h2>
          <p className="text-oxford/50 text-base max-w-lg mx-auto leading-relaxed">
            Every contribution — whether financial or your time — brings us one step closer to real representation for the people of Thika Town.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* M-Pesa Donation Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:shadow-teal/5 transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-oxford">Contribute via M-Pesa</h3>
                <p className="text-oxford/40 text-xs">Quick, secure, and transparent</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Paybill */}
              <div className="bg-smoke rounded-xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-oxford/50 uppercase tracking-wider">Option 1: Paybill</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">RECOMMENDED</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-oxford/60">Business No.</span>
                    <span className="text-sm font-bold text-oxford font-mono tracking-wider">522522</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-oxford/60">Account No.</span>
                    <span className="text-sm font-bold text-oxford font-mono tracking-wider">KAMAU2027</span>
                  </div>
                </div>
              </div>

              {/* Till */}
              <div className="bg-smoke rounded-xl p-4 border border-slate-100">
                <span className="text-xs font-semibold text-oxford/50 uppercase tracking-wider block mb-3">Option 2: Buy Goods (Till)</span>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-oxford/60">Till Number</span>
                  <span className="text-sm font-bold text-oxford font-mono tracking-wider">8917463</span>
                </div>
              </div>

              {/* Send Money */}
              <div className="bg-smoke rounded-xl p-4 border border-slate-100">
                <span className="text-xs font-semibold text-oxford/50 uppercase tracking-wider block mb-3">Option 3: Send Money</span>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-oxford/60">Phone Number</span>
                  <span className="text-sm font-bold text-oxford font-mono tracking-wider">0719354950</span>
                </div>
                <p className="text-[11px] text-oxford/40 mt-2">Name: <strong>JOHN KAMAU</strong></p>
              </div>
            </div>

            <p className="text-[11px] text-oxford/30 mt-5 text-center leading-relaxed">
              All contributions are voluntary and used strictly for campaign operations. Every shilling counts. 🇰🇪
            </p>
          </div>

          {/* Volunteer Form */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:shadow-teal/5 transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                <span className="text-2xl">✊</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-oxford">Volunteer With Us</h3>
                <p className="text-oxford/40 text-xs">Join the grassroots army</p>
              </div>
            </div>

            {volunteerSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎉</span>
                </div>
                <h4 className="text-lg font-bold text-oxford mb-2">Welcome to the Team!</h4>
                <p className="text-oxford/60 text-sm">We'll reach out to you shortly. Together, we move Thika forward.</p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-oxford/60 block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Mary Wanjiku"
                    className="w-full px-4 py-2.5 bg-smoke border border-slate-200 rounded-xl text-sm text-oxford placeholder:text-oxford/25 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-oxford/60 block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="07XX XXX XXX"
                    className="w-full px-4 py-2.5 bg-smoke border border-slate-200 rounded-xl text-sm text-oxford placeholder:text-oxford/25 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-oxford/60 block mb-1.5">Your Area / Estate</label>
                  <input
                    type="text"
                    value={volunteerForm.area}
                    onChange={(e) => setVolunteerForm((f) => ({ ...f, area: e.target.value }))}
                    placeholder="e.g. Makongeni, Kiandutu, Section 9..."
                    className="w-full px-4 py-2.5 bg-smoke border border-slate-200 rounded-xl text-sm text-oxford placeholder:text-oxford/25 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-oxford/60 block mb-1.5">How Can You Help?</label>
                  <select
                    value={volunteerForm.role}
                    onChange={(e) => setVolunteerForm((f) => ({ ...f, role: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-smoke border border-slate-200 rounded-xl text-sm text-oxford focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                  >
                    <option value="">Select a role...</option>
                    <option value="door-to-door">Door-to-Door Outreach</option>
                    <option value="social-media">Social Media Champion</option>
                    <option value="events">Events & Rally Coordination</option>
                    <option value="transport">Transport & Logistics</option>
                    <option value="agent">Polling Agent</option>
                    <option value="anything">I'll Do Anything Needed!</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal text-white font-semibold text-sm rounded-xl hover:bg-teal-dark transition-all shadow-md shadow-teal/20 mt-2"
                >
                  Sign Up as Volunteer
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
