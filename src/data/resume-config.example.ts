import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Lafia Sabi Gado',
    photo: '/images/lafia.png', // Place your photo in public/images/
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: '4 years of experience',
      fr: '4 ans d\'expérience',
    },
    location: 'Parakou, Bénin',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Lafia Sabi Gado — Fullstack Developer',
    description: 'Interactive resume of Lafia Sabi Gado, Fullstack Developer specializing in React and Django.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'lafia-sabi-gado', href: 'https://github.com/Lafiasabigado' },
    { type: 'linkedin', label: 'Lafia Sabi Gado', href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/' },
    { type: 'email', label: 'lafiasabigado97@gmail.com' },
    { type: 'phone', label: '+229 01 56 25 96 32' },
    { type: 'location', label: 'Parakou, Bénin' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 910' },
        {name: { en: 'Bariba', fr: 'Bariba' }, level: { en: 'Native', fr : 'Natif' } },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Django' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'AWS' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'Tout-Talent', fr: 'Tout-Talent' },
      role: { en: 'Fullstack Developer', fr: 'Développeur Fullstack' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2025 - Present', fr: '2025 - Présent' },
      description: {
        en: 'Led the development of a SaaS platform used by 3k+ users. Built microservices architecture and modern React frontend.',
        fr: 'Direction du développement d\'une plateforme SaaS utilisée par 3k+ utilisateurs. Architecture microservices et frontend React moderne.',
      },
      techs: ['TypeScript', 'PostgreSQL', 'Django', 'Angular'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 8 developers within a 50-person product company. Agile/Scrum methodology with 2-week sprints, CI/CD pipeline with GitHub Actions, code reviews on every PR.',
          fr: 'Équipe de 8 développeurs au sein d\'une société produit de 50 personnes. Méthodologie Agile/Scrum avec sprints de 2 semaines, pipeline CI/CD avec GitHub Actions, code review sur chaque PR.',
        },
        tasks: {
          en: [
            'Designed and implemented the frontend architecture (monorepo, shared component library)',
            'Built a real-time notification system using WebSockets and Redis pub/sub',
            'Migrated legacy codebase from JavaScript to TypeScript (200+ files)',
            'Implemented role-based access control (RBAC) across the entire platform',
            'Set up automated testing with 85% code coverage (unit, integration, E2E)',
            'Led the migration from REST to GraphQL for the main API',
            'Built a dashboard analytics module with interactive charts and export features',
            'Mentored 3 junior developers through pair programming and weekly 1-on-1s',
          ],
          fr: [
            'Conception et implémentation de l\'architecture frontend (monorepo, bibliothèque de composants partagés)',
            'Création d\'un système de notifications temps réel via WebSockets et Redis pub/sub',
            'Migration du code legacy de JavaScript vers TypeScript (200+ fichiers)',
            'Implémentation d\'un contrôle d\'accès basé sur les rôles (RBAC) sur toute la plateforme',
            'Mise en place de tests automatisés avec 85% de couverture (unitaires, intégration, E2E)',
            'Pilotage de la migration de REST vers GraphQL pour l\'API principale',
            'Développement d\'un module de tableau de bord analytique avec graphiques interactifs et export',
            'Mentorat de 3 développeurs juniors via pair programming et 1-on-1 hebdomadaires',
          ],
        },
        training: {
          en: [
            'OpenClassrooms React course (5/5)',
            'OpenClassrooms Django course (5/5)',
          ],
          fr: [
            'Formation OpenClassrooms React (5/5)',
            'Formation OpenClassrooms Django (5/5)',
          ],
        },
        env: {
          en: 'Angular / TypeScript / Django/ PostgreSQL / GraphQL / Redis / Docker/ GitHub Actions / Datadog',
          fr: 'Angular / TypeScript / Django / PostgreSQL / GraphQL / Redis / Docker / GitHub Actions / Datadog',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'Intside', fr: 'Intside' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeur Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2024 - 2025', fr: '2024 - 2025' },
      description: {
        en: 'Gained experience in fullstack development.',
        fr: 'Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Vue.js', 'Django',],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'Brainwritor', fr: 'Brainwritor' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un assistant rédactionnel IA de documents, construit avec Next.Js',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://kloo.me/brainwritor',
      github: 'https://github.com/Lafiasabigado/Brainwritor',
    },
    {
      id: 'project-b',
      title: { en: 'Tikonna', fr: 'Tikonna' },
      description: {
        en: 'A website for the Tikonna association, built with React and Node.js.',
        fr: 'Site web de l\'association Tikonna.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      url: 'https://tikonna.org',
      github: 'https://github.com/Lafiasabigado/Tikonna',
    },
    {
      id: 'project-c',
      title: { en: 'Personal Portfolio', fr: 'Portfolio Personnel' },
      description: {
        en: 'My personal portfolio website showcasing my projects and experience.',
        fr: 'Mon site portfolio personnel présentant mes projets et expériences.',
      },
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      url: 'https://kloo.me/lafia',
      github: 'https://github.com/Lafiasabigado/lafiasabigado.dev',
    }
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Parakou', fr: 'Université de Parakou' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence en Informatique de Gestion' },
      specialty: { en: 'Informatics', fr: 'Informatique' },
      period: '2022 - 2025',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Football', fr: 'Football' },
      details: [
        { en: 'Football Player', fr: 'Joueur de football' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
      details: [
        { en: 'Contributor to several open source projects on GitHub', fr: 'Contributeur à plusieurs projets open source sur GitHub' },
      ],
    },
    {
      title: { en: 'Music', fr: 'Musique' },
      details: [
        { en: 'Rap,Pop', fr: 'Rap,Pop' },
      ],
    },
    {
      title: { en: 'Travel', fr: 'Voyage' },
      details: [
        { en: 'Passionate about discovering new cultures and cuisines', fr: 'Passionné par la découverte de nouvelles cultures et cuisines' },
      ],
    }
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
