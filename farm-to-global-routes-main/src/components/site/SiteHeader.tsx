import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import mark from "@/assets/lealvin-mark.png";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "surface-espresso border-b border-espresso-foreground/10 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-espresso shadow-elevated transition-transform duration-500 group-hover:scale-105">
            <img
              src={mark}
              alt="Le Alvin Coffee emblem"
              width={156}
              height={130}
              className="size-full scale-[1.35] object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.18em] text-espresso-foreground">
              LEALVIN
            </span>
            <span className="eyebrow mt-1 text-gold">Global</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.8rem] font-medium tracking-wide text-espresso-foreground/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-gold px-5 py-3 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-foreground uppercase transition-opacity hover:opacity-90 sm:inline-block"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-sm border border-espresso-foreground/20 text-espresso-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="surface-espresso border-t border-espresso-foreground/10 xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-6 lg:px-10">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-espresso-foreground/10 py-3 font-display text-2xl text-espresso-foreground"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-gold px-5 py-4 text-center text-[0.7rem] font-semibold tracking-[0.18em] text-gold-foreground uppercase"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
