import RecruiterHero from "../Components/RecruiterHero";
import Button from "../Components/Button";
import SourcingAccordion from "../Components/SourcingAccordion";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/candidate-experience.css";

const CandidateExperience = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleSecondaryButtonClick = () => {
    console.log("How it works clicked");
  };

  const accordionItems = [
    {
      title: "Branded Applications",
      content:
        "Create a custom, branded application experience that reflects your company's identity and values, making candidates feel welcomed from their first interaction.",
    },
    {
      title: "Mobile-Friendly Experience",
      content:
        "Ensure candidates can apply and interact with your hiring process seamlessly on any device, from smartphones to tablets and desktops.",
    },
    {
      title: "Transparent Communication",
      content:
        "Keep candidates informed at every stage with automated updates, clear timelines, and personalized messages that build trust and engagement.",
    },
    {
      title: "What does 'Free updates' include?",
      content:
        "Our free updates include real-time application status notifications, interview scheduling confirmations, and automated follow-up communications to keep candidates engaged throughout the hiring process.",
    },
    {
      title: "Data You Can Act On (Optional)",
      content:
        "Track candidate engagement metrics, application completion rates, and drop-off points to identify areas for improvement in your hiring process.",
    },
  ];

  const featureCards = [
    {
      title: "Post and invite",
      description:
        "Publish roles to your branded career pages and job boards in one click. Candidates enter clean, structured pipelines.",
      image: "/candidate-experience-feature-1.png",
    },
    {
      title: "Communicate and collaborate",
      description:
        "Manage interactions from a single view – schedule interviews, send updates, and collect feedback.",
      image: "/candidate-experience-feature-2.png",
    },
    {
      title: "Make the right offer, faster",
      description:
        "With all notes, interviews, and decisions in one place, moving a candidate from shortlist to offer takes minutes, not days.",
      image: "/candidate-experience-feature-3.png",
    },
  ];

  const integrations = [
    {
      name: "ORACLE",
      color: "text-red-600",
      image: "/partner/Oracle_logo 1.svg",
    },
    {
      name: "LinkedIn",
      color: "text-blue-600",
      image: "/partner/LinkedIn_2021 1.svg",
    },
    {
      name: "workday.",
      color: "text-gray-700",
      image: "/partner/Workday_Logo_0 1.svg",
    },
    {
      name: "matchero",
      color: "text-green-600",
      subtitle: "Hiring & Onboarding",
      image: "/logo.svg",
    },
    {
      name: "Google Drive",
      color: "text-yellow-600",
      image: "/partner/Google_Drive_logo 1.svg",
    },
    {
      name: "BambooHR",
      color: "text-green-600",
      image: "/partner/BambooHR_logo 1.svg",
    },
  ];

  return (
    <div className="candidate-experience-page">
      {/* Hero Section */}
      <RecruiterHero
        backgroundColor="bg-green-20"
        title="Deliver a hiring experience candidates <em>actually</em> enjoy."
        description="From application to offer, Matchero helps you create faster, fairer, and more personalised journeys – because a great experience builds stronger teams."
        image="/candidate-experience-hero.png"
        imageAlt="Woman with UI elements showing hiring process"
        emailPlaceholder="Enter your email address"
        buttonText="Request demo"
        secondaryButtonText="How it works"
        onButtonClick={handleButtonClick}
        onSecondaryButtonClick={handleSecondaryButtonClick}
        hideInput={true}
        hideVideoLink={true}
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's Privacy Notice, including for marketing purposes.`}
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "For recruiters", link: "/recruiters" },
            { text: "Candidate experience" },
          ],
        }}
      />

      {/* Your candidate experience is your brand */}
      <section className="candidate-experience-brand-section">
        <div className="candidate-experience-container">
          <h2 className="candidate-experience-brand-title">
            Your candidate experience is your brand.
          </h2>
          <p className="candidate-experience-brand-description">
            In competitive markets, the way you treat candidates defines how
            your company is perceived. Matchero helps recruiters provide
            clarity, speed, and communication — at every step.
          </p>
        </div>
      </section>

      {/* Tools Section with Image and Accordion */}
      <section className="candidate-experience-tools-section">
        <div className="candidate-experience-container">
          <div className="candidate-experience-tools-grid">
            <div className="candidate-experience-tools-image">
              <img
                src="/candidate-page.png"
                alt="Woman working on laptop"
                className="candidate-experience-tools-img"
              />
            </div>
            <div className="candidate-experience-tools-content">
              <h2 className="candidate-experience-tools-title">
                Tools that make every interaction count.
              </h2>
              <SourcingAccordion
                items={accordionItems}
                defaultOpenIndex={0}
                className="candidate-experience-accordion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Matchero Simplifies Section */}
      <section className="candidate-experience-simplifies-section">
        <div className="candidate-experience-container">
          <h2 className="candidate-experience-simplifies-title">
            Matchero simplifies the candidate experience
          </h2>
          <p className="candidate-experience-simplifies-subtitle">
            A seamless journey for recruiters and candidates – from application
            to offer, all in one system.
          </p>
          <div className="candidate-experience-features-grid">
            {featureCards.map((feature, index) => (
              <div key={index} className="candidate-experience-feature-card">
                <div className="candidate-experience-feature-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="candidate-experience-feature-img"
                  />
                </div>
                <h3 className="candidate-experience-feature-title">
                  {feature.title}
                </h3>
                <p className="candidate-experience-feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Insights powered by AI */}
      <section className="candidate-experience-insights-section">
        <div className="candidate-experience-container">
          <div className="candidate-experience-coming-soon-badge">
            Coming soon
          </div>
          <h2 className="candidate-experience-insights-title">
            Candidate insights powered by AI.
          </h2>
          <p className="candidate-experience-insights-description">
            We're building features that analyse candidate sentiment and
            feedback, helping you fine-tune your hiring experience.
          </p>
          <Button
            variant="filled"
            color="green"
            size="lg"
            onClick={handleButtonClick}
            className="candidate-experience-insights-button"
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            Join the beta for early access
          </Button>
          <div className="candidate-experience-insights-image">
            <img
              src="/candidate-insights-dashboard.png"
              alt="Candidate insights dashboard"
              className="candidate-experience-insights-img"
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="candidate-experience-integrations-section">
        <div className="candidate-experience-container">
          <h2 className="candidate-experience-integrations-title">
            Matchero fits into <em>your</em> workflow
          </h2>
          <p className="candidate-experience-integrations-subtitle">
            not the other way around.
          </p>
          <IntegrationLogos integrations={integrations} />
          <p className="candidate-experience-integrations-description">
            Our platform connects effortlessly with the tools you already use,
            from job boards and CRMs to communication platforms and HR software.
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CandidateExperience;
