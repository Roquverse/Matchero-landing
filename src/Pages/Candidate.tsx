import { useNavigate } from "react-router-dom";
import PageHero from "../Components/PageHero";
import InterviewDashboard from "../Components/InterviewDashboard";
import HowItWorks from "../Components/HowItworks";
import OnboardingSection from "../Components/OnboardingSection";
import CandidateMap from "../Components/CandidateMap";
import "../assets/Styles/candidate.css";
import Button from "../Components/Button";

const Candidate = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/candidate/signup");
  };

  const handleShowRolesClick = () => {
    console.log("Show me roles that fit clicked");
  };

  return (
    <div>
      <PageHero
        backgroundColor="bg-cyan-20"
        title="Your next role, <em>intelligently matched</em>"
        description="No endless job listings. No generic suggestions. We bring you roles that align with your skills, values, and ambition."
        image="/jobseeker.png"
        imageAlt="Job seeker hero image"
        buttonText="Join free. Start matching"
        onButtonClick={handleButtonClick}
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "For jobseekers" }],
        }}
      />

      {/* Additional content section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-candidate"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
      <section className="py-16 bg-white page-bottom-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Say goodbye to irrelevant job listings. We surface positions you
            care about—right when they’re available.
          </p>
        </div>
        <div className="floating-button-container">
          <Button
            variant="filled"
            color="white"
            size="lg"
            onClick={handleShowRolesClick}
            className="floating-button"
          >
            Show me roles that fit
          </Button>
        </div>
      </section>

      {/* Interview Dashboard */}
      <InterviewDashboard />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-2"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
        <path
          fill="#CDF0F6"
          fill-opacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <HowItWorks />

      {/* Onboarding Section */}
      <OnboardingSection />

      {/* Candidate Map Section */}
      <CandidateMap />
    </div>
  );
};

export default Candidate;
