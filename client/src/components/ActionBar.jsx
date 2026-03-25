const ActionBar = ({ onRun, onSave, isRunning, isSaving }) => {
  return (
    <div className="action-bar">
      <button className="primary-btn" onClick={onRun} disabled={isRunning}>
        {isRunning ? "Running..." : "Run Flow"}
      </button>

      <button className="secondary-btn" onClick={onSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Conversation"}
      </button>
    </div>
  );
};

export default ActionBar;
