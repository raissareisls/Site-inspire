import { Code2, Mic, Users, Heart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Stagger, staggerItem } from "./Reveal";

const items = [
  {
    icon: Code2,
    title: "Workshops e Minicursos",
    desc: "Atividades 100% práticas com foco em desenvolvimento de software e qualidade.",
    tag: "Prática",
  },
  {
    icon: Mic,
    title: "Palestras e Rodas de Conversa",
    desc: "Encontros com profissionais inspiradoras compartilhando trajetórias e aprendizados.",
    tag: "Inspiração",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Momentos para conectar estudantes, mentoras e profissionais da área de tecnologia.",
    tag: "Comunidade",
  },
  {
    icon: Heart,
    title: "Ações de Inclusão",
    desc: "Iniciativas que ampliam o acesso e fortalecem a presença feminina na tecnologia.",
    tag: "Impacto",
  },
];

export function Activities() {
  return (
    <section id="acoes" className="relative bg-secondary/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            O que fazemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Nossas Ações
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Quatro frentes que se conectam para formar, conectar e impulsionar mulheres
            na engenharia de software.
          </p>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tag }, i) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 shadow-lg transition hover:border-primary/50 hover:shadow-primary/20"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                    {tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
