"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Bot, CornerDownLeft } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { sendMessageToGemini } from "@/app/actions"

import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
} from "@/src/components/ui/expandable-chat"

import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./ChatBubble"
import { ChatMessageList } from "./ChatMessageList"
import { ChatInput } from "./ChatInput"

// Interface pour les messages
interface Message {
    id: number
    content: string | undefined
    sender: "user" | "ai"
}

export default function MySimChatWindow() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            content: "Hello! How can I help you today?",
            sender: "ai",
        },
    ])

    const [input, setInput] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now(),
            content: input.trim(),
            sender: "user",
        }

        // Ajouter le message utilisateur
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            // Préparer l'historique pour Gemini (inclut le nouveau message)
            const conversationHistory = [...messages, userMessage]

            // Appeler Gemini via server action
            const aiResponse = await sendMessageToGemini(conversationHistory)

            // Ajouter la réponse de l'IA
            const aiMessage: Message = {
                id: Date.now() + 1,
                content: aiResponse,
                sender: "ai",
            }

            setMessages((prev) => [...prev, aiMessage])

        } catch (error) {
            console.error("Erreur lors de l'envoi du message:", error)

            // Message d'erreur pour l'utilisateur
            const errorMessage: Message = {
                id: Date.now() + 1,
                content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
                sender: "ai",
            }

            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setInput(e.target.value)
    }

    return (
        <div className="relative">
            <ExpandableChat
                size="lg"
                position="bottom-right"
                icon={<Bot className="h-6 w-6" />}


            >
                <ExpandableChatHeader className="flex-col text-center justify-center">
                    <h1 className="text-xl font-semibold">Who Am I.AI ✨</h1>
                    <p className="text-sm text-muted-foreground">
                        Ask me anything about me
                    </p>
                </ExpandableChatHeader>

                <ExpandableChatBody>
                    <ChatMessageList>
                        {messages.map((message: Message) => (
                            <ChatBubble
                                key={message.id}
                                variant={message.sender === "user" ? "sent" : "received"}
                            >
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src={
                                        message.sender === "user"
                                            ? ""
                                            : "/public/images/ai-avatar.webp"
                                    }
                                    fallback={message.sender === "user" ? "US" : "AI"}

                                />
                                <ChatBubbleMessage
                                    variant={message.sender === "user" ? "sent" : "received"}
                                >
                                    {message.content}
                                </ChatBubbleMessage>
                            </ChatBubble>
                        ))}

                        {isLoading && (
                            <ChatBubble variant="received">
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src="/public/images/ai-avatar.webp"
                                    fallback="AI"
                                />
                                <ChatBubbleMessage isLoading />
                            </ChatBubble>
                        )}
                    </ChatMessageList>
                </ExpandableChatBody>

                <ExpandableChatFooter>
                    <form
                        onSubmit={handleSubmit}
                        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                    >
                        <ChatInput
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                            disabled={isLoading}
                        />
                        <div className="flex items-center p-3 pt-0 justify-between">
                            <Button
                                type="submit"
                                size="sm"
                                className="ml-auto gap-1.5"
                                disabled={isLoading || !input.trim()}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </div>
                    </form>
                </ExpandableChatFooter>
            </ExpandableChat>
        </div>
    )
}