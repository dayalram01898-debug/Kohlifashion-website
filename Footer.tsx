import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl tracking-tight">
              Kohli <span className="gradient-text-gold">Fashion</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium Ethnic & Western Fashion Since 2002. Crafting timeless style for every occasion.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919810793962" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-gold hover:text-gold">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                ["Collections", "#collections"],
                ["About", "#about"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-gold">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Store Hours</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <div>
                  <div className="text-foreground">Monday – Sunday</div>
                  <div>11:00 AM – 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Visit Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>Shop No. 489, DDA Flats, Near Shadipur Metro Station, New Ranjeet Nagar, New Delhi – 110008</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a href="tel:+919810793962" className="transition hover:text-gold">+91 98107 93962</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Kohli Fashion. All Rights Reserved.</p>
          <p className="tracking-widest uppercase">Crafted with elegance in New Delhi</p>
        </div>
      </div>
    </footer>
  );
}
