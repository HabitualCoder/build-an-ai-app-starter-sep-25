import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();
import { generateText, generateObject } from 'ai';
import { z } from 'zod';

// Sample data for testing
const appointmentText = "Team meeting tomorrow 3pm in the conference room with Guillermo and Sarah";
const namesText = "In the meeting, Guillermo and Lee discussed the new Vercel AI SDK with Sarah from marketing.";

async function compareOutputs() {
  console.log('\n=== Sample Data ===\n');
  console.log('Appointment text:', appointmentText);
  console.log('Names text:', namesText);

  // TODO: Add generateText example for extracting names
  // - Use generateText to extract names from namesText
  // - Log the output and its type
  // - Note that you'll need to parse the text string

  // TODO: Add generateObject example for structured appointment data
  // - Create a Zod schema for appointment details
  // - Use generateObject with the schema
  // - Log the structured output
  // - Show how you can directly access properties
}

compareOutputs().catch(console.error);