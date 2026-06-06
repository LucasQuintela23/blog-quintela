import { defaultLang, type Lang } from "./config";

interface AboutCopy {
  heading: string;
  introParagraphs: string[];
  technicalHeading: string;
  technicalParagraphs: string[];
  purposeHeading: string;
  purposeParagraphs: string[];
}

interface UIShape {
  siteName: string;
  nav: {
    posts: string;
    about: string;
    githubLabel: string;
    linkedinLabel: string;
    openThemeMenu: string;
    themeMenuLabel: string;
    light: string;
    dark: string;
    system: string;
    languageLabel: string;
  };
  footer: {
    rights: string;
  };
  home: {
    title: string;
    description: string;
  };
  post: {
    onThisPage: string;
    backToTop: string;
    copy: string;
    copied: string;
    error: string;
  };
  aboutPage: {
    title: string;
    description: string;
    copy: AboutCopy;
  };
}

export const ui: Record<Lang, UIShape> = {
  "pt-br": {
    siteName: "Quintela",
    nav: {
      posts: "Artigos",
      about: "Sobre",
      githubLabel: "GitHub de Lucas Quintela",
      linkedinLabel: "LinkedIn de Lucas Quintela",
      openThemeMenu: "Abrir menu de tema",
      themeMenuLabel: "Selecionar tema",
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
      languageLabel: "Idioma",
    },
    footer: {
      rights: "Todos os direitos reservados - Lucas Quintela",
    },
    home: {
      title: "Quintela | Engenharia de Software",
      description:
        "Artigos tecnicos sobre performance, testes, automacao e legibilidade de codigo.",
    },
    post: {
      onThisPage: "Nesta pagina",
      backToTop: "Voltar ao topo",
      copy: "Copiar",
      copied: "Copiado",
      error: "Erro",
    },
    aboutPage: {
      title: "Sobre o Autor | Quintela",
      description:
        "Perfil tecnico de Lucas Quintela, experiencia profissional e proposito do blog.",
      copy: {
        heading: "Sobre o Autor",
        introParagraphs: [
          "Atuo como Software Development Engineer in Test (SDET) e pesquisador em Engenharia de Software, com foco em traduzir regras de negocios na arquitetura de automacoes avancadas, algoritmos eficientes e analises complexas.",
          "Atualmente, sou mestrando em Engenharia de Software pela Universidade Federal do Pampa. Minha trajetoria e consolidada pelo Bacharelado em Ciencia da Computacao, alem de pos-graduacoes direcionadas a qualidade: Automacao de Testes de Software (Faculdade VINCIT) e Agile Testing (CESAR School).",
        ],
        technicalHeading: "Experiencia Tecnica",
        technicalParagraphs: [
          "Minha atuacao tecnica cobre o ciclo de desenvolvimento de ponta a ponta: do planejamento de testes a observabilidade em producao. Aplico estrategias de cobertura orientadas a risco, automacao de UI e API, e integracao continua (CI/CD).",
          "O objetivo do meu trabalho e a prevencao de defeitos (shift-left), a criacao de ciclos de feedback rapidos e a garantia de que as entregas cumpram rigorosamente os requisitos funcionais e nao-funcionais.",
          "Atualmente, faco parte da equipe do Luizalabs focando em automacao de qualidade. Minhas stacks de desenvolvimento sao centradas em Python e JavaScript, utilizando frameworks e ferramentas como Cypress, Selenium, k6 e Playwright para a construcao de suites de teste.",
          "Em meu historico profissional, atuei como Engenheiro de Software no CESAR e exerci o cargo de Diretor do Departamento de Sistemas de Informacao na Prefeitura de Macapa, onde gerenciei infraestrutura tecnologica e rotinas de seguranca da informacao.",
        ],
        purposeHeading: "O Proposito Deste Blog",
        purposeParagraphs: [
          "O intuito deste espaco e documentar de forma objetiva minhas pesquisas, praticas em Engenharia de Software, testes e Provas de Conceito (PoCs), com base nas vivencias extraidas diretamente dos projetos em que atuei e estou atuando.",
          "Este blog e o meu laboratorio aberto e diario de bordo tecnico. Neste espaco, priorizo o pragmatismo e a analise tecnica fundamentada em evidencias.",
          "Para assegurar total transparencia, os projetos e implementacoes discutidos serao disponibilizados em repositorios publicos, permitindo que qualquer pessoa possa revisar, auditar e reproduzir as solucoes apresentadas.",
          "O foco e dissecar trade-offs de design de codigo, automacao de APIs, saturacao de pipelines e testes exploratorios baseados em sessao, operando cada analise como uma investigacao cientifica rigorosa aplicada a cenarios do mundo real.",
        ],
      },
    },
  },
  en: {
    siteName: "Quintela",
    nav: {
      posts: "Posts",
      about: "About",
      githubLabel: "Lucas Quintela's GitHub",
      linkedinLabel: "Lucas Quintela's LinkedIn",
      openThemeMenu: "Open theme menu",
      themeMenuLabel: "Select theme",
      light: "Light",
      dark: "Dark",
      system: "System",
      languageLabel: "Language",
    },
    footer: {
      rights: "All rights reserved - Lucas Quintela",
    },
    home: {
      title: "Quintela | Software Engineering",
      description:
        "Technical posts on performance, testing, automation, and code readability.",
    },
    post: {
      onThisPage: "On this page",
      backToTop: "Back to top",
      copy: "Copy",
      copied: "Copied",
      error: "Error",
    },
    aboutPage: {
      title: "About the Author | Quintela",
      description:
        "Technical profile of Lucas Quintela, professional experience, and blog purpose.",
      copy: {
        heading: "About the Author",
        introParagraphs: [
          "I work as a Software Development Engineer in Test (SDET) and Software Engineering researcher, focused on translating business rules into advanced test automation architecture, efficient algorithms, and complex analysis.",
          "I am currently pursuing a master's degree in Software Engineering at Universidade Federal do Pampa. My background includes a Bachelor's degree in Computer Science and postgraduate programs focused on quality: Software Test Automation (Faculdade VINCIT) and Agile Testing (CESAR School).",
        ],
        technicalHeading: "Technical Experience",
        technicalParagraphs: [
          "My technical work spans the full development lifecycle: from test planning to production observability. I apply risk-based coverage strategies, UI and API automation, and continuous integration (CI/CD).",
          "My goal is defect prevention (shift-left), fast feedback cycles, and ensuring deliveries strictly meet both functional and non-functional requirements.",
          "Today, I am part of the Luizalabs team focused on quality automation. My development stacks are centered on Python and JavaScript, using frameworks and tools such as Cypress, Selenium, k6, and Playwright to build test suites.",
          "In my professional history, I worked as a Software Engineer at CESAR and served as Director of the Information Systems Department at the city hall of Macapa, where I managed technology infrastructure and information security routines.",
        ],
        purposeHeading: "The Purpose of This Blog",
        purposeParagraphs: [
          "The purpose of this space is to objectively document my research, software engineering practices, testing approaches, and Proofs of Concept (PoCs), based on lessons learned from real projects.",
          "This blog is my open lab and technical logbook. Here, I prioritize pragmatism and evidence-based technical analysis.",
          "To ensure full transparency, discussed projects and implementations are made available in public repositories so anyone can review, audit, and reproduce the proposed solutions.",
          "The focus is to dissect code design trade-offs, API automation, pipeline saturation, and session-based exploratory testing, treating each analysis as a rigorous scientific investigation applied to real-world scenarios.",
        ],
      },
    },
  },
  es: {
    siteName: "Quintela",
    nav: {
      posts: "Articulos",
      about: "Sobre",
      githubLabel: "GitHub de Lucas Quintela",
      linkedinLabel: "LinkedIn de Lucas Quintela",
      openThemeMenu: "Abrir menu de tema",
      themeMenuLabel: "Seleccionar tema",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
      languageLabel: "Idioma",
    },
    footer: {
      rights: "Todos los derechos reservados - Lucas Quintela",
    },
    home: {
      title: "Quintela | Ingenieria de Software",
      description:
        "Articulos tecnicos sobre rendimiento, pruebas, automatizacion y legibilidad de codigo.",
    },
    post: {
      onThisPage: "En esta pagina",
      backToTop: "Volver arriba",
      copy: "Copiar",
      copied: "Copiado",
      error: "Error",
    },
    aboutPage: {
      title: "Sobre el Autor | Quintela",
      description:
        "Perfil tecnico de Lucas Quintela, experiencia profesional y objetivo del blog.",
      copy: {
        heading: "Sobre el Autor",
        introParagraphs: [
          "Trabajo como Software Development Engineer in Test (SDET) e investigador en Ingenieria de Software, con foco en traducir reglas de negocio en arquitectura de automatizacion avanzada, algoritmos eficientes y analisis complejos.",
          "Actualmente curso una maestria en Ingenieria de Software en la Universidade Federal do Pampa. Mi trayectoria incluye una licenciatura en Ciencias de la Computacion y posgrados orientados a calidad: Automatizacion de Pruebas de Software (Faculdade VINCIT) y Agile Testing (CESAR School).",
        ],
        technicalHeading: "Experiencia Tecnica",
        technicalParagraphs: [
          "Mi trabajo tecnico cubre todo el ciclo de desarrollo: desde la planificacion de pruebas hasta la observabilidad en produccion. Aplico estrategias de cobertura basadas en riesgo, automatizacion de UI y API, e integracion continua (CI/CD).",
          "Mi objetivo es prevenir defectos (shift-left), crear ciclos de retroalimentacion rapidos y asegurar que las entregas cumplan rigurosamente los requisitos funcionales y no funcionales.",
          "Actualmente formo parte del equipo de Luizalabs enfocado en automatizacion de calidad. Mis stacks de desarrollo se centran en Python y JavaScript, usando frameworks y herramientas como Cypress, Selenium, k6 y Playwright para construir suites de prueba.",
          "En mi trayectoria profesional, trabaje como Ingeniero de Software en CESAR y me desempene como Director del Departamento de Sistemas de Informacion en la alcaldia de Macapa, donde gestione infraestructura tecnologica y rutinas de seguridad de la informacion.",
        ],
        purposeHeading: "El Proposito de Este Blog",
        purposeParagraphs: [
          "El objetivo de este espacio es documentar de forma objetiva mis investigaciones, practicas en Ingenieria de Software, pruebas y Pruebas de Concepto (PoCs), con base en experiencias de proyectos reales.",
          "Este blog es mi laboratorio abierto y bitacora tecnica. Aqui priorizo el pragmatismo y el analisis tecnico basado en evidencia.",
          "Para garantizar total transparencia, los proyectos e implementaciones discutidos se publican en repositorios publicos para que cualquier persona pueda revisar, auditar y reproducir las soluciones presentadas.",
          "El foco es analizar trade-offs de diseno de codigo, automatizacion de APIs, saturacion de pipelines y pruebas exploratorias basadas en sesion, tratando cada analisis como una investigacion cientifica rigurosa aplicada a escenarios reales.",
        ],
      },
    },
  },
};

export const getUI = (lang: Lang): UIShape => ui[lang] ?? ui[defaultLang];
