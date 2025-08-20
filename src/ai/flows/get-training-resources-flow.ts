'use server';

/**
 * @fileOverview An AI agent that recommends training resources.
 *
 * - getTrainingResources - A function that returns a list of training resources for a given set of technologies.
 */
import {ai} from '@/ai/genkit';
import {
  TrainingResource,
  TrainingResourcesInputSchema,
  TrainingResourcesOutputSchema,
} from './schemas/training-resources-schema';
import {z} from 'zod';

export async function getTrainingResources(
  technologies: string[]
): Promise<TrainingResource[]> {
  const {output} = await trainingResourcesFlow({technologies});
  return output?.resources || [];
}

const trainingResourcesPrompt = ai.definePrompt({
  name: 'trainingResourcesPrompt',
  input: {schema: TrainingResourcesInputSchema},
  output: {schema: TrainingResourcesOutputSchema},
  prompt: `
    You are an expert tech education curator. Given a list of technologies, you will recommend the top 3-5 best online learning resources for them.

    For each technology, provide a mix of official documentation, a highly-rated online course (e.g., on Udemy, Coursera, or a standalone platform), and a popular tutorial or guide.

    Provide the name of the resource, a brief, compelling one-sentence description, and the direct URL.

    Technologies:
    {{#each technologies}}
    - {{this}}
    {{/each}}
  `,
});

const trainingResourcesFlow = ai.defineFlow(
  {
    name: 'trainingResourcesFlow',
    inputSchema: TrainingResourcesInputSchema,
    outputSchema: TrainingResourcesOutputSchema,
  },
  async (input) => {
    const {output} = await trainingResourcesPrompt(input);
    return output!;
  }
);
