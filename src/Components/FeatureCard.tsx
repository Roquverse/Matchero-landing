export interface FeatureCardProps {
  title: string;
  description: string;
  imageContent?: React.ReactNode;
  buttonText?: string;
  imageBackgroundColor?: string;
}

const FeatureCard = ({
  title,
  description,
  imageContent,
  buttonText = "View features →",
  imageBackgroundColor = "#e5f5f9",
}: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-lg feature-card-container">
      <div
        className="feature-card-image"
        style={{ backgroundColor: imageBackgroundColor }}
      >
        {imageContent}
      </div>
      <div className="feature-card-content">
        <h3 className="text-xl-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="w-50 py-3 px-4 rounded-lg feature-card-button text-gray-700 hover:bg-gray-50 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;

