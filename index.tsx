import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
  Store,
  Truck,
  Users,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

import shopAsset from "@/assets/011326.asset.json";
import sherwaniGoldCloseAsset from "@/assets/011403.asset.json";
import sherwaniGoldFullAsset from "@/assets/011420.asset.json";
import sherwaniWhiteTurbanAsset from "@/assets/011440.asset.json";
import sherwaniWhitePearlAsset from "@/assets/011504.asset.json";
import womensWear from "@/assets/womens-wear.jpg";
import westernWear from "@/assets/western-wear.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const shopImg = shopAsset.url;
const sherwaniGoldClose = sherwaniGoldCloseAsset.url;
const sherwaniGoldFull = sherwaniGoldFullAsset.url;
const sherwaniWhiteTurban = sherwaniWhiteTurbanAsset.url;
const sherwaniWhitePearl = sherwaniWhitePearlAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Kohli Fashion",
          description:
            "Premium Ethnic & Western Fashion Since 2002. Sherwanis, suits, wedding & party wear in New Delhi.",
          image: "/favicon.ico",
          telephone: "+91 98107 93962",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 489, DDA Flats, Near Shadipur Metro Station",
            addressLocality: "New Ranjeet Nagar, New Delhi",
            postalCode: "110008",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 11:00-21:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.1",
            reviewCount: "397",
          },
        }),
      },
    ],
  }),
});

function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500" style={{ opacity: gone ? 0 : 1 }}>
      <div className="text-center">
        <div className="font-display text-3xl tracking-widest">
          KOHLI <span className="gradient-text-gold">FASHION</span>
        </div>
        <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-border/50">
          <div className="h-full w-1/3 gradient-gold animate-marquee" />
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Since 2002</div>
      </div>
    </div>
  );
}

