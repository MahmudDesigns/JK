import { useState } from 'react';

const concerns = [
  { id: 'jobs', label: 'Youth Unemployment', emoji: '💼' },
  { id: 'water', label: 'Water & Sanitation', emoji: '💧' },
  { id: 'roads', label: 'Roads & Transport', emoji: '🛣️' },
  { id: 'health', label: 'Healthcare Access', emoji: '🏥' },
  { id: 'education', label: 'Education Quality', emoji: '📖' },
  { id: 'security', label: 'Safety & Security', emoji: '🛡️' },
  { id: 'business', label: 'Small Business Support', emoji: '🏪' },
  { id: 'housing', label: 'Affordable Housing', emoji: '🏠' },
];

export default function VoiceWidget() {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [votes, setVotes] = useState<Record<string, number>>({
    jobs: 127,
    water: 89,
    roads: 104,
    health: 73,
    education: 96,
    security: 58,
    business: 112,
    housing: 67,
  });

  const handleSubmit = () => {
    if (!selected) return;
    setVotes((prev) => ({ ...prev, [selected]: (prev[selected] || 0) + 1 }));
    setSubmitted(true);
  };

  const maxVotes = Math.max(...Object.values(votes));

  if (submitted) {
    return (
      <section id="community" className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
              Community Pulse
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxford mb-4">
              Voice Your Issue
            </h2>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal/20 rounded-2xl p-6 sm:p-10 text-center">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-oxford mb-2">Thank You, Mwananchi! 🙏</h3>
            <p className="text-oxford/60 text-sm mb-8">Your voice has been heard. Together, we will address every concern.</p>

            {/* Results */}
            <div className="space-y-3 text-left max-w-md mx-auto">
              {concerns
                .sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0))
                .map((c) => (
                  <div key={c.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-oxford/70">
                        {c.emoji} {c.label}
                      </span>
                      <span className="text-xs font-bold text-teal">{votes[c.id]} votes</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-all duration-1000"
                        style={{ width: `${((votes[c.id] || 0) / maxVotes) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="community" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
            Community Pulse
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxford mb-4">
            Voice Your Issue
          </h2>
          <p className="text-oxford/50 text-base max-w-lg mx-auto leading-relaxed">
            What matters most to you? Select your primary community concern and tell John directly.
            Your voice shapes the agenda.
          </p>
        </div>

        {/* Poll */}
        <div className="bg-smoke rounded-2xl p-5 sm:p-8 border border-slate-100">
          <p className="text-sm font-semibold text-oxford mb-4">
            What is your #1 concern in Thika Town?
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {concerns.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                  selected === c.id
                    ? 'border-teal bg-teal/10 shadow-md shadow-teal/10'
                    : 'border-slate-100 bg-white hover:border-teal/30 hover:shadow-sm'
                }`}
              >
                <span className="text-xl block mb-1">{c.emoji}</span>
                <span className={`text-[11px] font-semibold leading-tight block ${selected === c.id ? 'text-teal-dark' : 'text-oxford/60'}`}>
                  {c.label}
                </span>
              </button>
            ))}
          </div>

          {/* Feedback */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us more in one line..."
              className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-oxford placeholder:text-oxford/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
            />
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className="px-6 py-3 bg-teal text-white font-semibold text-sm rounded-xl hover:bg-teal-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-teal/20"
            >
              Submit Voice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
