/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
    firstName: 'Héric',
    lastName: 'Mendes',
    jobTitle: 'Front-end Dev | Javascript | React | React Native | NodeJS',
    city: 'Matão',
    state: 'São Paulo',
    phone: '(16) 99386-8494',
    email: 'heric.mendez00@gmail.com',
    education: [
      {
        school: 'Etec Sylvio de Mattos Carvalho',
        degree: 'Ensino Técnico',
        graduationDate: '(2019-2020)',
        description: 'Técnico em Desenvolvimento de Sistemas'
      },
      {
        school:"Fatec Taquaritinga",
        degree:"Ensino Superior",
        graduationDate:"(2022-2026)",
        description:"Tecnólogo em Análise e Desenvolvimento de Sistemas"
      }
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/HericMendez'
      }, 
      {
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/hericmendes/'
      }, 

{
    label: 'Portfolio',
    link: 'https://rpg-portfolio-react-hericmendez.vercel.app/'
  }, 

    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'ReactJS',
      "React Native",
      "Tailwind",
      "Bootstrap",
      "Sass",
      'Python',
   
    ],
    professionalSummary: `Sou um desenvolvedor Web e Mobile, com experiência na criação de aplicações funcionais, responsivas e altamente intuitivas, com foco na experiência de usuário, utilizando principalmente a linguagem Javascript, e as tecnologias  React, React Native e bibliotecas Front-end como Bootstrap e Tailwind.`,
    employmentHistory: [
      {
        jobTitle: 'Desenvolvedor Web/React (Remoto)',
        startDate: 'Novembro/2022',
        endDate: 'Atual',
        employer: "Biotrônica",
        city: 'São Carlos',
        achievements: [
          'Desenvolvimento de Interfaces e Aplicativos Web responsivos, incluindo a página principal e dashboards com React, Typescript, Sass e bibliotecas Front-end. Minhas soluções inovadoras melhoraram a experiência do usuário e forneceram insights valiosos aos gestores, agregando valor e eficiência ao negócio.',
        ]
      },
      {
        jobTitle: 'Desenvolvedor Front-end / Mobile',
        startDate: 'Agosto/2022',
        endDate: 'Junho/2023',
        employer: 'PolarSapiens',
        city: 'São Carlos',
        achievements: [
          'Desenvolvimento da aplicação de avaliação psicológica nas plataformas Web e Mobile, envolvendo o design das telas, implementação de designs responsivos e integração com APIs proprietárias, nas plataformas Web e Mobile, utilizando as tecnologias HTML, CSS, Javascript, React, React Natie e a plataforma Figma.',
        ]
      },

      {
        jobTitle: 'Desenvolvedor Web (Freelancer)',
        startDate: '',
        endDate: 'Julho/2022',
        employer: 'Dra. Michéle Murbach',
        city: 'São Paulo',
        achievements: [
          "Desenvolvimento da Home Page do escritório de advocacia da Dra. Michele Murbach, feito em HTML, usando um template pré definido e personalizado com as cores e assets escolhidos pela cliente. O destaque deste projeto é a função de troca de tema claro/escuro."
        ]
      },

      {
        jobTitle: 'Desenvovledor Web (Freelancer)',
        startDate: '',
        endDate: 'Novembro/2021',
        employer: 'ACDCIT',
        city: 'São Paulo',
        achievements: [
          "Desenvolvimento da Home Page da empresa utilizando HTML, CSS, Javascript e Bootstrap, agregando valor ao implementar um seletor de idiomas, proporcionando uma experiência personalizada para os usuários. Meu trabalho resultou em uma página inicial moderna, visualmente atraente e funcional, fortalecendo a presença online da empresa e atraindo potenciais clientes."
        ]
      },

      
    ],
    certifications:[
        {
            
            title: 'Toeic English Proficiency Test',
            organization: "Score: 740",
            year: "2023",
        },
        {
            
            title: 'Scrum Foundation Professional Certificate',
            organization: "Certiprof",
            year: "2021",
        },
        {
            
            title: 'Javascript Algorithms and Data Structures',
            organization: "FreeCodeCamp",
            year: "2021",
        },

    ],
    photo: 'https://i.imgur.com/Oxiupx8.png',
  }
  
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