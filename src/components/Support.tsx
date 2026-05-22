import { useState } from 'react';

export default function Support() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', area: '', role: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Payment System State Management
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [cardAmount, setCardAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  // Payment Execution Handlers
  const handlePaymentInitiation = async (e: React.FormEvent, method: 'mpesa' | 'card') => {
    e.preventDefault();
    setLoading(true);
    
    if (method === 'mpesa') {
      setStatusMessage({ text: 'Sending secure M-Pesa prompt to your phone...', isError: false });
      // Point to /api/stkpush
    } else {
      setStatusMessage({ text: 'Opening secure international card gateway...', isError: false });
      // Point to /api/card-checkout
    }
    setLoading(false);
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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: PAYMENT OVERVIEW - SEPARATE METHODS GRID */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. M-PESA AUTOMATED STK CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-lg">📱</div>
                <div>
                  <h3 className="text-sm font-bold text-oxford">Option 1: Direct M-Pesa STK</h3>
                  <p className="text-oxford/40 text-[11px]">Instant automated PIN request</p>
                </div>
              </div>
              
              <form onSubmit={(e) => handlePaymentInitiation(e, 'mpesa')} className="grid sm:grid-cols-3 gap-3 items-end">
                <div className="sm:col-span-1">
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XXXXXXXX"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Amount (KES)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-green-600 disabled:bg-green-400 text-white font-semibold text-xs rounded-lg transition-all h-[34px]"
                >
                  Send PIN Prompt
                </button>
              </form>
            </div>

            {/* 2. VISA/MASTERCARD DIASPORA CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">💳</div>
                <div>
                  <h3 className="text-sm font-bold text-oxford">Option 2: Visa & Mastercard</h3>
                  <p className="text-oxford/40 text-[11px]">Secure donations for Diaspora supporters</p>
                </div>
              </div>
              
              <form onSubmit={(e) => handlePaymentInitiation(e, 'card')} className="grid sm:grid-cols-3 gap-3 items-end">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Contribution Amount (KES Equivalent)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={cardAmount}
                    onChange={(e) => setCardAmount(e.target.value)}
                    placeholder="Enter amount to contribute"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-oxford disabled:bg-oxford/50 text-white font-semibold text-xs rounded-lg transition-all h-[34px]"
                >
                  Pay with Card
                </button>
              </form>
            </div>

            {/* 3. SEPARATE MANUAL PAYBILL CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg">🏢</div>
                  <div>
                    <h3 className="text-sm font-bold text-oxford">Option 3: Paybill System</h3>
                    <p className="text-oxford/40 text-[11px]">Manual business line verification</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-oxford/60"><span className="text-oxford/40 font-medium">Business No:</span> <strong className="font-mono text-sm text-oxford ml-1">522522</strong></div>
                  <div className="text-[11px] text-oxford/60 mt-0.5"><span className="text-oxford/40 font-medium">Account No:</span> <strong className="font-mono text-sm text-oxford ml-1">KAMAU2027</strong></div>
                </div>
              </div>
            </div>

            {/* 4. SEPARATE MANUAL TILL CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg">🛍️</div>
                  <div>
                    <h3 className="text-sm font-bold text-oxford">Option 4: Buy Goods (Till Number)</h3>
                    <p className="text-oxford/40 text-[11px]">Direct store cash checkout system</p>
                  </div>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold text-oxford bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl tracking-wide">
                    8917463
                  </span>
                </div>
              </div>
            </div>

            {/* General Status Messages */}
            {statusMessage.text && (
              <p className={`text-center text-[11px] font-semibold py-1 ${statusMessage.isError ? 'text-red-500' : 'text-green-600'}`}>
                {statusMessage.text}
              </p>
            )}

            <p className="text-[10px] text-oxford/30 text-center pt-2">
              All operations comply securely under voluntary campaign funding governance. 🇰🇪
            </p>
          </div>

          {/* RIGHT SIDE: VOLUNTEER FORM BOX CONTAINER */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:shadow-teal/5 transition-all">
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
                    required
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
