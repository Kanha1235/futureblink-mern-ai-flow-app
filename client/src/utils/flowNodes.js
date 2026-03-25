export const createNodes = ({ prompt, result, setPrompt }) => [
  {
    id: "input-node",
    type: "inputNode",
    position: { x: 80, y: 120 },
    data: {
      label: "Prompt Input",
      value: prompt,
      onChange: setPrompt,
    },
  },
  {
    id: "result-node",
    type: "resultNode",
    position: { x: 520, y: 120 },
    data: {
      label: "AI Response",
      value: result,
    },
  },
];

export const createEdge = () => ({
  id: "prompt-to-result",
  source: "input-node",
  target: "result-node",
  animated: true,
  style: { strokeWidth: 2 },
});
