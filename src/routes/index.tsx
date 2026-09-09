import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/inspire/Header";
import { Hero } from "@/components/inspire/Hero";
import { About } from "@/components/inspire/About";
import { Activities } from "@/components/inspire/Activities";
import { Mentorship } from "@/components/inspire/Mentorship";
import { Jobs } from "@/components/inspire/Jobs";
import { Footer } from "@/components/inspire/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INSPIRE · Liderança e Inovação Feminina em Tecnologia" },
      {
        name: "description",
        content:
          "Projeto de extensão da UFC que incentiva a participação feminina em Engenharia de Software e Outras áreas da tecnologia, com mentorias, workshops e ações de inclusão.",
      },
      { property: "og:title", content: "INSPIRE · UFC" },
      {
        property: "og:description",
        content:
          "Capacitando mulheres em Engenharia de Software com inclusão, diversidade e inovação.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Mentorship />
        <Jobs />
      </main>
      <Footer />
    </div>
  );
}
