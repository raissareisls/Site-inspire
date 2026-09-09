import { ArrowRight, Sparkles, Users, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/inspire-logo.png.asset.json";

const stats = [
  { icon: Users, value: "120+", label: "Mulheres impactadas" },
  { icon: Calendar, value: "24", label: "Eventos realizados" },
  { icon: Award, value: "6", label: "Mentorias mensais" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      {/* animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Projeto de Extensão · UFC
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Liderança e inovação{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-pink-300 to-primary bg-clip-text text-transparent">
                feminina
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full bg-primary/60"
              />
            </span>{" "}
            em tecnologia.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            O INSPIRE incentiva a participação de mulheres em Engenharia de Software,
            promovendo inclusão, diversidade e quebrando barreiras de acesso na tecnologia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#acoes"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
            >
              Conheça Nossas Ações
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#conexoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Sparkles className="h-4 w-4" />
              Participe da Mentoria
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Icon className="mb-2 h-5 w-5 text-primary" />
                <p className="font-display text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/60">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -z-10 mx-auto h-[22rem] w-[22rem] rounded-full border border-dashed border-white/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -z-10 mx-auto h-[26rem] w-[26rem] rounded-full border border-dashed border-primary/25"
          />
          <div className="absolute inset-0 -z-10 mx-auto h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl shadow-primary/10 backdrop-blur-xl"
          >
            <img src={logo.url} alt="Logo INSPIRE" className="h-64 w-64 object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
