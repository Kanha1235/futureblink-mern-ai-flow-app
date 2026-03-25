import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {
  return (
    <div className="custom-node result-node">
      <div className="node-header">{data.label}</div>
      <div className="result-content">{data.value}</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ResultNode;
