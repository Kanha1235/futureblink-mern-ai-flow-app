const HistoryPanel = ({ history, isLoading }) => {
  return (
    <section className="history-panel">
      <div className="history-header">
        <h2>Saved Conversations</h2>
        <p>Latest prompt-response records from MongoDB</p>
      </div>

      {isLoading ? (
        <div className="empty-state">Loading saved history...</div>
      ) : history.length === 0 ? (
        <div className="empty-state">No conversations saved yet.</div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <article className="history-card" key={item._id}>
              <div>
                <h3>Prompt</h3>
                <p>{item.prompt}</p>
              </div>
              <div>
                <h3>Response</h3>
                <p>{item.response}</p>
              </div>
              <span>{new Date(item.createdAt).toLocaleString()}</span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default HistoryPanel;
