'use server';
/**
 * @fileOverview This file implements a Genkit flow for the AI Creative Assistant chatbot.
 *
 * - aiCreativeAssistantChatbot - A function that handles interactions with the AI Creative Assistant.
 * - AICreativeAssistantChatbotInput - The input type for the aiCreativeAssistantChatbot function.
 * - AICreativeAssistantChatbotOutput - The return type for the aiCreativeAssistantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICreativeAssistantChatbotInputSchema = z.object({
  query: z.string().describe("The user's question, project idea description, or request for creative concepts."),
});
export type AICreativeAssistantChatbotInput = z.infer<typeof AICreativeAssistantChatbotInputSchema>;

const AICreativeAssistantChatbotOutputSchema = z.object({
  response: z.string().describe("The AI Creative Assistant's detailed and helpful response."),
});
export type AICreativeAssistantChatbotOutput = z.infer<typeof AICreativeAssistantChatbotOutputSchema>;

export async function aiCreativeAssistantChatbot(input: AICreativeAssistantChatbotInput): Promise<AICreativeAssistantChatbotOutput> {
  return aiCreativeAssistantChatbotFlow(input);
}

const aiCreativeAssistantChatbotPrompt = ai.definePrompt({
  name: 'aiCreativeAssistantChatbotPrompt',
  input: {schema: AICreativeAssistantChatbotInputSchema},
  output: {schema: AICreativeAssistantChatbotOutputSchema},
  prompt: `You are the Neural Concierge for Harpa Studio. 

CRITICAL IDENTITY:
Harpa Studio is exclusively operated by one person: Harry Prambudy. He is a self-taught director, visual artist, and storyteller based in Depok, Indonesia. You must refer to Harry as the sole creator and director.

CORE MISSION:
Your goal is to answer questions about Harpa Studio's services and Harry's creative philosophy. 

HARPA SERVICES:
- Project Storyboard: Frame-by-frame planning, shot list generation.
- Smart Critiques: AI-driven visual analysis and contextual notes.
- Immersion Capsule: Focus workflows and ambient soundscapes.

GUIDELINES:
1. ONLY answer questions related to Harpa Studio, Harry Prambudy, and the listed services.
2. If the user asks about other team members, clarify that Harry Prambudy is the sole worker/creator.
3. If you cannot answer a question or if the user asks for direct contact, instruct them to use the "Direct Neural Link" (WhatsApp) provided in the terminal interface.
4. Keep responses concise, professional, and cinematic.

User Query: "{{{query}}}"`,
});

const aiCreativeAssistantChatbotFlow = ai.defineFlow(
  {
    name: 'aiCreativeAssistantChatbotFlow',
    inputSchema: AICreativeAssistantChatbotInputSchema,
    outputSchema: AICreativeAssistantChatbotOutputSchema,
  },
  async (input) => {
    const {output} = await aiCreativeAssistantChatbotPrompt(input);
    return output!;
  }
);
