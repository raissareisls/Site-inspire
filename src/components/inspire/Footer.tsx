import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/inspire-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="INSPIRE" className="h-12 w-12 rounded-full bg-white p-1" />
            <span className="font-display text-xl font-bold">INSPIRE</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/80">
            Incentivo à Participação Feminina — Liderança e Inovação em Desenvolvimento
            e Qualidade de Software. Um projeto de extensão da UFC.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="#inicio" className="hover:text-primary">Início</a></li>
            <li><a href="#quem-somos" className="hover:text-primary">Quem Somos</a></li>
            <li><a href="#acoes" className="hover:text-primary">Nossas Ações</a></li>
            <li><a href="#conexoes" className="hover:text-primary">Mentoria</a></li>
            <li><a href="#vagas" className="hover:text-primary">Vagas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold">Siga nosso perfil</h4>
          <p className="mt-4 text-sm text-white/80">Acompanhe nossas ações no Instagram.</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              <Instagram className="h-4 w-4" /> @projetoinspire
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> inspire@ufc.br</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> UFC · Fortaleza, CE</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Projeto INSPIRE · Universidade Federal do Ceará
      </div>
    </footer>
  );
}
