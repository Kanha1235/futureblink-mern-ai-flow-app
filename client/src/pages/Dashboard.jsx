import FlowCanvas from "../components/FlowCanvas";
import ActionBar from "../components/ActionBar";
import HistoryPanel from "../components/HistoryPanel";
import { useFlowRunner } from "../hooks/useFlowRunner";

const Dashboard = () => {
  const {
    nodes,
    edges,
    history,
    isRunning,
    isSaving,
    isHistoryLoading,
    runFlow,
    saveConversation,
  } = useFlowRunner();

  return (
    <div className="page-shell">
      <header className="hero-section">
        <div>
          <p className="eyebrow">FutureBlink MERN Task</p>
          <h1>AI Flow Dashboard</h1>
          <p className="hero-copy">
            Type a prompt, run the flow through the backend, and save the prompt-response pair to MongoDB.
          </p>
        </div>
      </header>

      <ActionBar
        onRun={runFlow}
        onSave={saveConversation}
        isRunning={isRunning}
        isSaving={isSaving}
      />

      <FlowCanvas nodes={nodes} edges={edges} />

      <HistoryPanel history={history} isLoading={isHistoryLoading} />
    </div>
  );
};

export default Dashboard;
