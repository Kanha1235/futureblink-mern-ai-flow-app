import { Handle, Position } from "reactflow";

const InputNode = ({ data }) => {
  return (
    <div className="custom-node input-node">
      <div className="node-header">{data.label}</div>

      <textarea
        className="nodrag"
        id="prompt"
        name="prompt"
        value={data.value}
        onChange={(event) => data.onChange(event.target.value)}
        placeholder="Type your prompt here"
        rows={8}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;