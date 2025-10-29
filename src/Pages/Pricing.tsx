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
    <div>
      <PricingHero
        backgroundColor="bg-green-20"
        title="See Matchero in action"
        description="Every company hires differently. Tell us about your goals, and we'll share the right plan and pricing for your team.<br/><br/>We'll start with a short chat to understand your team, your current hiring process, and where Matchero can make a difference. Then we'll walk you through the platform - no hard sell, just a clear look at how it works and whether it's the right fit for you."
        image="/pricing-hero.png"
        imageAlt="Pricing hero image"
        emailPlaceholder="Enter your email address"
        buttonText="Book your demo"
        onButtonClick={handleButtonClick}
        onVideoClick={handleVideoClick}
      />
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

      {/* Pricing Form Section */}
      <section className="py-16 bg-white pricing-form-section">
        <div className="w-full px-4 md:px-16">
          <div className="max-w-2xl pricing-form-container">
            <PricingForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
