import FeatureCard from "./FeatureCard";
import "../assets/Styles/feature.css";

const OnboardingSection = () => {
  const onboardingCards = [
    {
      title: "Smart screening, less stress",
      description:
        "Use our AI Interviewer tool to prepare, practice, and perform better when you apply.",
      buttonText: "Learn more",
    },
    {
      title: "Onboarding made simple",
      description:
        "Once hired, we provide role-specific guidance to help you start strong.",
      buttonText: "Learn more",
    },
    {
      title: "Growth insights",
      description:
        "See how you compare, get feedback, and discover where your next steps should be.",
      buttonText: "View features",
    },
  ];

  return (
    <section className="bg-cyan-20 py-10 pb-32 md:pb-10 relative onboarding-section">
      <div className="w-full px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onboardingCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
