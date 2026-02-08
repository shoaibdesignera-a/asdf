
import { GoogleGenAI } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (message: string) => {
  try {
    // Correct method: use ai.models.generateContent directly with model name and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are an expert AI assistant for MM&GG Real Estate and Property Ltd. You help users find luxury properties, suggest furniture that matches their home style, and recommend paint colors. Use a professional, sophisticated, and helpful tone. MM&GG is a premium brand with a focus on green and gold aesthetics.",
      },
    });
    // The GenerateContentResponse features a `text` property (not a method).
    return response.text || "I'm sorry, I couldn't process that. How can I assist you with your property needs?";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The AI assistant is currently unavailable. Please reach out to our human agents via the contact page.";
  }
};
