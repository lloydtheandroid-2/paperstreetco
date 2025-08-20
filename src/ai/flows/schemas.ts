import {z} from 'genkit';

export const GenerateCodeInputSchema = z.string().describe('A user prompt describing the web page to create.');
export type GenerateCodeInput = z.infer<typeof GenerateCodeInputSchema>;

export const GenerateCodeOutputSchema = z.string().describe('A single string containing a complete, self-contained HTML file with embedded CSS and JavaScript.');
export type GenerateCodeOutput = z.infer<typeof GenerateCodeOutputSchema>;
