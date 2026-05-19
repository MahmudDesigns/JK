export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-oxford to-oxford-light relative overflow-hidden">
      {/* Accent shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          This Seat Belongs to the People.<br />
          <span className="text-teal-light">Let's Take It Back Together.</span>
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          For too long, Thika Town has been represented by voices that don't echo ours. 
          It's time for a leader who has walked our streets, felt our struggles, and shares our dreams.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#support"
            className="px-8 py-3.5 bg-teal text-white font-semibold text-sm rounded-xl hover:bg-teal-dark transition-all shadow-lg shadow-teal/25"
          >
            Support the Campaign
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            Read John's Full Story
          </a>
        </div>
      </div>
    </section>
  );
}
