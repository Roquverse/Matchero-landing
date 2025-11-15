import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import Candidate from "./Pages/Candidate";
import CandidateSignup from "./Pages/CandidateSignup";
import Pricing from "./Pages/Pricing";
import Application from "./Pages/Application";
import Signup from "./Pages/Signup";
import JobDetail from "./Pages/JobDetail";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Recruiter from "./Pages/Recruiter";
import DecisionMaking from "./Pages/DecisionMaking";
import Sourcing from "./Pages/Sourcing";
import CandidateExperience from "./Pages/CandidateExperience";
import Onboarding from "./Pages/Onboarding";
import Integration from "./Pages/Integration";
import TermsOfUse from "./Pages/TermsOfUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/candidate/signup" element={<CandidateSignup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/application" element={<Application />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job/:jobId" element={<JobDetail />} />
        <Route path="/job-details/:jobId" element={<JobDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route
          path="/recruiters/decision-making"
          element={<DecisionMaking />}
        />
        <Route path="/recruiters" element={<Recruiter />} />
        <Route path="/recruiters/sourcing" element={<Sourcing />} />
        <Route
          path="/recruiters/candidate-experience"
          element={<CandidateExperience />}
        />
        <Route path="/recruiters/onboarding" element={<Onboarding />} />
        <Route path="/recruiters/integrations" element={<Integration />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
}

export default App;
