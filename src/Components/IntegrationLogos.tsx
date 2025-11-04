import { useState, useRef, useEffect } from "react";
import "../assets/Styles/sourcing.css";

interface Integration {
  name: string;
  image: string;
  subtitle?: string;
  color?: string;
}

interface IntegrationLogosProps {
  integrations: Integration[];
  className?: string;
}

const IntegrationLogos = ({
  integrations,
  className = "",
}: IntegrationLogosProps) => {
  const [currentIntegrationSlide, setCurrentIntegrationSlide] = useState(0);
  const integrationSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntegrationSlide((prev) => (prev + 1) % integrations.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [integrations.length]);

  return (
    <div className={`w-full mb-12 ${className}`}>
      {/* Auto-slider for all screens */}
      <div className="sourcing-integrations-slider-container">
        <div
          ref={integrationSliderRef}
          className="sourcing-integrations-slider"
          style={{
            transform: `translateX(-${currentIntegrationSlide * 100}%)`,
          }}
        >
          {integrations.map((integration, index) => (
            <div key={index} className="sourcing-integration-slide">
              <img
                src={integration.image}
                alt={`${integration.name} logo`}
                className="h-16 w-auto object-contain integration-logo"
              />
              {integration.subtitle && (
                <div className="text-sm text-gray-500 mt-2 text-center integration-subtitle">
                  {integration.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Integration Slider Dots */}
        <div className="sourcing-integration-slider-dots">
          {integrations.map((_, index) => (
            <button
              key={index}
              className={`sourcing-integration-dot ${
                currentIntegrationSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentIntegrationSlide(index)}
              aria-label={`Go to integration ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationLogos;
