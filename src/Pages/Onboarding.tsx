import RecruiterHero from "../Components/RecruiterHero";
import Button from "../Components/Button";
import SourcingAccordion from "../Components/SourcingAccordion";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/onboarding.css";

const Onboarding = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleSecondaryButtonClick = () => {
    console.log("See onboarding flow clicked");
  };

  const accordionItems = [
    {
      title: "Digital Document Collection",
      content:
        "Streamline the collection of required documents, forms, and information from new hires through a secure, digital platform that ensures nothing is missed.",
    },
    {
      title: "Task Management for New Hires",
      content:
        "Create and assign automated onboarding tasks that guide new hires through every step of their first days and weeks, ensuring a smooth transition.",
    },
    {
      title: "Team Collaboration",
      content:
        "Enable seamless communication between HR, managers, and new hires, keeping everyone aligned and informed throughout the onboarding process.",
    },
    {
      title: "Branded Welcome Experience",
      content:
        "Create a personalized, branded welcome experience that makes new hires feel valued and excited about joining your team from day one.",
    },
  ];

  const featureCards = [
    {
      title: "Send the Offer",
      description:
        "Generate and send personalized offer letters for e-signature, complete with all terms and conditions in one streamlined process.",
      image: "/onboarding-feature-1.png",
    },
    {
      title: "Set Up Tasks",
      description:
        "Create and assign automated onboarding tasks that guide new hires through every step – from document collection to first-day prep.",
      image: "/onboarding-feature-2.png",
    },
    {
      title: "Welcome and Go Live",
      description:
        "Provide new hires with a simple portal for documents, team introductions, and resources – so they're ready to hit the ground running.",
      image: "/onboarding-feature-3.png",
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
    <div className="onboarding-page">
      {/* Hero Section */}
      <RecruiterHero
        backgroundClass="bg-green-20"
        title="Get new hires productive from day one."
        description="Matchero simplifies onboarding – from offer acceptance to first-day readiness – so your new hires feel supported and your team saves time."
        image="/onboarding-hero.png"
        imageAlt="Man with onboarding UI elements"
        emailPlaceholder="Enter your email address"
        buttonText="Request demo"
        secondaryButtonText="See onboarding flow"
        onButtonClick={handleButtonClick}
        onSecondaryButtonClick={handleSecondaryButtonClick}
        hideInput={true}
        hideVideoLink={true}
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's Privacy Notice, including for marketing purposes.`}
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "For recruiters", link: "/recruiters" },
            { text: "Onboarding" },
          ],
        }}
      />

      {/* Turning accepted offers into confident starts */}
      <section className="onboarding-brand-section">
        <div className="onboarding-container">
          <h2 className="onboarding-brand-title">
            Turning accepted offers into <em>confident starts</em>.
          </h2>
          <p className="onboarding-brand-description">
            Too many great hires stumble before their first day – waiting on
            documents, logins, or instructions. Matchero brings all onboarding
            steps into one simple, trackable flow.
          </p>
        </div>
      </section>

      {/* Everything you need for seamless onboarding */}
      <section className="onboarding-tools-section">
        <div className="onboarding-container">
          <div className="onboarding-tools-grid">
            <div className="onboarding-tools-image">
              <img
                src="/onboarding-person.png"
                alt="Person with tablet"
                className="onboarding-tools-img"
              />
            </div>
            <div className="onboarding-tools-content">
              <h2 className="onboarding-tools-title">
                Everything you need for seamless onboarding.
              </h2>
              <SourcingAccordion
                items={accordionItems}
                defaultOpenIndex={0}
                className="onboarding-accordion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Matchero streamlines onboarding */}
      <section className="onboarding-simplifies-section">
        <div className="onboarding-container">
          <h2 className="onboarding-simplifies-title">
            How Matchero streamlines onboarding
          </h2>
          <p className="onboarding-simplifies-subtitle">
            A seamless journey for recruiters and candidates – from application
            to offer, all in one system.
          </p>
          <div className="onboarding-features-grid">
            {featureCards.map((feature, index) => (
              <div key={index} className="onboarding-feature-card">
                <div className="onboarding-feature-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="onboarding-feature-img"
                  />
                </div>
                <h3 className="onboarding-feature-title">{feature.title}</h3>
                <p className="onboarding-feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected onboarding */}
      <section className="onboarding-connected-section">
        <div className="onboarding-container">
          <div className="onboarding-connected-grid">
            <div className="onboarding-connected-image">
              <img
                src="/onboarding-woman.png"
                alt="Woman at desk with laptop"
                className="onboarding-connected-img"
              />
            </div>
            <div className="onboarding-connected-content">
              <div className="onboarding-coming-soon-badge">Coming soon</div>
              <h2 className="onboarding-connected-title">
                Connected onboarding.
              </h2>
              <p className="onboarding-connected-description">
                We're building integrations with HRIS and payroll systems to
                help you automate even more – from system access to compliance
                checks – all powered by Matchero.
              </p>
              <Button
                variant="filled"
                color="green"
                size="lg"
                onClick={handleButtonClick}
                className="onboarding-connected-button"
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
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="onboarding-integrations-section">
        <div className="onboarding-container">
          <h2 className="onboarding-integrations-title">
            Matchero fits into <em>your</em> workflow
          </h2>
          <p className="onboarding-integrations-subtitle">
            not the other way around.
          </p>
          <IntegrationLogos integrations={integrations} />
          <p className="onboarding-integrations-description">
            Our platform connects effortlessly with the tools you already use,
            from job boards and CRMs to communication platforms and HR software.
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Onboarding;
