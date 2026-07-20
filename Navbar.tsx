import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl py-3"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-tight">
          Kohli <span className="gradient-text-gold">Fashion</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm uppercase tracking-[0.14em] text-foreground/80 transition hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919810793962"
          className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold transition hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Call Store
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="mx-6 mt-3 rounded-2xl border border-gold/20 bg-background/95 p-6 backdrop-blur-xl animate-fade-in">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg uppercase tracking-[0.14em] text-foreground/90 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+919810793962"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold"
                >
                  <Phone className="h-3.5 w-3.5" /> +91 98107 93962
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
