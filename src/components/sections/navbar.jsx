import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Portfolio", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close overlay on resize & lock scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white" >
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#2230D2CC] backdrop-blur-sm transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col w-full pt-32 gap-2">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="w-full px-8 py-4 font-semibold text-[32px]/[44px] text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Navbar */}
      <div className="flex justify-between items-center h-[72px] px-4 md:px-[143px]">
        <a href="#" className="text-primary font-bold text-[18px/20px] px-4 py-2">My Logo</a>
        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden relative w-10 h-10 px-2 py-2 focus:outline-none z-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}
        >
          <span className={`absolute left-1/2 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "rotate-45 bg-white" : "bg-primary -translate-y-1.5"} transform -translate-x-1/2`} />
          <span className={`absolute left-1/2 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-primary"} transform -translate-x-1/2`} />
          <span className={`absolute left-1/2 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 bg-white" : "bg-primary translate-y-1.5"} transform -translate-x-1/2`} />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-4 text-cardContentText font-medium text-[15px]/[20px]">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-primary transition-colors px-4 py-2">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}