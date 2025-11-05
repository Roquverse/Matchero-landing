import PageHero from "../Components/PageHero";
import InterviewDashboard from "../Components/InterviewDashboard";
import HowItWorks from "../Components/HowItworks";
import OnboardingSection from "../Components/OnboardingSection";
import CandidateMap from "../Components/CandidateMap";
import JobListing from "../Components/JobListing";
import "../assets/Styles/candidate.css";
import Button from "../Components/Button";

const Candidate = () => {
  const handleShowRolesClick = () => {
    console.log("Show me roles that fit clicked");
  };

  return (
    <div>
      <PageHero
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "For jobseekers" }],
        }}
      />

      {/* Additional content section */}
      <section className="py-16 bg-white page-bottom-section">
        <div className="w-full px-4 md:px-16 text-center">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Say goodbye to irrelevant job listings. We surface positions you
            care about—right when they’re available.
          </p>
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
        </div>
      </section>
      {/* <section className="py-16 bg-white page-bottom-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            
          </p>
        </div>
        
      </section> */}

      {/* Interview Dashboard */}
      <InterviewDashboard />

      <HowItWorks />

      {/* Onboarding Section */}
      <OnboardingSection />

      {/* Candidate Map Section */}
      <CandidateMap />

      <JobListing maxCards={3} className="candidate-job-listing-section" />
    </div>
  );
};

export default Candidate;
