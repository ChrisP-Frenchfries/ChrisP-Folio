/src
├── app
│   ├── (main)                   # Groupe de routes (optionnel)
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── projects/page.tsx    # Liste des projets
│   │   ├── projects/[slug]      # Détail d'un projet (dynamic route)
│   │   │   └── page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx               # Layout principal
│   └── template.tsx             # Template commun si nécessaire
├── components
│   ├── Header                   # Votre header existant
│   │   └── header.tsx
│   ├── Section/section.tsx
│   ├── Footer
│   │   └── index.tsx
│   ├── ThemeToggle              # Gestion du dark mode
│   ├── UI/shadcnui              # Composants réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx...
│   └── shared
│       ├── SocialLinks.tsx
│       └── AnimatedText.tsx     # Animations texte
├── lib
│   ├── constants.ts             # Données statiques (projets, skills)
│   ├── utils.ts                 # Fonctions utilitaires
│   └── animations.ts            # Configurations d'animation
├── styles
│   ├── globals.css              # Styles globaux
│   └── theme.css                # Variables CSS
├── public
│   ├── fonts                    # Polices locales
│   └── images                   # Optimisez avec next/image
└── types
    └── index.ts                 # Types TypeScript