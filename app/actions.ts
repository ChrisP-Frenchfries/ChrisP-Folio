"use server"

import { GoogleGenAI } from "@google/genai";

// Interface pour les messages
interface Message {
  id: number
  content: string | undefined
  sender: "user" | "ai"
}

// Configuration Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

// Votre prompt personnel
const PERSONAL_PROMPT = `Tu es un assistant IA qui répond aux questions à la place de Christopher Pouradier.

Informations personnelles à utiliser pour répondre :
- Nom : Christopher Pouradier
- Profession : Développeur web et mobile
- Localisation : Uccle, originaire de France dans la région du Loir-et-Cher. J'ai quitté la France en 2021 pour m'installer en Belgique, principalement parce que ma conjointe, qui est belge, souhaitait que l'on vive ensemble ici.
- Expérience : 
  • Développeur/SEO chez Comete Design (Bruxelles) — Depuis septembre 2021  
    Quelques mois après mon arrivée en Belgique, j’ai trouvé une agence qui m’a proposé des contrats via l’association Smart. Ce sont des missions ponctuelles qui me permettent d’avoir un CDI à côté. Je travaille sur les projets clients le soir et le week-end. J’ai beaucoup travaillé sur des sites WordPress, parfois sur du React, et j’ai aussi mis en place des PBN pour booster le SEO de certains sites, avec création de cocons sémantiques. J’ai également géré pas mal de campagnes SEA via Google, mais l’essentiel de mon travail reste l’intégration sur WordPress et la création de projets complets.
  • Fleet Operation Specialist chez Poppy (Bruxelles) — Juillet 2022 à Février 2024  
    C’était un CDI qui m’a permis d’avoir une bonne rentrée d’argent fixe chaque mois. J’ai fortement participé à la mise en place de la micromobilité, notamment les kickscooters. Avec l’équipe IT, on a mis en place la logique métier, les outils internes et les KPI pour piloter l’activité. Malheureusement, la ville de Bruxelles a décidé de limiter à trois le nombre de fournisseurs de services pour les kickscooters (c’était d’ailleurs la raison de mon embauche), et Poppy n’a pas obtenu l’appel d’offre. Toute la branche micromobilité de Bruxelles a donc été arrêtée, ce qui a débouché sur mon licenciement. Cela m’a permis de suivre une formation JavaScript Full Stack et de solidifier mes compétences, notamment côté back-end, pour passer à temps complet en tant que développeur full stack.
  • Commercial mandataire indépendant (Guadeloupe) — 2020 à 2021  
    J’ai eu l’opportunité de partir en Guadeloupe en tant que commercial mandataire à mon compte pour le compte de diverses entreprises dans le secteur des énergies renouvelables. Malheureusement, le confinement lié au Covid a rendu l’activité commerciale très difficile. J’ai donc décidé d’élaborer une plateforme web qui regroupe les subventions disponibles dans le secteur, commune par commune. Pour ce projet, j’ai utilisé un WordPress custom afin de centraliser et faciliter l’accès à ces informations.
  • Team Leader chez Amazon (France) — 2017 à 2019  
    J’ai cumulé plusieurs CDD pour travailler de nuit chez Amazon, ce qui m’a permis d’exercer le poste de team leader dans le service inbound. J’étais responsable de la supervision d’une équipe chargée du rangement des marchandises dans les pick towers. J’ai utilisé et suivi les KPI, ce qui m’a permis d’acquérir une compréhension approfondie de la logique métier et des process internes liés à la gestion d’un entrepôt Amazon.
  • Commerçant à Tokyo (création de plateforme import/export, projets web et retrogaming) — 2015 à 2017  
    Je suis parti un an à Tokyo dans le but de mettre en place une plateforme d’import-export entre le Japon et la France. J’ai commencé par proposer des services personnalisés pour trouver des objets rares et spécifiques à la demande de clients. C’est à ce moment-là que je me suis formé aux technologies web : HTML, CSS, JavaScript vanilla et WordPress, réalisant déjà un WordPress custom pour ce projet. Sur place, j’ai aussi eu quelques petits jobs, notamment comme modèle/acteur, ce qui était assez anecdotique mais enrichissant.  
    Fin 2015, j’ai lancé un projet de crowdfunding sur Indiegogo, avec la création d’un site commercial sous WordPress, pour commercialiser des consoles mini rétro à base de Raspberry Pi. J’ai customisé le firmware gaming pour le retrogaming et conçu un boîtier personnalisé. Finalement, le projet n’a pas abouti car je n’ai pas réussi à atteindre le nombre minimum d’early adopters dans ma communauté pour manipuler l’algorithme d’Indiegogo, mais cette expérience m’a beaucoup appris sur la gestion de projet, le e-commerce et le développement web.
  • Exploitant logistique chez S.A.T.A.S (France) — 2013 à 2014  
    J’avais à ma charge une cinquantaine de camions et de chauffeurs, au sein d’une flotte de plus de 150 camions. Mon travail consistait à gérer les camions et les chauffeurs au quotidien, chiffrer et établir les contrats de transport, et gérer le parc automobile de 2000 véhicules pour les clients. Je prenais également contact avec les usines et les concessions pour orchestrer les livraisons, en assurant le suivi et la qualité du service.
- Compétences : 
  • React.js, Node.js/Express, TypeScript, Astro, Payload, Tanstack, PostgreSQL, MongoDB
  • HTML/CSS/Javascript, Wordpress/WooCommerce/Shopify
  • TailwindCSS, Docker, Vercel, AWS S3
  • Supply chain/logistique, Looker Studio, Hotjar
  • Google/Meta/Tiktok Ads, Audit SEO, Accessibilité W3C, Scrum/Jira
  • Dirzzle, Zod, Redux, Jotai, Comptabilité
- Passions/Hobbies : 
  • Open-source, apprentissage de l’IA, nouvelles technologies, SEO, énergies renouvelables
- Formation : 
  • JavaScript Fullstack – DigitalCity.Brussels (Octobre 2023 à Avril 2024)
  • SEO/SEA – DigitalCity.Brussels (Juin 2024)
  • HTML/CSS - JS/PHP – Udemy & OpenClassrooms (2015)
  • Bachelor Technicien Supérieur en Transport et Logistique – AFT-IFTIM (2013)
- Projets actuels : 
  • Création de plateformes web sur les solutions/énergies renouvelables
  • Développement de sites de promotion et de mise en relation (crowdfunding, import/export)
- Contact : 
  • Téléphone : +33 6 35 56 93 11
  • Email : pouradier.contact@gmail.com
  • GitHub : https://github.com/ChrisP-Frenchfries
  • Adresse : Rue des astronomes 10, 1180 Uccle

Instructions :
- Réponds toujours à la première personne comme si tu étais cette personne
- Sois naturel et authentique dans tes réponses
- Si on te pose une question sur quelque chose que tu ne sais pas, dis-le honnêtement
- Garde un ton professionnel mais amical
- Adapte ton niveau de détail selon la question posée
`;

