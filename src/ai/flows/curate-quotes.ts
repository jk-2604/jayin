// src/ai/flows/curate-quotes.ts
'use server';

/**
 * @fileOverview A flow that curates quotes for the home page using an LLM.
 *
 * - curateQuotes - A function that curates a list of quotes.
 * - CurateQuotesInput - The input type for the curateQuotes function.
 * - CurateQuotesOutput - The output type for the curateQuotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateQuotesInputSchema = z.object({
  topic: z.string().describe('The topic or theme for the quotes.'),
  numberOfQuotes: z.number().describe('The number of quotes to generate.'),
});
export type CurateQuotesInput = z.infer<typeof CurateQuotesInputSchema>;

const CurateQuotesOutputSchema = z.object({
  quotes: z.array(z.string()).describe('An array of curated quotes.'),
});
export type CurateQuotesOutput = z.infer<typeof CurateQuotesOutputSchema>;

export async function curateQuotes(input: CurateQuotesInput): Promise<CurateQuotesOutput> {
  return curateQuotesFlow(input);
}

const curateQuotesPrompt = ai.definePrompt({
  name: 'curateQuotesPrompt',
  input: {schema: CurateQuotesInputSchema},
  output: {schema: CurateQuotesOutputSchema},
  prompt: `You are an expert curator of quotes. Your task is to select {{numberOfQuotes}} quotes related to the topic of "{{topic}}".  These quotes should be suitable for display on a personal website to provide intellectual stimulation and showcase a philosophical focus.  Return these as a JSON array of strings.

Quotes:`, // Changed Handlebars syntax to match the guide
});

const curateQuotesFlow = ai.defineFlow(
  {
    name: 'curateQuotesFlow',
    inputSchema: CurateQuotesInputSchema,
    outputSchema: CurateQuotesOutputSchema,
  },
  async input => {
    const {output} = await curateQuotesPrompt(input);
    return output!;
  }
);
