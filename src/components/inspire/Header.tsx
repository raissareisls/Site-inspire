import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/inspire-logo.png.asset.json";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Ações", href: "#acoes" },
  { label: "Mentoria", href: "#conexoes" },
  { label: "Vagas", href: "#vagas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const y = window.scrollY + 120;
      for (const n of nav) {
        const el = document.querySelector(n.href);
        if (el instanceof HTMLElement && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(n.href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-secondary/80 py-1 backdrop-blur-xl"
          : "bg-secondary/60 py-2 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/40 blur-md transition group-hover:bg-primary/70" />
            <img
              src={logo.url}
              alt="INSPIRE"
              className="relative h-11 w-11 rounded-full bg-white p-1 transition-transform group-hover:rotate-6"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold tracking-wide text-white">INSPIRE</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">UFC · Extensão</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const isActive = active === n.href;
            return (
              <a
                key={n.href}
                href={n.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:text-white"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/25 ring-1 ring-primary/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {n.label}
              </a>
            );
          })}
          <a
            href="#form-mentoria"
            className="ml-3 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
          >
            Inscrever-se
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-white/90 hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
