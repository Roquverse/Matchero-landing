import { Link } from "react-router-dom";
import "../assets/Styles/candidate-signup-hero.css";
import FAQAccordion from "../Components/FAQAccordion";
import SignUpForm from "./SignUpForm";

interface CandidateSignupHeroProps {
  className?: string;
}

const CandidateSignupHero = ({ className = "" }: CandidateSignupHeroProps) => {
  const faqItems = [
    {
      question: "What happens when I sign up?",
      answer:
        "When you sign up, you'll create a short profile and upload your CV. Our matching engine instantly connects you with live job opportunities that fit your skills, experience, and goals.",
    },
    {
      question: "Is it free to use Matchero?",
      answer:
        "Yes — Matchero is completely free for candidates. You can sign up, browse roles, and get matched with employers at no cost.",
    },
    {
      question: "What kind of jobs can I find on Matchero?",
      answer:
        "You'll find verified, high-quality roles from growing companies across Africa and beyond — from startups to established employers in tech, finance, and operations.",
    },
    {
      question: "Can I edit or delete my profile later?",
      answer:
        "Yes. You can update your information or delete your account at any time from your profile settings.",
    },
  ];

  return (
    <section className={`candidate-signup-hero ${className}`}>
      <div className="signup-hero-container">
        {/* Breadcrumb Navigation */}
        <div className="signup-hero-breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/candidate" className="breadcrumb-link">
            Jobseekers
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/candidate" className="breadcrumb-link">
            Jobs
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Sign up</span>
        </div>

        {/* Main Content */}
        <div className="signup-hero-content">
          {/* Left Column - Sign Up Form */}
          <div>
            <SignUpForm />
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSignupHero;
