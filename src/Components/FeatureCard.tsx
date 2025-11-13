import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  imageContent?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  linkHref?: string;
  imageBackgroundColor?: string;
}

const FeatureCard = ({
  title,
  description,
  imageContent,
  imageSrc,
  imageAlt,
  buttonText = "View features →",
  linkHref,
  imageBackgroundColor = "#e5f5f9",
}: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-lg feature-card-container">
      <div
        className="feature-card-image"
        style={{ backgroundColor: imageBackgroundColor }}
      >
        {imageContent ? (
          imageContent
        ) : imageSrc ? (
          <img src={imageSrc} alt={imageAlt || ""} />
        ) : null}
      </div>
      <div className="feature-card-content">
        <h3 className="text-xl-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {linkHref ? (
          <Link
            to={linkHref}
            className="inline-flex items-center justify-center w-50 py-3 px-4 rounded-lg feature-card-button text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {buttonText}
          </Link>
        ) : (
          <button className="w-50 py-3 px-4 rounded-lg feature-card-button text-gray-700 hover:bg-gray-50 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
