import RecruiterHero from "../Components/RecruiterHero";
import Button from "../Components/Button";
import SourcingAccordion from "../Components/SourcingAccordion";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/sourcing.css";
import { useNavigate } from "react-router-dom";

const Sourcing = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/request-demo");
  };
  const handleBetaAccessRequestClick = () => {
    navigate("/signup");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

  const accordionItems = [
    {
      title: "Centralised candidate pool",
      content:
        "All your candidates — from job boards, referrals, and direct applications — flow into one organised dashboard. Easily search, tag, and revisit profiles without switching between tools or spreadsheets.",
    },
    {
      title: "Verified skills and experience",
      content:
        "Candidates are pre-vetted with verified skills and relevant experience, ensuring you only see qualified applicants who match your requirements.",
    },
    {
      title: "AI-assisted filtering",
      content:
        "Smart algorithms help you find the right candidates faster by automatically filtering and ranking applicants based on skills, experience, and role fit.",
    },
  ];

  const featureCards = [
    {
      title: "Post your role",
      description:
        "Share openings across your branded career page and best job boards in one click.",
      image: "/sourcing-feature-1.png",
    },
    {
      title: "Match automatically",
      description:
        "Our matching engine suggests candidates based on skills, role fit, and experience.",
      image: "/sourcing-feature-2.png",
    },
    {
      title: "Reach out instantly",
      description:
        "View full candidate profiles and message directly within your ATS.",
      image: "/sourcing-feature-3.png",
    },
  ];

  const featureList = [
    {
      title: "One-click job posting",
      description: "Publish jobs to your career page and leading job boards.",
    },
    {
      title: "Source tracking",
      description:
        "See where hires come from (referrals, job boards, or direct).",
    },
    {
      title: "Candidate matching",
      description:
        "Attract and rank applicants by fit, experience, and qualifications.",
    },
    {
      title: "Talent pool search",
      description:
        "Save promising candidates and re-engage them for future roles.",
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
      color: "text-blue-500",
      image: "/partner/Google.png",
    },
    {
      name: "bo",
      color: "text-green-600",
      image: "/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png",
    },
  ];

  return (
    <div className="sourcing-page">
      {/* Hero Section */}
      <RecruiterHero
        backgroundClass="bg-green-20"
        title="Find and engage top talent — <b>faster.</b>"
        description="Build stronger teams with access to vetted candidates and smarter sourcing tools designed for a growing workforce."
        image="/sourcing.png"
        imageAlt="Sourcing hero image"
        buttonText="Request demo"
        secondaryButtonText="See how Matchero works"
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's Privacy Notice, including for marketing purposes.`}
        hideInput={true}
        hideVideoLink={true}
        onButtonClick={handleButtonClick}
        onSecondaryButtonClick={handleVideoClick}
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "For recruiters", link: "/recruiters" },
            { text: "Sourcing" },
          ],
        }}
      />
      <section className="py-16 bg-white sourcing-top-section">
        <div className="w-full px-4 md:px-16 text-center">
          <h2 className="sourcing-section-title">
            Stop sifting through endless CVs.
          </h2>
          <p className="sourcing-section-description">
            Recruiters spend hours sorting unqualified applications.{" "}
            <b>Matchero</b> automates early-stage sourcing so you can focus on
            the right talent from day one.
          </p>
        </div>
      </section>

      {/* Everything to source smarter section */}
      <section className="sourcing-section sourcing-section-alt">
        <div className="sourcing-container">
          <div className="sourcing-content-grid">
            <div className="sourcing-image-wrapper">
              <img
                src="/source-smarter.png"
                alt="Woman working on laptop"
                className="sourcing-image"
              />
            </div>
            <div className="sourcing-text-content">
              <h2 className="sourcing-section-title">
                Everything to source smarter — built-in.
              </h2>
              <p className="sourcing-section-description">
                Simplicity and intelligence to help recruiters find qualified
                candidates faster, with less manual work.
              </p>
              <SourcingAccordion items={accordionItems} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="sourcing-section sourcing-how-it-works">
        <div className="sourcing-container">
          <h2 className="sourcing-section-title sourcing-title-center">
            How it works
          </h2>
        </div>
        <div className="sourcing-features-grid">
          {featureCards.map((card, index) => (
            <div key={index} className="sourcing-feature-card">
              <div className="sourcing-feature-card-image">
                <img src={card.image} alt={`${card.title} image`} />
              </div>
              <div className="sourcing-feature-card-content">
                <h3 className="sourcing-feature-title">{card.title}</h3>
                <p className="sourcing-feature-description">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature List Section */}
      <section className="sourcing-section sourcing-feature-list-section">
        <div className="sourcing-container">
          <div className="sourcing-feature-list-grid">
            {featureList.map((feature, index) => (
              <div key={index} className="sourcing-feature-list-item">
                <svg
                  className="sourcing-check-icon-large"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="sourcing-feature-list-content">
                  <h4 className="sourcing-feature-list-title">
                    {feature.title}
                  </h4>
                  <p className="sourcing-feature-list-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's next section */}
      <section className="sourcing-section sourcing-whats-next">
        <div className="sourcing-container">
          <h2 className="sourcing-whats-next-title">
            What's next for sourcing?
          </h2>
          <p className="sourcing-whats-next-text">
            We're building integrations with <b>regional job boards</b> and{" "}
            <b>referral platforms</b> — so your reach expands automatically.
          </p>
          <div className="sourcing-whats-next-button">
            <Button
              variant="filled"
              color="green"
              size="md"
              onClick={handleBetaAccessRequestClick}
            >
              Join the beta for early access
            </Button>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="sourcing-people-section">
        {/* Wave Transition */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="sourcing-wave-transition"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div className="sourcing-image-wrapper">
          <img
            src="/Sourcing_people@2x.png"
            alt="Sourcing people"
            className="sourcing-people-image"
          />
        </div>
      </section>

      {/* Workflow Integration Section */}
      <div className="text-center sourcing-workflow-integration-section">
        <h2 className="sub-title">
          Matchero fits into <em>your</em> workflow
        </h2>
        <p className="text-xl text-gray-600 mb-12 sub-title-description2">
          not the other way around
        </p>

        {/* Integration Logos */}
        <IntegrationLogos integrations={integrations} />

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Our platform connects effortlessly with the tools you already use,
          from job boards and CRMs to communication platforms and HR software.
          As your team grows, Matchero grows with you.
        </p>
      </div>
    </div>
  );
};

export default Sourcing;
