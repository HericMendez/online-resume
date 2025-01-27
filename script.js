/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: "Héric Vinícius",
  lastName: "Mendes",
  jobTitle: "Front-end Developer | JavaScript | React | React Native | Node.js",
  city: "Matão",
  state: "São Paulo",
  phone: "(16) 99386-8494",
  email: "heric.mendez00@gmail.com",
  education: [
    {
      school: "Etec Sylvio de Mattos Carvalho",
      degree: "Ensino Técnico em Desenvolvimento de Sistemas",
      graduationDate: "(2019-2020)",
      description:
        "Formação técnica focada em desenvolvimento de sistemas, com ênfase em lógica de programação, design de interfaces e banco de dados.",
    },
    {
      school: "Fatec Taquaritinga",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      graduationDate: "(2022-2026)",
      description:
        "Curso superior em desenvolvimento de software, abordando metodologias ágeis, engenharia de software, e desenvolvimento web/mobile.",
    },
  ],
  links: [
    {
      label: "GitHub",
      link: "https://github.com/HericMendez",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hericmendes/",
    },
    {
      label: "Portfólio",
      link: "https://rpg-portfolio-react-hericmendez.vercel.app/",
    },
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "ReactJS",
    "React Native",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Git/GitHub",
    "APIs RESTful",
    "Design Responsivo",
    "Docker",
    "MongoDB",
  ],
  professionalSummary: `Desenvolvedor Front-end e Mobile com sólida experiência em tecnologias modernas, incluindo React, React Native e Node.js. Destaco-me na criação de interfaces elegantes e funcionais, priorizando a experiência do usuário. Possuo conhecimento em metodologias ágeis, como Scrum e Kanban, e habilidades em JavaScript, TypeScript, Tailwind CSS, Bootstrap, Sass, Git, APIs RESTful, design responsivo e Docker. Comprometido com a entrega de soluções de alta qualidade, busco constantemente aprimorar minhas competências técnicas e interpessoais para agregar valor aos projetos em que atuo.`,
  employmentHistory: [
    {
      jobTitle: "Desenvolvedor Front-end (remoto)",
      startDate: "Janeiro/2023",
      endDate: "Atual",
      employer: "Dtec",
      city: "São Paulo",
      achievements: [
        "Desenvolvimento de interfaces usando React com Ant Design para criar layouts responsivos e otimizados para diversos dispositivos.",
        "Consumo de APIs RESTful para integrar funcionalidades e gerenciar dados de forma eficiente.",
        "Utilização de Docker para configurar e rodar o back-end em ambiente de desenvolvimento, garantindo escalabilidade e estabilidade.",
        "Colaboração no desenvolvimento de soluções voltadas para o cliente, melhorando a experiência e usabilidade do sistema.",
      ],
    },
    {
      jobTitle: "Desenvolvedor Web/React (Remoto)",
      startDate: "Novembro/2022",
      endDate: "Janeiro/2024",
      employer: "Biotrônica",
      city: "São Carlos",
      achievements: [
        "Desenvolvimento de dashboards interativos e responsivos utilizando React, TypeScript e Sass, melhorando a experiência do usuário.",
        "Criação de soluções que otimizam a análise de dados para gestores, resultando em decisões mais ágeis e estratégicas.",
        "Colaboração direta com equipes multidisciplinares para entrega de projetos de alto impacto.",
      ],
    },

    {
      jobTitle: "Desenvolvedor Front-end / Mobile",
      startDate: "Agosto/2022",
      endDate: "Junho/2023",
      employer: "PolarSapiens",
      city: "São Carlos",
      achievements: [
        "Desenvolvimento completo de uma aplicação de avaliação psicológica para Web e Mobile, incluindo integração com APIs.",
        "Implementação de designs responsivos e acessíveis, utilizando tecnologias como React Native e Figma.",
        "Contribuição para o aumento da retenção de usuários através de melhorias contínuas na interface e usabilidade.",
      ],
    },
    {
      jobTitle: "Desenvolvedor Web (Freelancer)",
      startDate: "",
      endDate: "Julho/2022",
      employer: "Dra. Michéle Murbach",
      city: "São Paulo",
      achievements: [
        "Criação da Home Page de um escritório de advocacia com design personalizado e funcionalidade de tema claro/escuro.",
        "Uso de HTML e CSS para atender às necessidades específicas da cliente, garantindo alinhamento visual e de marca.",
      ],
    },
    {
      jobTitle: "Desenvolvedor Web (Freelancer)",
      startDate: "",
      endDate: "Novembro/2021",
      employer: "ACDCIT",
      city: "São Paulo",
      achievements: [
        "Desenvolvimento de uma página inicial moderna e multilíngue utilizando Bootstrap e JavaScript.",
        "Adição de um seletor de idiomas, aumentando o alcance internacional do site e atraindo novos clientes.",
      ],
    },
  ],
  certifications: [
    {
      title: "TOEIC English Proficiency Test",
      organization: "Score: 740",
      year: "2023",
    },
    {
      title: "Scrum Foundation Professional Certificate",
      organization: "CertiProf",
      year: "2021",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      organization: "FreeCodeCamp",
      year: "2021",
    },
    {
      title: "Banco de Dados SQL do Zero ao Avançado (8 horas)",
      organization: "Udemy",
      year: "2024",
    },
    {
      title: "Python Completo do Zero ao Avançado (26,5 horas)",
      organization: "Udemy",

      year: "2024",
    },
    {
      title:
        "Testes no Frontend com ReactJS - TDD, Vitest, Cypress (4,5 horas)",
      organization: "Udemy",

      year: "2025",
    },
  ],
  photo: "https://i.imgur.com/Oxiupx8.png",
};


  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.state
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()

/*
Banco de Dados SQL do Zero ao Avançado - 8 horas
https://www.udemy.com/course/curso-sql-do-zero-ao-avancado/learn/lecture/27714994?start=15#overview

Python Completo do Zero ao Avançado - 26,5 horas
https://www.udemy.com/course/programacao-python-do-basico-ao-avancado/learn/lecture/25338098?start=15#overview

Testes no frontend com ReactJS - TDD, Vitest, Cypress - 4,5 horas
https://www.udemy.com/course/testes-no-frontend-com-reactjs-tdd-vitest-cypress-e-mais/learn/lecture/42486678?start=0#overview 


Banco de Dados SQL do Zero ao Avançado - 8 horas

Python Completo do Zero ao Avançado - 26,5 horas

Testes no frontend com ReactJS - TDD, Vitest, Cypress - 4,5 horas

*/

