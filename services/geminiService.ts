
import { GoogleGenAI } from "@google/genai";
import { MenuItem } from '../types';

export const getMenuRecommendation = async (preference: string, menu: MenuItem[]): Promise<string> => {
  if (!process.env.API_KEY) {
    return Promise.reject("API key not found.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const menuString = menu.map(item => `${item.name}: ${item.description}`).join('\n');
    const prompt = `You are a helpful chef at 'The Gemini Cafe'. A customer is asking for a recommendation.
    
    Customer's preference: "${preference}"
    
    Here is our menu:
    ${menuString}
    
    Based on their preference and the menu, suggest ONE single dish.
    Respond with the name of the recommended dish followed by a brief, enticing reason why they would like it.
    For example: "I recommend the Gemini Burger. It's a rich and savory option that will surely satisfy your craving for a classic comfort food."
    Be concise and friendly.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text;
  } catch (error) {
    console.error("Error getting menu recommendation:", error);
    throw new Error("Sorry, I couldn't come up with a recommendation right now. Please try again.");
  }
};
