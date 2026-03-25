import PromptRunModel from "../models/promptRun.model.js";
import { generateAIResponse } from "../services/openrouter.service.js";

export const runFlow = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: "prompt is required",
      });
    }

    const aiResponse = await generateAIResponse(prompt.trim());

    return res.status(200).json({
      success: true,
      message: "AI response generated successfully",
      data: {
        prompt: prompt.trim(),
        response: aiResponse,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      reason: "internal server error",
      message: error.message,
    });
  }
};

export const saveFlowRun = async (req, res) => {
  try {
    const { prompt, response } = req.body;

    if (!prompt || !prompt.trim() || !response || !response.trim()) {
      return res.status(400).json({
        success: false,
        message: "prompt and response are required",
      });
    }

    const newPromptRun = await PromptRunModel.create({
      prompt: prompt.trim(),
      response: response.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "conversation saved successfully",
      data: newPromptRun,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      reason: "internal server error",
      message: error.message,
    });
  }
};

export const getFlowHistory = async (req, res) => {
  try {
    const savedRuns = await PromptRunModel.find({})
      .sort({ createdAt: -1 })
      .limit(10);

    return res.status(200).json({
      success: true,
      message: "history fetched successfully",
      data: savedRuns,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      reason: "internal server error",
      message: error.message,
    });
  }
};
