import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    era: 'Early Years',
    icon: '🏠',
    title: 'Born & Raised in Athena',
    description:
      'John\'s story begins in Athena, Thika — a community of resilient families and hard-working people who shaped his values of humility, service, and determination from day one.',
  },
  {
    era: 'Childhood',
    icon: '👦',
    title: 'Moved to Kiandutu at Age 6',
    description:
      'At just six years old, John moved to Kiandutu — one of Thika\'s most vibrant yet challenging informal settlements. Growing up here gave him firsthand insight into poverty, community solidarity, and the urgent need for systemic change.',
  },
  {
    era: 'Primary School',
    icon: '📚',
    title: 'General Kago & Marema Primary',
    description:
      'Attended General Kago Primary School up to Class 4, then joined Marema Primary School in Makuyu. These years taught him the power of education as a pathway out of poverty — a belief he carries to this day.',
  },
  {
    era: 'Secondary',
    icon: '🎓',
    title: 'Don Bosco High Secondary School',
    description:
      'At Don Bosco High, John\'s leadership instincts first emerged. While living in Makongeni, he balanced studies with community engagement, laying the foundation for a life of public service.',
  },
  {
    era: 'Higher Education',
    icon: '🏛️',
    title: 'Thika Technical → Kenya School of TVET → MKU',
    description:
      'John pursued tertiary education at Thika Technical Training Institute, then advanced to Kenya School of TVET, and ultimately earned a Bachelor\'s degree in Economics & Finance from Mt. Kenya University — proof that a Kiandutu kid can achieve anything.',
  },
  {
    era: 'Student Leadership',
    icon: '⭐',
    title: 'Student Council President — 2016',
    description:
      'Served in multiple student government positions, rising to become Council President of Thika Technical Training Institute in 2016. Here he learned the art of representing diverse voices under one united agenda.',
  },
  {
    era: 'Community Work',
    icon: '🤝',
    title: '10+ Youth & Self-Help Groups Founded',
    description:
      'Founded at least 10 youth and self-help groups across Kiandutu and Makongeni, including serving as Chairperson of the Makongeni Youth Self-Help Group. He also founded and registered the Manchester Tuk Tuk Sacco, where he still serves as Organizing Secretary.',
  },
  {
    era: 'The Streets',
    icon: '🛺',
    title: '5 Years Driving Tuk-Tuk & Car Hire',
    description:
      'For five years after college, John worked in logistics — driving a tuk-tuk and car hire across Thika Town and its surroundings. This wasn\'t just a job; it was a masterclass in understanding every corner of the constituency, engaging professionals, workers, mama mbogas, and youth, and learning their real needs, interests, and growth potential.',
  },
  {
    era: 'Today',
    icon: '🎯',
    title: 'Educator at Thika Technical Training Institute',
    description:
      'Now serving as an educator at Thika Technical Training Institute — a leading institution in technology and hands-on job skills. This role has given John a wealth of experience in both corporate leadership and community development, fueling his hunger to see real change in how things are run.',
  },
];

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-start gap-4 sm:gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-teal/10 border-2 border-teal/30 flex items-center justify-center text-xl">
          {item.icon}
        </div>
        {index < milestones.length - 1 && (
          <div className="w-px h-full bg-gradient-to-b from-teal/30 to-transparent absolute top-14 left-1/2 -translate-x-1/2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 sm:pb-12 flex-1 ${isEven ? '' : ''}`}>
        <span className="inline-block px-3 py-0.5 bg-teal/10 text-teal-dark text-[10px] font-bold tracking-wider uppercase rounded-full mb-2">
          {item.era}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-oxford mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-oxford/60 text-sm leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
            The Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-oxford mb-4">
            A Story Written in These Streets
          </h2>
          <p className="text-oxford/50 text-base max-w-lg mx-auto leading-relaxed">
            Every step of John's life has been lived right here — among the people he wants to represent.
            This is not a political career. This is a calling.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-6 bg-gradient-to-br from-oxford to-oxford-light rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white/90 text-sm sm:text-base leading-relaxed italic font-light">
            "Having grown up here gives me insights on what needs to be done to help our youth and
            parents reach their potential and better their lives — just like I did. My journey is proof
            that a child from Kiandutu can rise. Now it's time to open that door for everyone."
          </p>
          <p className="text-teal-light font-semibold text-sm mt-4">— John Kamau</p>
        </div>
      </div>
    </section>
  );
}
