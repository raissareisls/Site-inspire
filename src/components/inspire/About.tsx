import { GraduationCap, User, Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    desc: "Capacitar e dar visibilidade a mulheres em Engenharia de Software, construindo uma comunidade de aprendizado contínuo.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em formação feminina na área de qualidade e desenvolvimento de software no Norte e Nordeste.",
  },
  {
    icon: Heart,
    title: "Valores",
    desc: "Diversidade, colaboração, ética, excelência técnica e protagonismo feminino em todas as etapas da carreira.",
  },
];

const professoras = [
  {
    name: "Valéria Lelli",
    role: "Coordenadora do INSPIRE",
    bio: "Professora adjunta da UFC, doutora em Engenharia de Software. Pesquisa acessibilidade, qualidade e teste de software com foco em inclusão.",
    tags: ["Engenharia de Software", "Acessibilidade", "Qualidade"],
  },
  {
    name: "Fabiana Marinho",
    role: "Coprodução · IFCE Maracanaú",
    bio: "Professora e coordenadora no IFCE. Atua na formação de novas engenheiras com ênfase em práticas ágeis e desenvolvimento web.",
    tags: ["Desenvolvimento Web", "Métodos Ágeis", "Educação"],
  },
  {
    name: "Amanda Pires",
    role: "Professora adjunta · UFC",
    bio: "Pesquisadora em Banco de Dados, Web Semântica e LLMs. Lidera a frente de dados e inteligência artificial dentro do INSPIRE.",
    tags: ["Banco de Dados", "Web Semântica", "LLMs"],
  },
];

const bolsistas = [
  { name: "Thayná Guimarães", course: "Ciência da Computação · UFC", focus: "Front-end & UX" },
  { name: "Raissa Reis", course: "Ciência de Dados · UFC", focus: "Desenvolvimento e Dados" },
  { name: "Lara Macêdo", course: "Ciência da Computação · UFC", focus: "Qualidade de Software" },
  { name: "Emilly Oliveira", course: "Engenharia da Computação · UFC", focus: "Back-end & APIs" },
  { name: "Yasmin Amorim", course: "Ciência da Computação · UFC", focus: "Comunicação & Eventos" },
  { name: "Isabella Lelis", course: "Ciência da Computação · UFC", focus: "Mentorias & Conteúdo" },
];

function Avatar({ name, color = "primary" }: { name: string; color?: "primary" | "white" }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  const bg = color === "primary"
    ? "bg-primary text-primary-foreground"
    : "bg-white text-secondary";
  return (
    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-lg font-bold ${bg}`}>
      {initials}
    </div>
  );
}

export function About() {
  return (
    <section id="quem-somos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Sobre o projeto
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Quem Somos
          </h2>
          <p className="mt-5 text-lg text-white/75">
            O <span className="font-semibold text-white">INSPIRE</span> é um projeto de extensão
            da Universidade Federal do Ceará (UFC) dedicado a fortalecer a presença feminina
            em Engenharia de Software. Atuamos formando estudantes, conectando profissionais
            e promovendo ações de inclusão que transformam trajetórias na tecnologia.
          </p>
          <p className="mt-4 text-base text-white/65">
            Reunimos professoras, pesquisadoras e bolsistas em torno de workshops, mentorias,
            rodas de conversa e iniciativas de pesquisa aplicada — sempre com foco em qualidade
            de software, liderança e inovação.
          </p>
        </Reveal>


        {/* Pilares */}
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 shadow-lg transition hover:border-primary/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </Stagger>


        {/* Professoras */}
        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                Professoras Idealizadoras
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Pesquisadoras que articulam ensino, extensão e pesquisa para abrir caminhos
                para a próxima geração de engenheiras de software.
              </p>
            </div>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {professoras.map((p) => (
              <motion.article
                key={p.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-card p-6 shadow-lg transition hover:border-primary/40 hover:shadow-primary/20"
              >
                <div className="flex items-start gap-4">
                  <Avatar name={p.name} color="white" />
                  <div className="min-w-0">
                    <h4 className="font-display text-lg font-bold text-foreground">{p.name}</h4>
                    <p className="mt-0.5 text-sm font-medium text-primary">{p.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">{p.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 transition group-hover:border-primary/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </Stagger>

        </div>

        {/* Bolsistas */}
        <div className="mt-20">
          <div className="mb-8">
            <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <User className="h-6 w-6 text-primary" />
              Bolsistas & Voluntárias
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Estudantes de graduação que conduzem mentorias, oficinas e ações de comunicação
              do projeto — desenvolvendo lideranças enquanto aprendem na prática.
            </p>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
            {bolsistas.map((b) => (
              <motion.div
                key={b.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-card p-5 transition hover:border-primary/40"
              >
                <div className="flex items-center gap-4">
                  <Avatar name={b.name} />
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-foreground">{b.name}</h4>
                    <p className="text-xs text-white/60">{b.course}</p>
                  </div>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  {b.focus}
                </p>
              </motion.div>
            ))}
          </Stagger>

        </div>

        {/* Parceiros */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Parceiros</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white">
            <span className="font-display text-xl font-bold">UFC</span>
            <span className="h-6 w-px bg-white/20" />
            <span className="font-display text-xl font-bold">IFCE · Maracanaú</span>
            <span className="h-6 w-px bg-white/20" />
            <span className="font-display text-xl font-bold">GREAT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
