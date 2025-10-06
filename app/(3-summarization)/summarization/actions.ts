"use server";

import { generateObject } from "ai";
import { z } from "zod";
import { google } from "@ai-sdk/google";

// Update the summarySchema with detailed descriptions
const summarySchema = z.object({
  headline: z
    .string()
    .describe('The main topic or title of the summary. Max 5 words.'), // Concise headline
  context: z.string().describe(
    'Briefly explain the situation or background that led to this discussion. Max 2 sentences.', // Length guidance
  ),
  discussionPoints: z
    .string()
    .describe('Summarize the key topics discussed. Max 2 sentences.'), // Focused points
  takeaways: z.string().describe(
    'List the main decisions, action items, or next steps. **Include names** for assigned tasks. Max 2-3 bullet points or sentences.', // Specific instructions!
  ),
});

// ... rest of the generateSummary function ...

export const generateSummary = async (comments: any[]) => {
	console.log("Generating summary for", comments.length, "comments...");
	const { object: summary } = await generateObject({
		model: google('gemini-2.0-flash'),
		prompt: `Please summarize the following comments concisely, focusing on key decisions and action items.
      Comments:
      ${JSON.stringify(comments)}`,
		schema: summarySchema,
	});
	console.log("Summary generated:", summary);
	return summary;
};