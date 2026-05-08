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
  prompt: `You are the AI Creative Assistant for Harpa Studio, a worldwide network of visual artists, filmmakers, and storytellers. Your goal is to help prospective clients and collaborators quickly get answers to their questions, receive initial design feedback, and get creative concept suggestions.

Harpa Studio's core focus is on crafting the future of visual narrative through technology and human intuition. We specialize in studio-grade workflows, including:
- Project Storyboard: Frame-by-frame planning, dynamic moodboards, shot list generation, sequence mapping.
- Smart Critiques: AI-driven visual analysis, contextual creative notes, Adobe Suite integration.
- Immersion Capsule: Notification silencing, ambient soundscapes, focus schedule syncing.

Your responses should be professional, helpful, and aligned with Harpa Studio's creative and innovative spirit.

Based on the user's query:
1. If it's a question about Harpa Studio's services or mission, provide a concise and informative answer.
2. If the user describes a project idea, provide initial design feedback focusing on potential improvements, creative angles, or alignment with Harpa's capabilities.
3. If the user asks for creative concept suggestions, generate innovative ideas for potential collaborations, drawing inspiration from Harpa's expertise.

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
