import RecruiterHero from "../Components/RecruiterHero";
import Button from "../Components/Button";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/integration.css";
import { useNavigate } from "react-router-dom";

const Integration = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/request-demo");
  };

  const handleViewIntegrationsClick = () => {
    navigate("/recruiters/integrations");
  };

  const handleBetaClick = () => {
    navigate("/signup");
  };

  const integrationCards = [
    {
      title: "Choose Your Tools",
      description:
        "Select the platforms your team already uses — job boards, calendars, or chat tools.",
    },
    {
      title: "Connect in One Click",
      description:
        "Authorize your accounts directly from Matchero. Data begins syncing automatically.",
    },
    {
      title: "Work Without Disruption",
      description:
        "Post jobs, schedule interviews, and share documents — all from one dashboard.",
    },
  ];

  const integrationList = [
    "Job Boards & Networks",
    "Communication Tools",
    "Calendars & Scheduling",
    "File Storage & Collaboration",
    { text: "HRIS & Payroll", comingSoon: true },
  ];

  const integrations = [
    {
      name: "ORACLE",
      image: "/partner/Oracle_logo 1.svg",
    },
    {
      name: "LinkedIn",
      image: "/partner/LinkedIn_2021 1.svg",
    },
    {
      name: "workday",
      image: "/partner/Workday_Logo_0 1.svg",
    },
    {
      name: "matchero",
      subtitle: "ATS, Hiring & Onboarding",
      image: "/logo.svg",
    },
    {
      name: "Google Drive",
      image: "/partner/Google.png",
    },
    {
      name: "LinkedIn",
      image: "/partner/LinkedIn_2021 1.svg",
    },
  ];

  return (
    <div className="integration-page">
      {/* Hero Section */}
      <RecruiterHero
        backgroundClass="bg-green-20"
        title='Connect Matchero with the tools <em style="font-style: italic; font-weight: 400;">you already</em> love.'
        description="Integrate job boards, communication platforms, and HR systems so your team can source, hire, and onboard without disruption."
        image="/sourcing.png"
        imageAlt="Integration hero image"
        buttonText="Request demo"
        secondaryButtonText="View all integrations"
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's`}
        privacyLink="#"
        hideInput={true}
        hideVideoLink={true}
        onButtonClick={handleButtonClick}
        onSecondaryButtonClick={handleViewIntegrationsClick}
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "Integrations" }],
        }}
      />

      {/* It's easier when your tools talk to each other section */}
      <section className="integration-section integration-top-section">
        <div className="integration-container">
          <h2 className="integration-section-title">
            It's easier when your tools <b>talk to each other.</b>
          </h2>
          <p className="integration-section-description">
            You don't need another platform that works in isolation.{" "}
            <b>Matchero brings your hiring stack together</b> — connecting
            sourcing channels, calendars, communication tools, and HR systems in
            one <b>seamless flow</b>.
          </p>
        </div>
      </section>

      {/* Plug into your hiring ecosystem section */}
      <section className="integration-section integration-ecosystem-section">
        <div className="integration-container">
          <div className="integration-content-grid">
            <div className="integration-image-wrapper">
              <div className="integration-placeholder-image"></div>
            </div>
            <div className="integration-text-content">
              <h2 className="integration-section-title">
                Plug into your hiring ecosystem.
              </h2>
              <p className="integration-section-description">
                Matchero integrates with your favourite tools so data flows
                automatically, not manually.
              </p>
              <ul className="integration-list">
                {integrationList.map((item, index) => {
                  const isObject = typeof item === "object";
                  return (
                    <li key={index} className="integration-list-item">
                      <svg
                        className="integration-plus-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>
                        {isObject ? item.text : item}
                        {isObject && item.comingSoon && (
                          <span className="integration-coming-soon">
                            {" "}
                            Coming soon
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Matchero integrates seamlessly section */}
      <section className="integration-section integration-how-it-works">
        <div className="integration-container">
          <h2 className="integration-section-title integration-title-center">
            How Matchero integrates seamlessly
          </h2>
          <p className="integration-section-subtitle">
            A seamless journey for recruiters and candidates — from application
            to offer, all in one system.
          </p>
          <div className="integration-cards-grid">
            {integrationCards.map((card, index) => (
              <div key={index} className="integration-card">
                <div className="integration-card-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 8V16M8 12H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="integration-card-title">{card.title}</h3>
                <p className="integration-card-description">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanding your workflow section */}
      <section className="integration-section integration-expanding-section">
        <div className="integration-container">
          <div className="integration-content-grid">
            <div className="integration-image-wrapper">
              <div className="integration-placeholder-image integration-coming-soon-badge">
                <span className="integration-badge-text">Coming soon</span>
              </div>
            </div>
            <div className="integration-text-content">
              <h2 className="integration-section-title">
                Expanding your workflow - one integration at a time.
              </h2>
              <p className="integration-section-description">
                We're adding new connections with local African job boards,
                regional payroll providers, and HR analytics tools to give you a
                truly connected hiring experience.
              </p>
              <div className="integration-cta-button">
                <Button
                  variant="filled"
                  color="green"
                  size="md"
                  onClick={handleBetaClick}
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
                  Join the beta for new integration releases.
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matchero fits into your workflow section */}
      <section className="integration-section integration-workflow-section">
        <div className="integration-container">
          <h2 className="integration-section-title integration-title-center">
            Matchero fits into your workflow
          </h2>
          <p className="integration-section-subtitle">
            not the other way around.
          </p>

          {/* Integration Logos */}
          <IntegrationLogos integrations={integrations} />

          {/* Description */}
          <p className="integration-footer-description">
            Our platform connects effortlessly with the tools you already use,
            from job boards and CRMs to communication platforms and HR software.
            As your team grows, Matchero grows with you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Integration;
