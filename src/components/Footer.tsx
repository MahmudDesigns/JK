export default function Footer() {
  return (
    <footer className="bg-oxford text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center text-white font-bold text-lg">
                JK
              </div>
              <div>
                <p className="font-bold text-white text-sm">John Kamau</p>
                <p className="text-[10px] text-teal-light font-medium tracking-wider uppercase">
                  The People's Voice
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              From the streets of Thika to the halls of Parliament. A movement by the people, for the people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: 'About John', href: '#about' },
                { label: 'Three Pillars', href: '#pillars' },
                { label: 'Voice Your Issue', href: '#community' },
                { label: 'Support & Donate', href: '#support' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/40 hover:text-teal-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Reach Out</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-white/40">
                <span>📍</span> Thika Town, Kiambu County
              </p>
              <p className="flex items-center gap-2 text-white/40">
                <span>📞</span> 0719 354950
              </p>
              <p className="flex items-center gap-2 text-white/40">
                <span>✉️</span> info@johnkamau2027.co.ke
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors text-white/60 hover:text-white text-sm" aria-label="Facebook">
                  f
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors text-white/60 hover:text-white text-sm" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors text-white/60 hover:text-white text-sm" aria-label="TikTok">
                  ▶
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors text-white/60 hover:text-white text-sm" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © 2025 John Kamau Campaign. All rights reserved. 🇰🇪
          </p>
          <p className="text-xs text-white/25">
            <span className="text-teal-light/50">Voice of the Mwananchi</span> — The People's Voice
          </p>
        </div>
      </div>
    </footer>
  );
}
