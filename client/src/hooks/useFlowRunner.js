import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { getHistoryRequest, runFlowRequest, saveFlowRequest } from "../services/flow.service";
import { createEdge, createNodes } from "../utils/flowNodes";

export const useFlowRunner = () => {
  const [prompt, setPrompt] = useState("What is the capital of France?");
  const [result, setResult] = useState("The AI answer will appear here.");
  const [isRunning, setIsRunning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [history, setHistory] = useState([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);

  const nodes = useMemo(() => createNodes({ prompt, result, setPrompt }), [prompt, result]);
  const edges = useMemo(() => [createEdge()], []);

  const loadHistory = async () => {
    try {
      setIsHistoryLoading(true);
      const data = await getHistoryRequest();
      setHistory(data.data ?? []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load history");
    } finally {
      setIsHistoryLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const runFlow = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }

    try {
      setIsRunning(true);
      const data = await runFlowRequest(prompt.trim());
      setResult(data.data?.response || "No response received");
      toast.success("Flow executed successfully");
    } catch (error) {
      console.log("prompt")
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message || "Failed to run flow");
    } finally {
      setIsRunning(false);
    }
  };

  const saveConversation = async () => {
    if (!prompt.trim() || !result.trim() || result === "The AI answer will appear here.") {
      toast.error("Run the flow before saving");
      return;
    }

    try {
      setIsSaving(true);
      await saveFlowRequest({ prompt: prompt.trim(), response: result.trim() });
      toast.success("Conversation saved to MongoDB");
      await loadHistory();
    } catch (error) {
      console.log("saving")
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message || "Failed to save conversation");
    } finally {
      setIsSaving(false);
    }
  };

  return {
    prompt,
    result,
    nodes,
    edges,
    history,
    isRunning,
    isSaving,
    isHistoryLoading,
    runFlow,
    saveConversation,
  };
};
