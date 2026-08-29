import { features } from "../data/products";

function FeatureHighlight() {
  return (
    <div className="feature-highlights">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <span className="material-icons-outlined">{feature.icon}</span>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureHighlight;