function Home() {
  useReveal();
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <About />
        <WhyChooseUs />
        <Stats />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Kohli Fashion luxury boutique interior"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_90%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.32em] text-gold animate-fade-in">
            <Sparkles className="h-3 w-3" /> Since 2002 · New Delhi
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px] animate-float-up">
            Timeless Fashion.
            <br />
            <span className="gradient-text-gold italic">Modern Elegance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-float-up" style={{ animationDelay: "120ms" }}>
            Premium ethnic and western fashion, hand-picked for the moments that matter.
            Sherwanis, suits, and celebration wear crafted for two decades in the heart
            of New Delhi.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-float-up" style={{ animationDelay: "240ms" }}>
            <a
              href="#location"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110"
            >
              Visit Store
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10"
            >
              Explore Collection
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : ""}`} />
                ))}
              </div>
              <span>4.1 / 5 · 397+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" />
              <span>20+ years of craftsmanship</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-fade-in" style={{ animationDelay: "600ms" }}>
        Scroll to discover ↓
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = ["Sherwani", "Indo Western", "Wedding Couture", "Coat Pant", "Party Wear", "Bridal Lehenga", "Bespoke Tailoring", "Formal Suits"];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-background/60 py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-muted-foreground/70">
            {t} <span className="mx-6 text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Collections ---------------- */
const collections = [
  { title: "Wedding Collection", tag: "Signature", img: sherwaniWhiteTurban, span: "md:col-span-2 md:row-span-2" },
  { title: "Men's Ethnic", tag: "Sherwani · Kurta", img: sherwaniGoldFull },
  { title: "Women's Wear", tag: "Lehenga · Saree", img: womensWear },
  { title: "Western Wear", tag: "Suits · Tuxedos", img: westernWear, span: "md:col-span-2" },
  { title: "Party Wear", tag: "Indo Western", img: sherwaniGoldClose },
  { title: "Formal Wear", tag: "Coat Pant", img: sherwaniWhitePearl },
];

function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Featured Collections</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Curated for every <span className="gradient-text-gold italic">occasion</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          From heirloom bridal wear to sharp everyday tailoring — every piece in
          our store is hand-selected for fabric, fit, and finish.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3 md:auto-rows-[260px] lg:auto-rows-[300px]">
        {collections.map((c, i) => (
          <a
            key={c.title}
            href="#location"
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className={`group relative overflow-hidden rounded-lg border border-border/60 bg-card ${c.span ?? ""}`}
          >
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-[10px] uppercase tracking-[0.32em] text-gold">{c.tag}</div>
              <div className="mt-1 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl">{c.title}</h3>
                <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-gold" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
        {["Men's Wear", "Women's Wear", "Ethnic Wear", "Casual Wear"].map((c) => (
          <div key={c} className="rounded-lg border border-border/50 px-5 py-4 text-sm text-muted-foreground transition hover:border-gold/60 hover:text-gold">
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img src={shopImg} alt="Kohli Fashion storefront" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 w-40 rounded-lg border border-gold/40 bg-background/90 p-5 backdrop-blur md:-right-8 md:w-56">
            <div className="font-display text-3xl md:text-4xl gradient-text-gold">2002</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Est. New Delhi</div>
          </div>
        </div>

        <div className="order-1 md:order-2" data-reveal>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Our Story</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Two decades of <span className="gradient-text-gold italic">craft</span>, one address.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Kohli Fashion opened its doors in 2002 as a small tailoring house in
            New Ranjeet Nagar. Twenty-three years later, we're a trusted
            destination for grooms, brides, and families across Delhi — known for
            an eye for detail, honest pricing, and the kind of personal service
            you only get from a family-run store.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every sherwani, suit, and lehenga on our rack is chosen for how it
            feels as much as how it looks. When you walk in, you're not just
            another customer — you're the reason we do this.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border/60 pt-8">
            <div>
              <div className="font-display text-3xl gradient-text-gold">23+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Years serving Delhi</div>
            </div>
            <div>
              <div className="font-display text-3xl gradient-text-gold">10k+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Happy customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
const whys = [
  { icon: Award, title: "20+ Years Experience", desc: "Two decades of dressing Delhi for weddings, festivals, and everyday moments." },
  { icon: Sparkles, title: "Premium Quality Fabrics", desc: "Silks, brocades, and wool blends sourced from India's finest mills." },
  { icon: Heart, title: "Affordable Pricing", desc: "Honest, transparent pricing on every piece — luxury without the markup." },
  { icon: Store, title: "Latest Fashion Trends", desc: "New collections every season, tuned to what our customers are asking for." },
  { icon: Users, title: "Friendly Staff", desc: "Expert stylists who take the time to understand your occasion and taste." },
  { icon: Truck, title: "Wide Product Range", desc: "From bespoke sherwanis to sharp coat-pants and casual everyday wear." },
];

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Why Choose Us</div>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
          The Kohli Fashion <span className="gradient-text-gold italic">difference</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Trusted by hundreds of Delhi families for over two decades.</p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whys.map((w, i) => (
          <div
            key={w.title}
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className="group relative overflow-hidden rounded-lg border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-primary-foreground">
              <w.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats = [
    { v: "20+", l: "Years Experience" },
    { v: "397+", l: "Customer Reviews" },
    { v: "4.1★", l: "Average Rating" },
    { v: "10k+", l: "Happy Customers" },
  ];
  return (
    <section className="relative border-y border-border/60 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 md:py-24">
        {stats.map((s, i) => (
          <div key={s.l} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="text-center">
            <div className="font-display text-5xl md:text-7xl gradient-text-gold">{s.v}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-xs">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
const reviews = [
  { name: "Rohan Malhotra", role: "Groom · Karol Bagh", rating: 5, text: "Got my wedding sherwani from Kohli Fashion — the embroidery was exactly what I imagined. The staff spent over three hours with me and never rushed the fitting." },
  { name: "Priya Sharma", role: "Regular customer", rating: 4, text: "I've been shopping here for over ten years. The variety is incredible and prices are fair. Their western wear collection has really grown too." },
  { name: "Arjun Verma", role: "Party wear buyer", rating: 5, text: "Bought an indo-western set for my cousin's sangeet. Turned heads all night. Great fabric, sharp tailoring, honest price." },
  { name: "Neha Kapoor", role: "Bride-to-be", rating: 4, text: "Helpful staff who actually listen. They pulled out pieces I wouldn't have considered — one of them ended up being my reception outfit." },
  { name: "Vikram Singh", role: "Formal wear", rating: 5, text: "Best coat-pant tailors in Ranjeet Nagar, hands down. My office wardrobe is entirely from here now." },
  { name: "Anjali Mehta", role: "Family customer", rating: 5, text: "Three generations of our family shop here. That says everything you need to know about the trust they've built." },
];

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Customer Reviews</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Loved by <span className="gradient-text-gold italic">Delhi</span>.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-current" : ""}`} />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">4.1 / 5</span> · 397+ reviews
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className="group relative flex flex-col rounded-lg border border-border/60 bg-card p-7 transition hover:border-gold/60"
          >
            <Quote className="h-8 w-8 text-gold/40" />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">{r.text}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
              <div>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className={`h-3.5 w-3.5 ${k < r.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
const gallery = [
  sherwaniGoldFull,
  sherwaniWhiteTurban,
  womensWear,
  sherwaniWhitePearl,
  sherwaniGoldClose,
  westernWear,
  shopImg,
  heroBg,
];

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Gallery</div>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
          Inside the <span className="gradient-text-gold italic">atelier</span>
        </h2>
        <p className="mt-4 text-muted-foreground">A visual walk through recent collections, fittings, and shop moments.</p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((src, i) => (
          <div
            key={i}
            data-reveal
            style={{ transitionDelay: `${i * 50}ms` }}
            className={`group relative overflow-hidden rounded-lg ${i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"}`}
          >
            <img
              src={src}
              alt={`Kohli Fashion gallery ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">View →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */
function Location() {
  const address =
    "Shop No. 489, DDA Flats, Near Shadipur Metro Station, New Ranjeet Nagar, New Delhi – 110008";
  const mapsQuery = encodeURIComponent(`Kohli Fashion, ${address}`);
  return (
    <section id="location" className="border-t border-border/60 bg-secondary/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
        <div data-reveal>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Visit The Store</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Find us in <span className="gradient-text-gold italic">New Ranjeet Nagar</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Two minutes from Shadipur Metro. Walk in for a coffee, a fitting, or
            just to browse — you're always welcome.
          </p>

          <div className="mt-8 space-y-5">
            <InfoRow icon={MapPin} label="Address" value={address} />
            <InfoRow icon={Phone} label="Phone" value="+91 98107 93962" href="tel:+919810793962" />
            <InfoRow icon={Clock} label="Store Hours" value="Monday – Sunday · 11:00 AM – 9:00 PM" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110"
            >
              Get Directions
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+919810793962"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10"
            >
              <Phone className="h-4 w-4" /> Call Store
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border/60 aspect-[4/3] md:aspect-auto md:min-h-[460px]" data-reveal>
          <iframe
            title="Kohli Fashion location"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-full w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: typeof MapPin; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm leading-relaxed text-foreground/90">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition hover:text-gold">{content}</a> : content;
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) return;
    const wa = `https://wa.me/919810793962?text=${encodeURIComponent(`Hi Kohli Fashion, I'm ${name}. ${message}`)}`;
    window.open(wa, "_blank");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:items-start">
        <div data-reveal>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Get In Touch</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Tell us about your <span className="gradient-text-gold italic">occasion</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Planning a wedding, a family function, or just refreshing your
            wardrobe? Send us a note or drop in — we'll help you put together
            something you'll remember.
          </p>

          <div className="mt-10 space-y-6">
            <InfoRow icon={Phone} label="Call us" value="+91 98107 93962" href="tel:+919810793962" />
            <InfoRow icon={Mail} label="WhatsApp" value="+91 98107 93962" href="https://wa.me/919810793962" />
            <InfoRow icon={Clock} label="Open Today" value="11:00 AM – 9:00 PM" />
            <InfoRow icon={MapPin} label="Store" value="Shop 489, DDA Flats, New Ranjeet Nagar, Delhi" />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-reveal
          className="relative overflow-hidden rounded-lg border border-border/60 bg-card p-8 md:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <div className="grid gap-5">
            <Field label="Your Name" name="name" placeholder="Full name" required />
            <Field label="Phone" name="phone" placeholder="+91 —" type="tel" />
            <Field label="Email" name="email" placeholder="you@example.com" type="email" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your occasion, size, budget…"
                className="mt-2 w-full resize-none rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold/70"
              />
            </div>
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110"
            >
              {sent ? (
                <>
                  <MessageSquare className="h-4 w-4" /> Opening WhatsApp…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              We reply within business hours · No spam, ever
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text", required }: { label: string; name: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold/70"
      />
    </div>
  );
}
