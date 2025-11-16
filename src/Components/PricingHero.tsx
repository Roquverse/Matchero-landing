import "../assets/Styles/pricing-hero.css";

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
}: PricingHeroProps) => {
  return (
    <div className="pricing-hero-wrapper">
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
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-pricing"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default PricingHero;
