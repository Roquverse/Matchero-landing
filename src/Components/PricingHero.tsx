import "../assets/Styles/pricing-hero.css";

interface PricingHeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
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
}

const PricingHero = ({
  backgroundColor = "bg-green-20",
  title,
  description,
  className = "",
}: PricingHeroProps) => {
  return (
    <section className={`${backgroundColor} pricing-hero-section ${className}`}>
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
        </div>
      </div>

      {/* Right Image Collage */}
      <div className="pricing-hero-image-container">
        {/* Main Image */}
        {/* <div className="pricing-hero-image">
          <img src={image} alt={imageAlt} />
        </div> */}
      </div>
    </section>
  );
};

export default PricingHero;
