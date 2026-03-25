import envObj from "../configs/env.config.js";

export const generateAIResponse = async (prompt) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${envObj.openRouterApiKey}`,
    },
    body: JSON.stringify({
      model: envObj.openRouterModel,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Keep the answer concise, clear, and useful for a dashboard UI.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error?.message || "OpenRouter request failed");
  }

  return result?.choices?.[0]?.message?.content?.trim() || "No answer returned by model.";
};
