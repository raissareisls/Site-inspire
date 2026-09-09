import { Briefcase, Check } from "lucide-react";

const reqs = [
  "Ser estudante de graduação em área de Computação ou correlatas",
  "Disponibilidade de algumas horas semanais para atividades do projeto",
  "Interesse em promover diversidade e inclusão na tecnologia",
  "Boa comunicação e vontade de aprender e ensinar",
];

export function Jobs() {
  return (
    <section id="vagas" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Faça parte
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Vagas & Oportunidades</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faça parte do time INSPIRE e ajude a construir um futuro mais diverso na tecnologia.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-card shadow-xl">
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Vaga em destaque</p>
                <h3 className="font-display text-xl font-bold text-foreground">Bolsistas Voluntárias</h3>
              </div>
            </div>
            <span className="inline-flex items-center justify-center rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              Inscrições abertas
            </span>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <h4 className="font-display font-bold text-foreground">Requisitos básicos</h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {reqs.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <a
              href="#conexoes"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
