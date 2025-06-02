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
const PERSONAL_PROMPT = `...`; // (Identique à celui fourni)

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