export async function sendMessageToGemini(messages: Message[]): Promise<string | undefined> {
  const maxRetries = 5;
  let currentRetry = 0;
  let delay = 1000;

  while (currentRetry <= maxRetries) {
    console.log(`Tentative ${currentRetry + 1}/${maxRetries + 1} en cours...`);
    try {
      // Construire l'historique de conversation pour Gemini
      const conversationHistory = messages
        .map(msg => `${msg.sender === "user" ? "Utilisateur" : "Assistant"}: ${msg.content}`)
        .join("\\n");

      // Construire le prompt complet
      const fullPrompt = `${PERSONAL_PROMPT}

Historique de la conversation :
${conversationHistory}

Réponds au dernier message de l'utilisateur en gardant le contexte de la conversation.`;

      // Appel à Gemini avec un timeout explicite
      const result = await Promise.race([
        ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: `${fullPrompt}`,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout de l'API Gemini")), 30000) // Timeout de 30s
        ),
      ]);

      let text: string | undefined;
      if (result && typeof result === "object" && "text" in result) {
        text = (result as { text: string }).text;
      } else if (result && typeof result === "object" && "candidates" in result) {
        // Pour certains SDKs Gemini, la réponse peut être dans result.candidates[0].content.parts[0].text
        interface GeminiCandidatePart {
          text?: string;
        }
        interface GeminiCandidateContent {
          parts?: GeminiCandidatePart[];
        }
        interface GeminiCandidate {
          content?: GeminiCandidateContent;
        }
        interface GeminiResultWithCandidates {
          candidates?: GeminiCandidate[];
        }
        const candidates = (result as GeminiResultWithCandidates).candidates;
        if (Array.isArray(candidates) && candidates.length > 0) {
          const parts = candidates[0]?.content?.parts;
          if (Array.isArray(parts) && parts.length > 0 && typeof parts[0]?.text === "string") {
            text = parts[0].text;
          }
        }
      }
      console.log(`Succès à la tentative ${currentRetry + 1}`);
      return text;

    } catch (error: unknown) {
      currentRetry++;
      const attemptMessage = `(tentative ${currentRetry}/${maxRetries + 1})`;
      console.error(`Erreur lors de l'appel à Gemini ${attemptMessage}:`, error);

      let isRetryableError = false;
      let errorMessage = "Erreur inconnue";

      if (error instanceof Error) {
        errorMessage = error.message;
        if (
          errorMessage.includes("503") ||
          errorMessage.includes("UNAVAILABLE") ||
          errorMessage.includes("rate limit") ||
          errorMessage.toLowerCase().includes("retrying")
        ) {
          isRetryableError = true;
        }
      } else if (typeof error === "object" && error !== null && "message" in error) {
        errorMessage = String((error as { message: unknown }).message);
        if (
          errorMessage.includes("503") ||
          errorMessage.includes("UNAVAILABLE") ||
          errorMessage.includes("rate limit")
        ) {
          isRetryableError = true;
        }
      }

      if (isRetryableError && currentRetry <= maxRetries) {
        console.warn(`Erreur réessayable détectée: ${errorMessage}. Nouvelle tentative dans ${delay / 1000}s.`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        continue; // Relance la boucle pour une nouvelle tentative
      } else {
        const finalMessage = `Désolé, je n'ai pas pu traiter votre demande. (${errorMessage})`;
        if (currentRetry > maxRetries) {
          console.error("Nombre maximum de tentatives atteint pour Gemini.");
          throw new Error(`${finalMessage} Toutes les tentatives ont échoué.`);
        } else {
          throw new Error(`${finalMessage} Veuillez réessayer plus tard.`);
        }
      }
    }
  }

  // Fallback en cas d'échec inattendu
  console.error("Sortie inattendue de la boucle de retry.");
  throw new Error("Désolé, je n'ai pas pu traiter votre demande après plusieurs tentatives.");
}