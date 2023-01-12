import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
  const element = (
  <div className="tags-input-container">
    <div className="tag-item">
      <span className="text">boomdotdev</span>
      <span className="close">&times;</span>
    </div>
    <div className="tag-item">
      <span className="text">task</span>
      <span className="close">&times;</span>
    </div>
    <div className="tag-item">
      <span className="text">tags</span>
      <span className="close">&times;</span>
    </div>
    <div className="tag-item">
      <span className="text">react</span>
      <span className="close">&times;</span>
    </div>
  </div>
  );
  root.render(element);
