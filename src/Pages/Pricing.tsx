import PricingHero from "../Components/PricingHero";
import PricingForm from "../Components/PricingForm";
import "../assets/Styles/pricing.css";

const Pricing = () => {
  const handleButtonClick = () => {
    console.log("Book your demo clicked");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

  return (
    <div className="pricing-page-container">
      <PricingHero
        backgroundColor=""
        title="See Matchero in action"
        description="Every company hires differently. Tell us about your goals, and we'll share the right plan and pricing for your team."
        description2="We'll start with a short chat to understand your team, your current hiring process, and where Matchero can make a difference. Then we'll walk you through the platform - no hard sell, just a clear look at how it works and whether it's the right fit for you."
        image="/pricing-hero.png"
        imageAlt="Pricing hero image"
        emailPlaceholder="Enter your email address"
        buttonText="Book your demo"
        onButtonClick={handleButtonClick}
        onVideoClick={handleVideoClick}
      />

      {/* Right Form Section */}
      <div className="pricing-hero-form-wrapper">
        <div className="pricing-form-container">
          <PricingForm
            buttonText="Book your demo"
            formTitle="Request pricing"
            initialEmail=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
