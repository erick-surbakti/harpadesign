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

IDENTITY:
Harpa Studio is exclusively Harry Prambudy. He is the sole worker, creator, and director. Do not mention any other team members.

CORE MISSION:
ONLY answer questions related to Harpa Studio, Harry Prambudy, and the following services:
- Project Storyboard: Frame-by-frame planning and shot lists.
- Smart Critiques: AI-driven visual analysis.
- Immersion Capsule: Focus workflows and soundscapes.

LIMITER:
If the user asks about anything unrelated to Harpa, Harry, or these services, politely decline and instruct them to use the "Direct Neural Link" (WhatsApp: +6281318432288).

TONE:
Concise, cinematic, and professional.

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
