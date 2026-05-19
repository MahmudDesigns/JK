import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Community', href: '#community' },
  { label: 'Support', href: '#support' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center text-white font-bold text-lg shadow-md">
              JK
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-oxford' : 'text-white'}`}>
                John Kamau
              </p>
              <p className={`text-[10px] font-medium tracking-wider uppercase transition-colors ${scrolled ? 'text-teal' : 'text-teal-light'}`}>
                Thika Town MP
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-teal/10 hover:text-teal ${
                  scrolled ? 'text-oxford/70' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#support"
              className="ml-3 px-5 py-2 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-dark transition-colors shadow-md shadow-teal/20"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-oxford' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-oxford' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-oxford' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          mobileOpen ? 'max-h-80 border-b border-slate-100 shadow-lg' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-oxford/80 text-sm font-medium rounded-lg hover:bg-teal-50 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#support"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-2 px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg"
          >
            Join the Movement
          </a>
        </nav>
      </div>
    </header>
  );
}
