import { useState } from 'react';

export default function Support() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', area: '', role: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Individual Form States
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [mpesaAmount, setMpesaAmount] = useState('');

  const [cardAmount, setCardAmount] = useState('');

  const [paybillPhone, setPaybillPhone] = useState('');
  const [paybillAmount, setPaybillAmount] = useState('');

  const [tillPhone, setTillPhone] = useState('');
  const [tillAmount, setTillAmount] = useState('');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  // Central Payment Routing Handler
  const handlePaymentInitiation = async (e: React.FormEvent, method: 'mpesa' | 'card' | 'paybill' | 'till') => {
    e.preventDefault();
    setLoading(true);
    
    let targetMessage = '';
    switch(method) {
      case 'mpesa':
        targetMessage = 'Sending secure direct M-Pesa prompt...';
        break;
      case 'card':
        targetMessage = 'Opening secure international card gateway...';
        break;
      case 'paybill':
        targetMessage = 'Initiating secure Paybill STK prompt to your phone...';
        break;
      case 'till':
        targetMessage = 'Initiating secure Buy Goods Till STK prompt...';
        break;
    }

    setStatusMessage({ text: targetMessage, isError: false });
    
    // API integration placeholders
    // try { ... backend fetch logic ... }
    
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
          
          {/* LEFT SIDE: PAYMENT OVERVIEW - ALL SEPARATE INTERACTIVE CARDS */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. M-PESA DIRECT STK CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-lg">📱</div>
                <div>
                  <h3 className="text-sm font-bold text-oxford">Option 1: Direct M-Pesa STK</h3>
                  <p className="text-oxford/40 text-[11px]">Instant automated personal wallet request</p>
                </div>
              </div>
              
              <form onSubmit={(e) => handlePaymentInitiation(e, 'mpesa')} className="grid sm:grid-cols-3 gap-3 items-end">
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={mpesaPhone}
                    onChange={(e) => setMpesaPhone(e.target.value)}
                    placeholder="07XXXXXXXX"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Amount (KES)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={mpesaAmount}
                    onChange={(e) => setMpesaAmount(e.target.value)}
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
            <div className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">💳</div>
                <div>
                  <h3 className="text-sm font-bold text-oxford">Option 2: Visa & Mastercard</h3>
                  <p className="text-oxford/40 text-[11px]">Secure donations for international Diaspora supporters</p>
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
                    placeholder="Enter amount to contribute globally"
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

            {/* 3. INTERACTIVE PAYBILL CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg">🏢</div>
                  <div>
                    <h3 className="text-sm font-bold text-oxford">Option 3: Campaign Paybill</h3>
                    <p className="text-oxford/40 text-[11px]">Business line automated routing setup</p>
                  </div>
                </div>
                <div className="flex gap-x-4 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl text-right self-start sm:self-center">
                  <div className="text-[11px] text-oxford/60"><span className="text-oxford/40 font-medium">Biz No:</span> <strong className="font-mono text-xs text-oxford ml-0.5">522522</strong></div>
                  <div className="text-[11px] text-oxford/60"><span className="text-oxford/40 font-medium">Account:</span> <strong className="font-mono text-xs text-oxford ml-0.5">KAMAU2027</strong></div>
                </div>
              </div>

              <form onSubmit={(e) => handlePaymentInitiation(e, 'paybill')} className="grid sm:grid-cols-3 gap-3 items-end border-t border-slate-50 pt-3">
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Payer Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={paybillPhone}
                    onChange={(e) => setPaybillPhone(e.target.value)}
                    placeholder="07XXXXXXXX"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Paybill Amount (KES)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={paybillAmount}
                    onChange={(e) => setPaybillAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-teal hover:bg-teal-dark disabled:bg-teal/40 text-white font-semibold text-xs rounded-lg transition-all h-[34px]"
                >
                  Trigger Paybill Prompt
                </button>
              </form>
            </div>

            {/* 4. INTERACTIVE TILL CARD */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg">🛍️</div>
                  <div>
                    <h3 className="text-sm font-bold text-oxford">Option 4: Buy Goods (Till Number)</h3>
                    <p className="text-oxford/40 text-[11px]">Direct verification merchant checkout</p>
                  </div>
                </div>
                <div className="self-start sm:self-center">
                  <span className="font-mono text-xs font-bold text-oxford bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl tracking-wide">
                    Till: 8917463
                  </span>
                </div>
              </div>

              <form onSubmit={(e) => handlePaymentInitiation(e, 'till')} className="grid sm:grid-cols-3 gap-3 items-end border-t border-slate-50 pt-3">
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Payer Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={tillPhone}
                    onChange={(e) => setTillPhone(e.target.value)}
                    placeholder="07XXXXXXXX"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-oxford/60 block mb-1">Till Amount (KES)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={tillAmount}
                    onChange={(e) => setTillAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full px-3 py-2 bg-smoke border border-slate-200 rounded-lg text-xs text-oxford focus:outline-none focus:border-teal transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-oxford hover:bg-oxford-dark disabled:bg-oxford/40 text-white font-semibold text-xs rounded-lg transition-all h-[34px]"
                >
                  Trigger Till Prompt
                </button>
              </form>
            </div>

            {/* Centralized Status Notifications */}
            {statusMessage.text && (
              <p className={`text-center text-[11px] font-semibold py-1.5 rounded-xl bg-slate-50 border border-slate-100/50 ${statusMessage.isError ? 'text-red-500' : 'text-teal'}`}>
                {statusMessage.text}
              </p>
            )}

            <p className="text-[10px] text-oxford/30 text-center pt-2">
              All operations comply securely under voluntary campaign funding governance. 🇰🇪
            </p>
          </div>

          {/* RIGHT SIDE: GRASSROOTS VOLUNTEER FORM BOX */}
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
