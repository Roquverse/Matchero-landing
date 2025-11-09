import { useNavigate } from "react-router-dom";
import RecruiterPageHero from "../Components/RecruiterPageHero";
import Button from "../Components/Button";
import IntegrationLogos from "../Components/IntegrationLogos";
import "../assets/Styles/recruiter.css";

const Recruiter = () => {
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    console.log("Request demo clicked");
  };

  const handleExplorePlatform = () => {
    navigate("/recruiters/decision-making");
  };

  const solutionSections = [
    {
      tag: "Decision Making",
      title: "Make fair, data-driven hiring decisions.",
      description:
        "Centralise feedback, scorecards, and interviewer notes so your team reaches a confident yes faster—without bias or guesswork.",
      buttonText: "Explore decision making",
      buttonLink: "/recruiters/decision-making",
      image: "/decision-hero.png",
      imageAlt: "Decision making workspace",
    },
    {
      tag: "Sourcing",
      title: "Find and engage top talent faster.",
      description:
        "Automate outreach, surface verified candidates, and keep every sourcing channel in one place so your pipeline stays warm and moving.",
      buttonText: "See sourcing tools",
      buttonLink: "/recruiters/sourcing",
      image: "/sourcing.png",
      imageAlt: "Sourcing dashboard",
    },
    {
      tag: "Candidate Experience",
      title: "Deliver a smooth, branded experience every candidate remembers.",
      description:
        "Personalise updates, reduce interview gaps, and make every touchpoint—from screening to offer—feel thoughtful and on-brand.",
      buttonText: "Design candidate journeys",
      buttonLink: "/recruiters/candidate-experience",
      image: "/candidate-experience-hero.png",
      imageAlt: "Candidate experience flow",
    },
    {
      tag: "Onboarding",
      title: "Get new hires productive from day one.",
      description:
        "Automate admin, share documents securely, and keep managers aligned so new teammates ramp with confidence.",
      buttonText: "Explore onboarding",
      buttonLink: "/recruiters/onboarding",
      image: "/onboarding-hero.png",
      imageAlt: "Onboarding workspace",
    },
    {
      tag: "Integrations",
      title: "Connect Matchero with the tools you already use.",
      description:
        "Seamlessly plug into job boards, calendars, and HR systems so data flows automatically and every hiring touchpoint stays in sync.",
      buttonText: "View integrations",
      buttonLink: "/recruiters/integrations",
      image: "/decision-insight.png",
      imageAlt: "Integrations dashboard",
    },
    {
      tag: "AI Automation",
      title: "Automate tasks and uncover hidden insights.",
      description:
        "Matchero’s AI quietly tackles admin and keeps your team moving—triggering nudges, surfacing insights, and streamlining decision-making.",
      buttonText: "See AI automation",
      buttonLink: "/recruiters/decision-making",
      layout: "reverse",
    },
    {
      tag: "AI Matching",
      title: "Smarter matches. Stronger shortlists.",
      description:
        "Build higher-fit pipelines with matching that looks beyond keywords—ranking talent with the experience, skills, and team fit you need.",
      buttonText: "AI job matching",
      buttonLink: "/recruiters/ai-job-matching",
      comingSoon: true,
    },
    {
      tag: "AI Interviewer",
      title: "Your intelligent assistant for candidate interviews.",
      description:
        "Give interviewers structure, live prompts, and automatic summaries so every conversation feels prepared—and every candidate feels seen.",
      buttonText: "Meet the AI interviewer",
      buttonLink: "/recruiters/ai-interviewer",
      layout: "reverse",
      comingSoon: true,
    },
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
      name: "workday.",
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
      name: "bo",
      image: "/partner/338d20c8723f9c93bca1046de48ea40f1e6450be.png",
    },
  ];

  return (
    <div className="recruiter-page">
      <RecruiterPageHero
        backgroundColor="bg-green-20"
        title="<em>Smarter</em> hiring, powered by human insight and <strong>AI efficiency.</strong>"
        description="Matchero helps recruiters and hiring teams make better decisions—from sourcing to onboarding—with an all-in-one platform built for Africa's modern workforce."
        image="/sourcing-people2.png"
        imageAlt="Recruiter team hero"
        buttonText="Request demo"
        secondaryButtonText="Explore features"
        privacyText={`By clicking "request demo", you agree to the use of your data in accordance with Matchero's`}
        hideInput
        hideVideoLink
        onButtonClick={handleRequestDemo}
        onSecondaryButtonClick={handleExplorePlatform}
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "For recruiters" }],
        }}
      />

      <section className="recruiter-section recruiter-problem-section">
        <div className="recruiter-container">
          <h2 className="recruiter-section-title">
            Recruiting today is complex.
          </h2>
          <p className="recruiter-section-description">
            Scattered tools, delayed feedback, and scattered manual tasks slow
            teams down. Matchero brings it all together into a single,
            intelligent system built for modern talent teams.
          </p>
          <p className="recruiter-section-description-2">
            Every stage is designed to help you{" "}
            <strong>hire faster, fairer, and with more confidence</strong>
          </p>
        </div>
      </section>

      <section className="recruiter-section recruiter-solutions-section">
        <div className="recruiter-container">
          {solutionSections.map((section, index) => (
            <div
              key={section.title}
              className={`recruiter-solution ${
                index % 2 === 1 ? "reverse" : ""
              }`}
            >
              <div className="recruiter-solution-text">
                <span className="recruiter-tag">{section.tag}</span>
                <h3 className="recruiter-solution-title">{section.title}</h3>
                <p className="recruiter-solution-description">
                  {section.description}
                </p>
                <Button
                  variant="outlined"
                  color="gray"
                  size="md"
                  onClick={() => navigate(section.buttonLink)}
                  className="recruiter-solution-button"
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
                  {section.buttonText}
                </Button>
              </div>
              <div className="recruiter-solution-image">
                <div className="recruiter-image-frame">
                  <img src={section.image} alt={section.imageAlt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="recruiter-section recruiter-ecosystem-section">
        <div className="recruiter-container">
          <div className="recruiter-ecosystem-content">
            <h2 className="recruiter-section-title">
              Bring every stage of hiring into one connected platform.
            </h2>
            <p className="recruiter-section-description">
              Matchero combines people-first design with intelligent automation,
              helping recruiters deliver better hires—faster.
            </p>
            <div className="recruiter-final-actions">
              <Button
                variant="filled"
                color="green"
                size="lg"
                onClick={handleRequestDemo}
                className="recruiter-final-button"
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
                Request demo
              </Button>
              <Button
                variant="outlined"
                color="gray"
                size="lg"
                onClick={handleExplorePlatform}
                className="recruiter-final-button"
              >
                Watch video
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruiter;
