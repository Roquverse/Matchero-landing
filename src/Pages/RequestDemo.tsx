import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PricingHero from "../Components/PricingHero";
import "../assets/Styles/pricing.css";

const RequestDemo = () => {
  const [searchParams] = useSearchParams();
  const [initialEmail, setInitialEmail] = useState("");

  useEffect(() => {
    // Get email from URL query parameter
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setInitialEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

  return (
    <div className="pricing-page-container">
      <PricingHero
        title="Request a demo"
        description="See how Matchero can transform your hiring process. Get a personalized walkthrough tailored to your team's needs."
        description2="Our team will show you how Matchero can help you find better candidates, reduce time-to-hire, and make smarter hiring decisions. No commitment required - just a clear view of how our platform works."
        image="/pricing-hero.png"
        imageAlt="Request demo hero image"
        emailPlaceholder="Enter your email address"
        buttonText="Request a demo"
        onButtonClick={handleButtonClick}
        onVideoClick={handleVideoClick}
        formButtonText="Request a demo"
        formTitle="Request a demo"
        initialEmail={initialEmail}
      />
    </div>
  );
};

export default RequestDemo;
