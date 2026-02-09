import { GoogleGenAI } from "@google/genai";

// Lazy initialization to prevent app-wide crashes if the key is missing
const getAIInstance = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    return null;
  }
  try {
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Gemini AI initialization failed", e);
    return null;
  }
};

export const getAIAssistance = async (message: string) => {
  const ai = getAIInstance();
  
  if (!ai) {
    return "The AI assistant is currently not configured. Please ensure the API_KEY environment variable is set in your dashboard settings.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are an expert AI assistant for MM&GG Real Estate and Property Ltd. You help users find luxury properties, suggest furniture that matches their home style, and recommend paint colors. Use a professional, sophisticated, and helpful tone. MM&GG is a premium brand with a focus on green and gold aesthetics.",
      },
    });
    return response.text || "I'm sorry, I couldn't process that. How can I assist you with your property needs?";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The AI assistant encountered an error. Please try again later.";
  }
};