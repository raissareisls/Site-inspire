# Site-inspire · Projeto de Extensão INSPIRE (UFC)

[Site publicado][deploy] · [Repositório][repo] · [Contato com Raissa Reis pelo GitHub][contato]

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?logo=tailwindcss&logoColor=38BDF8)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)

## Sobre o projeto

O Site-inspire é a plataforma oficial do Projeto de Extensão INSPIRE da Universidade Federal do Ceará (UFC). A plataforma reúne informações sobre mentorias, oficinas, palestras e oportunidades de participação. Seu objetivo é dar visibilidade às ações do projeto, conectar alunas de tecnologia a mentoras e iniciativas de formação e apoiar a permanência feminina na área.

A página inicial foi organizada para responder às principais perguntas de quem chega ao site: o que é o INSPIRE, quais atividades oferece e como participar.

## Metodologias ágeis e ciclo de vida do produto

### Planejamento e definição do MVP

Começamos pelas necessidades das alunas que procuram o projeto pela primeira vez. Para lançar a primeira versão funcional rapidamente, priorizamos três requisitos e definimos o que cada um precisava entregar.

| Requisito do MVP | O que a primeira versão precisava entregar |
| --- | --- |
| Apresentar o INSPIRE | Explicar o propósito do projeto, seu vínculo com a UFC e quem faz parte da equipe. |
| Dar visibilidade às ações | Reunir as atividades em uma página navegável, com destaque para o programa de mentoria. |
| Orientar a participação | Mostrar as oportunidades disponíveis e oferecer caminhos para chegar às informações de mentoria e contato. |

Concentrar o MVP em uma página permitiu publicar o conteúdo essencial com infraestrutura estática e reduzir as dependências para o lançamento. O formulário de mentoria demonstra o fluxo na interface e exibe uma confirmação local. O recebimento e o armazenamento das inscrições ainda dependem de uma integração.

### Gestão ágil das entregas

Organizamos o trabalho em sprints e dividimos o backlog em tarefas acompanháveis em um quadro Kanban. A divisão por conteúdo, componentes da interface e publicação facilitou distribuir responsabilidades, identificar dependências e revisar entregas em partes menores. A prioridade do backlog seguia o que as alunas precisavam encontrar para conhecer o projeto e entender como participar.

### Arquitetura de software

A [rota inicial](src/routes/index.tsx) compõe a página a partir de componentes React com responsabilidades específicas. O cabeçalho e o rodapé concentram a navegação e o contato. Apresentação institucional, atividades, mentorias e oportunidades ficam em [componentes próprios](src/components/inspire/). Essa estrutura facilita revisar uma seção e localizar o código a alterar quando o conteúdo evolui.

### Publicação e evolução

O [workflow do GitHub Actions](.github/workflows/deploy.yml) instala as dependências, gera o build de produção e publica a pasta `dist` no GitHub Pages a cada push para `main`. Na etapa de publicação, ajustamos o caminho base do Vite e do roteador para que a aplicação e seus arquivos compilados carregassem sob `/Site-inspire/`.

Com a primeira versão no ar, a evolução do produto inclui manter as informações de mentorias e oportunidades atualizadas e avaliar, com a equipe e as alunas, quais etapas da participação precisam de suporte adicional.

## Minha atuação

Atuei como **Desenvolvedora Full-Stack e Mentora Técnica**. Na plataforma, articulei os requisitos do MVP com a implementação da interface, a organização dos componentes e a publicação da aplicação. Na mentoria, orientei alunas ingressantes na decomposição de tarefas, na identificação dos próximos passos e na resolução de dúvidas técnicas durante o desenvolvimento.

## Tecnologias utilizadas

- **React** para composição da interface e gerenciamento de estado dos componentes.
- **TypeScript** para tipagem estática no código da aplicação.
- **Tailwind CSS** para estilização e adaptação do layout a diferentes tamanhos de tela.
- **TanStack Router** para definição e composição das rotas.
- **Vite** para o servidor de desenvolvimento e o build de produção.
- **Git, GitHub Actions e GitHub Pages** para versionamento, automação do build e hospedagem estática.

## Como rodar localmente

Use o Node.js 24, a mesma versão adotada pelo workflow de deploy, e o npm.

1. Clone o repositório e abra a pasta do projeto.

   ```bash
   git clone https://github.com/raissareisls/Site-inspire.git
   cd Site-inspire
   ```

2. Instale as dependências e inicie o servidor de desenvolvimento.

   ```bash
   npm install
   npm run dev
   ```

3. Abra o endereço exibido no terminal, normalmente [http://localhost:5173](http://localhost:5173).

[deploy]: https://raissareisls.github.io/Site-inspire/
[repo]: https://github.com/raissareisls/Site-inspire
[contato]: https://github.com/raissareisls
