// lib/openai.ts
// lib/openai.ts
import OpenAI from 'openai';

// Set up OpenAI API configuration with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is added to your .env file
  baseURL: 'https://api.openai.com/v1', // Base URL for OpenAI
});

// Function to get Pomodoro estimations from OpenAI
export const getPomodoroEstimation = async (task: string): Promise<string> => {
  try {
    // Request OpenAI to break down the task into Pomodoros
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: `Break this task into manageable pomodoros: "${task}"`,
      max_tokens: 150, // Keep this limit low
    });
    

    // Extract and return the result (list of Pomodoros)
    return response.choices[0].text?.trim() || 'No tasks returned from OpenAI';
  } catch (error) {
    console.error('Error with OpenAI API call:', error);
    throw new Error('Failed to get Pomodoro estimation');
  }
};
