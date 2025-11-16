import "../assets/Styles/pricing-hero.css";
import PricingForm from "../Components/PricingForm";

interface PricingHeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  description2?: string;
  image?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  privacyText?: string;
  privacyLink?: string;
  videoText?: string;
  onButtonClick?: () => void;
  onVideoClick?: () => void;
  className?: string;
  // Form props
  formButtonText?: string;
  formTitle?: string;
  initialEmail?: string;
}

const PricingHero = ({
  title,
  description,
  description2,
  className = "",
  formButtonText,
  formTitle,
  initialEmail,
}: PricingHeroProps) => {
  return (
    <section className={`pricing-hero-section ${className}`}>
      <div className="pricing-hero-container">
        {/* Left Content Block */}
        <div className="pricing-hero-content">
          <div className="pricing-hero-frame">
            <h1 dangerouslySetInnerHTML={{ __html: title }} />

            {description && (
              <p
                className="pricing-hero-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
            {description2 && (
              <p
                className="pricing-hero-description-2 font-18"
                dangerouslySetInnerHTML={{ __html: description2 }}
              />
            )}
          </div>
          {/* Curved bottom transition */}
          <svg
            className="pricing-hero-curve"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L0,120 C200,180 400,180 600,120 C700,100 800,100 1000,120 L1000,0 Z"
              fill="var(--green-20, #d9f99d)"
            />
          </svg>
        </div>

        {/* Right Form Section */}
        <div className="pricing-hero-form-wrapper">
          <div className="pricing-form-container">
            <PricingForm
              buttonText={formButtonText}
              formTitle={formTitle}
              initialEmail={initialEmail}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
