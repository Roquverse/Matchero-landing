import PageHero from "../Components/PageHero";
import InterviewDashboard from "../Components/InterviewDashboard";
import HowItWorks from "../Components/HowItworks";
import OnboardingSection from "../Components/OnboardingSection";
import CandidateMap from "../Components/CandidateMap";
import JobCard from "../Components/JobCard";
import "../assets/Styles/candidate.css";
import { Link } from "react-router-dom";

const CandidateJobHighlights = () => {
  const featuredJobs = [
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Senior Product Designer",
      location: "Lagos, Nigeria",
      isRemote: true,
      image: "/blog1.png",
      imageAlt: "Palmpay Design Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 101,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "Senior Security Engineer",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Security Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 102,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Frontend Developer",
      location: "Lagos, Nigeria",
      isRemote: false,
      image: "/blog1.png",
      imageAlt: "Palmpay Frontend Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 103,
    },
  ];

  return (
    <section className="candidate-job-listing-section">
      <div className="candidate-job-listing-container">
        <div className="candidate-job-listing-copy">
          <h2 className="candidate-job-listing-title">Explore open roles</h2>
        </div>
        <div className="candidate-job-card-grid">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.jobId}
              company={job.company}
              logo={job.logo}
              title={job.title}
              location={job.location}
              isRemote={job.isRemote}
              image={job.image}
              imageAlt={job.imageAlt}
              logoBackgroundColor={job.logoBackgroundColor}
              jobId={job.jobId}
            />
          ))}
        </div>
        <div className="candidate-job-listing-view-all">
          <Link to="/application" className="candidate-job-listing-cta">
            <span>View all open roles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14"
                stroke="#0F172A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 6l6 6-6 6"
                stroke="#0F172A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Candidate = () => {
  return (
    <div>
      <PageHero
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "For jobseekers" }],
        }}
      />

      <InterviewDashboard />

      <HowItWorks />

      <OnboardingSection />

      <CandidateMap />

      <CandidateJobHighlights />
    </div>
  );
};

export default Candidate;
