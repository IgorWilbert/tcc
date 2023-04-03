import "./styles.css";

const Module = ({ title, description, imageUrl }) => (
  <div
    className="module"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <div className="module-text">
      <h2 className="module-title">{title}</h2>
      <p className="module-description">{description}</p>
    </div>
  </div>
);

export default Module;
