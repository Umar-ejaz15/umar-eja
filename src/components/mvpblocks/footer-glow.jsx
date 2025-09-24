"use client";
export default function FooterGlow() {
  return (
    <footer className="relative bg-black z-10  w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(6px) saturate(180%);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
        }
        .glass:where(.dark, .dark *) {
          backdrop-filter: blur(6px) saturate(180%);
          background: rgba(20, 20, 20, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>

      {/* Glow Backgrounds */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      {/* Footer Content */}
      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        {/* Logo + Intro */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-extrabold text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <span className="bg-gradient-to-br from-blue-300 to-purple-400 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              Umar.dev
            </span>
          </a>
          <p className="text-gray-400 mb-6 max-w-xs text-center text-sm md:text-left">
            Crafting modern web apps with creativity, clean code, and powerful
            design. MERN / Next.js / AI-driven solutions ⚡
          </p>

          {/* Socials */}
          <div className="mt-2 flex gap-3 text-gray-400">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605..." />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-purple-400 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .29a12 12 0 00-3.797 23.401..." />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 00-5 5v14..." />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav Sections */}
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Product
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Updates</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Company
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Resources
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="text-gray-500 relative z-10 mt-10 text-center text-xs">
        <span>&copy; 2025 Umar.dev. All rights reserved.</span>
      </div>
    </footer>
  );
}
