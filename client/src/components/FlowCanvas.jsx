import ReactFlow, { Background, Controls } from "reactflow";
import InputNode from "./nodes/InputNode";
import ResultNode from "./nodes/ResultNode";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

const FlowCanvas = ({ nodes, edges }) => {
  return (
    <div className="flow-wrapper">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
      >
        <Background />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
