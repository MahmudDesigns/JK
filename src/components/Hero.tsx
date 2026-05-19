export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Thika Town"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-dark/95 via-oxford/85 to-oxford/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-oxford-dark/50 to-transparent" />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-teal/5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/20 border border-teal/30 rounded-full text-teal-light text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 bg-teal-light rounded-full animate-pulse" />
                Thika Town Constituency 2027
              </span>
            </div>

            <h1 className="animate-fade-up stagger-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
              From the Streets of Thika to the Halls of{' '}
              <span className="text-teal-light">Parliament</span>
            </h1>

            <p className="animate-fade-up stagger-2 text-white/70 text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">The People's Voice</strong> — Voice of the Mwananchi.
              Born in these streets, forged by real struggle, and driven by an unshakeable
              mission to change how things are run for our youth and families.
            </p>

            <p className="animate-fade-up stagger-3 text-teal-light/80 text-sm font-medium mb-8 max-w-xl mx-auto lg:mx-0">
              John Kamau — Educator • Community Leader • Your Next MP
            </p>

            <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#support"
                className="px-8 py-3.5 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-all shadow-lg shadow-teal/25 hover:shadow-teal/40 hover:-translate-y-0.5 text-sm"
              >
                Join the Movement
              </a>
              <a
                href="#pillars"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm"
              >
                Support the Vision
              </a>
            </div>

            {/* Quick Stats */}
            <div className="animate-fade-up stagger-5 mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { value: '10+', label: 'Youth Groups Founded' },
                { value: '5+', label: 'Years in Community' },
                { value: '2027', label: 'Our Year of Change' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-teal-light">{stat.value}</p>
                  <p className="text-[11px] text-white/50 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Image */}
          <div className="animate-fade-up stagger-3 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal/30 to-teal-dark/20 rounded-2xl blur-xl" />
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="/images/candidate.jpg"
                  alt="John Kamau — Candidate for MP, Thika Town"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-oxford-dark/90 to-transparent p-5">
                  <p className="text-white font-bold text-lg">John Kamau</p>
                  <p className="text-teal-light text-xs font-medium tracking-wide uppercase">
                    MP Candidate — Thika Town
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-teal-light rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
