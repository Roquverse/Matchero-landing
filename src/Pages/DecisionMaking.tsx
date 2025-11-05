import RecruiterHero from "../Components/RecruiterHero";
import Button from "../Components/Button";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/decision-making.css";

const DecisionMaking = () => {
  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  const handleVideoClick = () => {
    console.log("Watch video clicked");
  };

  const featureCards = [
    {
      title: "Centralised feedback",
      description:
        "Collect structured evaluations from every interviewer in one place.",
    },
    {
      title: "AI-Powered Scoring",
      description:
        "Automatically rank candidates by skills, experience, and culture fit.",
    },
    {
      title: "Collaborative Reviews",
      description:
        "Compare notes, discuss trade-offs, and agree on next steps—transparency.",
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
    <div className="decision-making-page">
      {/* Hero Section */}
      <RecruiterHero
        backgroundColor="bg-green-20"
        title="Faster, fairer decisions with data and AI."
        description="Centralise feedback, scores, and insights so every hiring decision is backed by evidence—not guesswork."
        image="/decision-hero.png"
        imageAlt="Decision making hero image"
        emailPlaceholder="Enter your email address"
        buttonText="Request demo"
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's`}
        videoText="Watch 1 min video"
        onButtonClick={handleButtonClick}
        onVideoClick={handleVideoClick}
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "For recruiters", link: "/recruiters" },
            { text: "Decision making" },
          ],
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-decision-making"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
      <section className="py-16 bg-white decision-making-top-section">
        <div className="w-full px-4 md:px-16 text-center">
          <h2 className="decision-making-section-title">
            The hardest part is deciding who's the right fit.
          </h2>
          <p className="decision-making-section-description">
            Hiring teams struggle with inconsistent feedback, bias, and
            scattered data. Matchero brings structure and visibility so teams
            can decide confidently and collaboratively.
          </p>
        </div>
      </section>

      {/* The hardest part section */}
      <section className="decision-making-section decision-making-section-alt">
        <div className="decision-making-container">
          <div className="decision-making-content-grid">
            <div className="decision-making-image-wrapper">
              <img
                src="/decision-1.png"
                alt="Woman working on laptop"
                className="decision-making-image"
              />
              <button
                className="video-overlay-button"
                onClick={handleVideoClick}
              >
                <span className="video-button-text">Watch 1 min video</span>
                <div className="video-button-icon">
                  <svg
                    className="video-play-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="decision-making-text-content">
              <div className="decision-making-insight-box">
                <h3 className="decision-making-insight-title">
                  One view. Every insight. Smarter decisions.
                </h3>
                <p className="decision-making-insight-description">
                  Matchero combines structured evaluations, AI-powered scoring,
                  and team collaboration in one simple flow.
                </p>
                <div className="decision-making-cta-row">
                  <p className="decision-making-cta-text">
                    See how Matchero fixes this
                  </p>
                  <Button
                    variant="outlined"
                    color="gray"
                    size="md"
                    onClick={handleButtonClick}
                    className="decision-making-cta-button"
                  >
                    Request demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-decision-making"
      >
        <path
          fill="#d9f99d"
          fill-opacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      {/* Feature Cards Section */}
      <section className="decision-making-section decision-making-features">
        <div className="decision-making-container">
          <div className="decision-making-features-grid">
            {featureCards.map((card, index) => (
              <div key={index} className="decision-making-feature-card">
                <div className="decision-making-feature-card-icon">
                  <img
                    src="/decision-making-feature-icon.png"
                    alt={`${card.title} icon`}
                  />
                </div>
                <div className="decision-making-feature-card-content">
                  <h3 className="decision-making-feature-title">
                    {card.title}
                  </h3>
                  <p className="decision-making-feature-description">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-decision-features"
      >
        <path
          fill="#d9f99d"
          fill-opacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      {/* From interview to insight section */}
      <section className="decision-making-section decision-making-section-alt">
        <div className="decision-making-container decision-interview">
          <div className="decision-making-content-grid decision-making-grid-reverse">
            <div className="decision-making-text-content">
              <h2 className="decision-making-section-title">
                From interview to <b>insight</b>
              </h2>
              <div className="decision-making-process-list">
                <div className="decision-making-process-item">
                  <h4 className="decision-making-process-title">
                    Collect feedback
                  </h4>
                  <p className="decision-making-process-description">
                    From recruiters, interviewers, and hiring managers.
                  </p>
                </div>
                <div className="decision-making-process-item">
                  <h4 className="decision-making-process-title">
                    Analyse scores
                  </h4>
                  <p className="decision-making-process-description">
                    Identifies strengths, red flags, and alignment.
                  </p>
                </div>
                <div className="decision-making-process-item">
                  <h4 className="decision-making-process-title">
                    Team reviews summary
                  </h4>
                  <p className="decision-making-process-description">
                    Comment or adjust recommendations.
                  </p>
                </div>
              </div>
              <div
                className="decision-making-video-link"
                onClick={handleVideoClick}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch 1 min video</span>
              </div>
            </div>
            <div className="decision-making-image-wrapper">
              <img
                src="/decision-insight.png"
                alt="Man working on laptop with UI elements"
                className="decision-making-image"
              />
            </div>
          </div>
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

export default DecisionMaking;
