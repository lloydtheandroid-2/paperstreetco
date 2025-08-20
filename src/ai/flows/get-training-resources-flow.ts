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
    You are an expert tech education curator.
    Your task is to recommend the top 3-5 best online learning resources for a given list of technologies.

    For each technology, please provide a mix of the following types of resources:
    1.  The official documentation.
    2.  A highly-rated online course (e.g., from platforms like Udemy, Coursera, freeCodeCamp, or a standalone site).
    3.  A popular and well-regarded tutorial or in-depth guide (e.g., a blog post, a video series on YouTube).

    For each resource, you must provide:
    - The name of the resource.
    - A brief, compelling one-sentence description explaining what it is and why it's valuable.
    - The direct URL to the resource.

    Here are the technologies to find resources for:
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
