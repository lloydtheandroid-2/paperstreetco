
'use server';
/**
 * @fileOverview An AI flow for generating self-contained web applications.
 *
 * - generateCode - A function that takes a user prompt and returns a complete HTML file.
 */

import {ai} from '@/ai/genkit';
import { GenerateCodeInput, GenerateCodeInputSchema, GenerateCodeOutput, GenerateCodeOutputSchema } from './schemas';
import { z } from 'genkit';

export async function generateCode(prompt: GenerateCodeInput): Promise<GenerateCodeOutput> {
  return generateCodeFlow(prompt);
}

const generationPrompt = ai.definePrompt({
  name: 'generateCodePrompt',
  input: { schema: z.object({ userInput: GenerateCodeInputSchema }) },
  output: { schema: GenerateCodeOutputSchema },
  prompt: `
    You are an expert web developer who specializes in creating simple, single-file web applications.
    Your task is to generate a complete, self-contained HTML document based on the user's prompt.

    RULES:
    - The output MUST be a single HTML file.
    - All CSS must be included in a <style> tag in the <head>.
    - All JavaScript must be included in a <script> tag at the end of the <body>.
    - DO NOT use any external libraries, frameworks (like React, Vue, etc.), or external assets.
    - The generated code should be simple, clean, and directly executable by a browser.
    - Fulfill the user's request as described in the prompt.

    User Prompt: {{{userInput}}}
  `,
});

const generateCodeFlow = ai.defineFlow(
  {
    name: 'generateCodeFlow',
    inputSchema: GenerateCodeInputSchema,
    outputSchema: GenerateCodeOutputSchema,
  },
  async (prompt) => {
    const { output } = await generationPrompt({ userInput: prompt });
    return output!;
  }
);
