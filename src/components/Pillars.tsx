import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    number: '01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: 'Poverty Eradication',
    subtitle: 'Systemic Economic Uplift',
    description:
      'Break the cycle of poverty through systemic local economic support — creating sustainable livelihoods, supporting small businesses, and ensuring every family in Thika Town has a real path to financial stability.',
    points: [
      'Local business micro-grants & seed funding',
      'Youth employment incubation programs',
      'Market infrastructure improvements',
      'Financial literacy for families',
    ],
  },
  {
    number: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Community Empowerment',
    subtitle: 'Education & Skills Revolution',
    description:
      'Empower communities through top-tier education and technology-driven, hands-on job skills. As an educator at Thika Technical Training Institute, John knows firsthand how quality training transforms lives.',
    points: [
      'TVET scholarship & bursary expansion',
      'Community tech hubs & digital literacy',
      'Hands-on trade skills for youth',
      'Teacher welfare & school infrastructure',
    ],
  },
  {
    number: '03',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    title: 'Proper Legislation',
    subtitle: 'Laws That Protect, Not Harass',
    description:
      'Champion legislation designed specifically to protect local communities and mama mbogas — not laws crafted by detached leaders who have lost touch with the common mwananchi and daily happenings on the ground.',
    points: [
      'Repeal of oppressive hawker regulations',
      'Community-centered county legislation',
      'Protection of informal sector workers',
      'Transparent governance & accountability',
    ],
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number watermark */}
      <span className="absolute top-4 right-6 text-6xl font-black text-slate-50 group-hover:text-teal-50 transition-colors select-none">
        {pillar.number}
      </span>

      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
          {pillar.icon}
        </div>

        <h3 className="text-xl font-bold text-oxford mb-1">{pillar.title}</h3>
        <p className="text-teal text-xs font-semibold tracking-wider uppercase mb-3">{pillar.subtitle}</p>
        <p className="text-oxford/55 text-sm leading-relaxed mb-5">{pillar.description}</p>

        <ul className="space-y-2.5">
          {pillar.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-oxford/70">
              <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
            Legislative Agenda
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxford mb-4">
            Three Pillars of Change
          </h2>
          <p className="text-oxford/50 text-base max-w-lg mx-auto leading-relaxed">
            A focused, actionable agenda born from real experience — not boardroom theories.
            These are the fights that matter to every mwananchi.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
