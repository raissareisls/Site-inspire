import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CalendarDays,
  Clock,
  MapPin,
  CheckCircle2,
  History,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Reveal } from "./Reveal";

const proxima = {
  tema: "Testes Automatizados na Prática com Playwright",
  data: "12 de julho de 2026",
  hora: "19h00 — 21h00",
  formato: "Online · Google Meet",
  mentora: "Valéria Lelli + convidada da indústria",
  descricao:
    "Hands-on de testes end-to-end: estruturando suítes, escrevendo cenários reais e integrando ao pipeline de CI.",
};

const passadas = [
  { tema: "Introdução à Engenharia de Software para Mulheres", data: "Mar/2026", mentora: "Profa. Valéria Lelli" },
  { tema: "Git & GitHub: do zero ao primeiro Pull Request", data: "Abr/2026", mentora: "Raissa Reis & Thayná Guimarães" },
  { tema: "Construindo APIs REST com Node.js", data: "Mai/2026", mentora: "Emilly Oliveira" },
  { tema: "UX Writing & Interfaces Inclusivas", data: "Jun/2026", mentora: "Profa. Fabiana Marinho" },
];

const beneficios = [
  "Acompanhamento individual e em grupo com mentoras experientes",
  "Apoio em lógica, programação, projetos acadêmicos e desafios reais",
  "Construção de portfólio, GitHub e LinkedIn para o mercado",
  "Preparação para processos seletivos e entrevistas técnicas",
  "Rede de apoio entre estudantes, professoras e profissionais",
];

export function Mentorship() {
  const [sent, setSent] = useState(false);
  const [tab, setTab] = useState<"proxima" | "passadas">("proxima");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="conexoes" className="relative bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Programa de Mentoria
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Conexões em Tecnologia
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Encontros mensais e tutorias contínuas que aproximam estudantes de mentoras
            experientes — um espaço seguro para tirar dúvidas, construir projetos e
            acelerar a sua carreira na tecnologia.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex rounded-full border border-white/10 bg-card p-1">
            {(["proxima", "passadas"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative rounded-full px-5 py-2 text-sm font-semibold text-white/80 transition"
              >
                {tab === t && (
                  <motion.span
                    layoutId="mentor-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-primary text-primary-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={tab === t ? "text-primary-foreground" : ""}>
                  {t === "proxima" ? "Próxima" : "Anteriores"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            {tab === "proxima" ? (
              <motion.div
                key="proxima"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-8 shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> Próxima mentoria
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                  {proxima.tema}
                </h3>
                <p className="mt-3 text-sm text-white/75">{proxima.descricao}</p>

                <ul className="mt-6 space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 text-primary" /> {proxima.data}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" /> {proxima.hora}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" /> {proxima.formato}
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="h-4 w-4 text-primary" /> Com {proxima.mentora}
                  </li>
                </ul>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="#form-mentoria"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
                >
                  Garantir minha vaga
                </motion.a>
              </motion.div>
            ) : (
              <motion.div
                key="passadas"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-white/10 bg-card p-8 shadow-lg"
              >
                <div className="mb-5 flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Mentorias anteriores
                  </h3>
                </div>
                <ol className="relative space-y-5 border-l border-white/10 pl-6">
                  {passadas.map((m) => (
                    <li key={m.tema} className="relative">
                      <span className="absolute -left-[29px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-md shadow-primary/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {m.data}
                      </span>
                      <h4 className="mt-1 font-display text-base font-bold text-foreground">
                        {m.tema}
                      </h4>
                      <p className="mt-1 text-xs text-white/60">com {m.mentora}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>

          <Reveal className="rounded-3xl border border-white/10 bg-card p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-foreground">
              O que você ganha participando
            </h3>
            <ul className="mt-5 space-y-3">
              {beneficios.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <div id="form-mentoria" className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Inscreva-se na mentoria
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Preencha o formulário com seus dados e a sua motivação. Entraremos em
              contato com as próximas datas e a confirmação da sua participação.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              <p className="font-semibold text-white">Ambiente seguro e acolhedor</p>
              <p className="mt-1 text-xs">
                Todas as mentoras seguem um código de conduta e passam por alinhamento
                pedagógico antes de cada edição.
              </p>
            </div>
          </Reveal>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-card p-6 shadow-lg sm:p-8 lg:col-span-3"
          >
            <div className="space-y-4">
              <Field label="Nome" type="text" placeholder="Seu nome completo" />
              <Field label="E-mail" type="email" placeholder="voce@email.com" />
              <Field label="Instituição de Ensino" type="text" placeholder="Ex.: UFC, IFCE..." />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Nível de Escolaridade
                </label>
                <select className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30">
                  <option>Ensino Médio</option>
                  <option>Graduação em andamento</option>
                  <option>Graduação concluída</option>
                  <option>Pós-graduação</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">
                  Por que deseja participar da mentoria?
                </label>
                <textarea
                  rows={4}
                  placeholder="Compartilhe sua motivação..."
                  className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="ok"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Inscrição enviada
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    Enviar inscrição <Send className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-white/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
