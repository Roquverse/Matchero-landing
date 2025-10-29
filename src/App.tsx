import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Candidate from "./Pages/Candidate";
import CandidateSignup from "./Pages/CandidateSignup";
import Pricing from "./Pages/Pricing";
import Application from "./Pages/Application";
import JobDetail from "./Pages/JobDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/candidate/signup" element={<CandidateSignup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/application" element={<Application />} />
        <Route path="/job/:jobId" element={<JobDetail />} />
        <Route path="/job-details/:jobId" element={<JobDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
