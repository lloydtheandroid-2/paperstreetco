import {z} from 'zod';

export const TrainingResourceSchema = z.object({
  name: z.string().describe('The name of the training resource.'),
  description: z
    .string()
    .describe('A brief, one-sentence description of the resource.'),
  url: z.string().url().describe('The direct URL to the resource.'),
});

export const TrainingResourcesInputSchema = z.object({
  technologies: z.array(z.string()).describe('An array of technology names.'),
});

export const TrainingResourcesOutputSchema = z.object({
  resources: z
    .array(TrainingResourceSchema)
    .describe('A list of recommended training resources.'),
});

export type TrainingResource = z.infer<typeof TrainingResourceSchema>;
