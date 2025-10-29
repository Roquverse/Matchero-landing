import { useParams, useNavigate } from "react-router-dom";
import JobDetailHero from "../Components/JobDetailHero";
import "../assets/Styles/job-detail.css";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Mock job data - in a real app, this would come from an API
  const jobData = {
    id: jobId,
    company: "Palmpay",
    logo: "/palmpay.png",
    title: "Senior Product Designer",
    location: "Lagos, Nigeria",
    isRemote: true,
    salary: "$249.7-474k",
    level: "Senior and Expert level",
    image: "/blog1.png",
    imageAlt: "Palmpay Team",
    logoBackgroundColor: "#e5f5f9",
    role: {
      description: [
        "We're looking for a creative and detail-oriented Graphics Designer with some UI/UX design experience to join our growing design team.",
        "The ideal candidate will develop visually engaging designs for both marketing and product-related projects, contributing to a consistent and appealing brand experience across all digital platforms.",
      ],
    },
    responsibilities: [
      "Create visually compelling graphics for digital and print materials, including social media, websites, product marketing, and advertising campaigns",
      "Support UI/UX initiatives by designing simple user interface components and visual assets that align with product design guidelines",
      "Collaborate with marketing, product, and development teams to ensure brand consistency across all visual touchpoints",
      "Assist in improving user experience by applying design thinking principles in digital layouts and web/mobile visuals",
    ],
    mustHave: [
      "Bachelor's degree in Graphic Design, Fine Arts, Visual Communication, or related field",
      "3-5 years of proven experience as a Graphics Designer (preferably in tech or fintech)",
      "Basic understanding of UI/UX principles and ability to design interface visuals",
      "Assist in improving user experience by applying design thinking principles in digital layouts and web/mobile visuals",
    ],
    summary: {
      description: [
        "PalmPay is a rapidly growing fintech making financial services more accessible across Africa, with over 35 million users.",
        "This role offers real ownership and the chance to make meaningful impact at scale. It's a great fit if you're comfortable with fast-paced environments and some ambiguity - less so if you're after rigid structure or mature processes.",
      ],
      poweredBy: "Powered by matchero AI",
    },
    benefits: [
      "Toast to your health: Fully paid health coverage for you and your family, in many locations",
      "Craft your calendar: Flexible location and schedule for most roles",
      "Create space for you: Distributed by design workforce, plus generous number of vacation days each year",
    ],
    funding:
      "latest funding round was a Series A round on Aug 18, 2021 for $100M. 5 investors participated in its latest round, lead by Chuangshi Capital. PalmPay has 7 institutional investors. including Chuangshi Capital, CCV Capital and MediaTek.",
  };

  const handleApplyClick = () => {
    navigate("/candidate/signup");
  };

  const handleSaveClick = () => {
    console.log("Save job clicked");
  };

  return (
    <div className="job-detail-page">
      <JobDetailHero
        backgroundColor="bg-cyan-20"
        title={jobData.title}
        company={jobData.company}
        logo={jobData.logo}
        jobLocation={jobData.location}
        isRemote={jobData.isRemote}
        salary={jobData.salary}
        level={jobData.level}
        buttonText={`Apply to ${jobData.company}`}
        onButtonClick={handleApplyClick}
        onSaveClick={handleSaveClick}
        saveCount={9}
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "Jobseekers", link: "/candidate" },
            { text: "Jobs", link: "/application" },
            { text: jobData.title },
          ],
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-job-detail"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>

      <div className="job-detail-content">
        <div className="job-detail-main">
          {/* Role Section */}
          <div className="job-detail-card">
            <h2 className="job-detail-card-title">Role</h2>
            <div className="job-detail-card-content">
              {jobData.role.description.map((paragraph, index) => (
                <p key={index} className="job-detail-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="job-detail-card">
            <h2 className="job-detail-card-title">Responsibilities</h2>
            <div className="job-detail-card-content">
              <ul className="job-detail-list">
                {jobData.responsibilities.map((responsibility, index) => (
                  <li key={index} className="job-detail-list-item">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Must have Section */}
          <div className="job-detail-card">
            <h2 className="job-detail-card-title">Must have</h2>
            <div className="job-detail-card-content">
              <ul className="job-detail-list">
                {jobData.mustHave.map((requirement, index) => (
                  <li key={index} className="job-detail-list-item">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="job-detail-sidebar">
          {/* Summary Section */}
          <div className="job-detail-sidebar-card summary-card">
            <div className="job-detail-sidebar-header">
              <h3 className="job-detail-sidebar-title">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Summary
              </h3>
              <span className="job-detail-tag">
                {jobData.summary.poweredBy}
              </span>
            </div>
            <div className="job-detail-sidebar-content">
              {jobData.summary.description.map((paragraph, index) => (
                <p key={index} className="job-detail-sidebar-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Company Benefits Section */}
          <div className="job-detail-sidebar-card">
            <h3 className="job-detail-sidebar-title">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Company benefits
            </h3>
            <div className="job-detail-sidebar-content">
              <ul className="job-detail-sidebar-list">
                {jobData.benefits.map((benefit, index) => (
                  <li key={index} className="job-detail-sidebar-list-item">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Funding Section */}
          <div className="job-detail-sidebar-card">
            <h3 className="job-detail-sidebar-title">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Funding
            </h3>
            <div className="job-detail-sidebar-content">
              <p className="job-detail-sidebar-paragraph">{jobData.funding}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Apply Button */}
      <div className="job-detail-bottom-apply">
        <button onClick={handleApplyClick} className="job-detail-apply-button">
          Apply to {jobData.company} {">"}
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
