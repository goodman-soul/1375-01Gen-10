import { useEffect, useState } from "react";
import { Menu, X, Pickaxe, FileText } from "lucide-react";

const navItems = [
  { href: "#mine-history", label: "矿井史" },
  { href: "#equipment", label: "矿灯设备" },
  { href: "#railway", label: "运输轨道" },
  { href: "#living-quarters", label: "工人生活区" },
  { href: "#guide", label: "参观指南" },
  { href: "#oral-history", label: "口述故事" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-dark/95 backdrop-blur-sm border-b-4 border-rust shadow-2xl"
          : "bg-charcoal/80 backdrop-blur-sm"
      }`}
    >
      <div className="absolute top-full left-0 h-[3px] bg-rust transition-all duration-150" style={{ width: `${progress}%` }} />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <Pickaxe className="w-7 h-7 lg:w-9 lg:h-9 text-rust group-hover:text-caution transition-colors duration-300" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl lg:text-2xl tracking-[0.15em] text-lamp_white uppercase">
                Mining Heritage
              </span>
              <span className="font-mono text-[10px] lg:text-xs text-slate_blue-light tracking-widest">
                EST. 1898 · ARCHIVE №0427
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-mono text-xs tracking-wider uppercase text-slate_blue-light hover:text-lamp_white transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-rust group-hover:w-2/3 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-lamp_white hover:text-rust transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-charcoal-dark border-t border-iron">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 border-b border-iron/50 font-mono text-sm tracking-wider text-lamp_white hover:text-rust transition-colors"
              >
                <FileText className="w-4 h-4 text-rust" />
                <span className="text-rust w-6">{String(idx + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
