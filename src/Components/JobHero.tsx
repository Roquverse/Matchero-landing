import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
import "../assets/Styles/job-hero.css";

interface JobHeroProps {
  backgroundColor?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
  showSearchBar?: boolean;
  searchPlaceholder?: string;
  jobDetails?: {
    company: string;
    logo: string;
    location: string;
    isRemote: boolean;
    salary: string;
    level: string;
  };
  actionButtons?: {
    onLike: () => void;
    onDislike: () => void;
  };
}

const JobHero = ({
  backgroundColor = "bg-cyan-20",
  title,
  description,
  image = "/job-hero.png",
  imageAlt = "Job hero image",
  className = "",
  breadcrumb,
  showSearchBar = false,
  searchPlaceholder = "Search...",
  jobDetails,
  actionButtons,
}: JobHeroProps) => {
  const location = useLocation();
  return (
    <div className="job-hero-container">
      <section className={`${backgroundColor} job-hero-section ${className}`}>
        {/* Left Content Block */}
        <div className="job-hero-content">
          <div className="job-hero-frame">
            {/* Breadcrumb */}
            {breadcrumb && (
              <div className="job-hero-breadcrumb">
                {breadcrumb.items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {index === 0 && (
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    )}
                    {item.link ? (
                      <Link
                        to={item.link}
                        className={`breadcrumb-link ${
                          location.pathname === item.link ? "active" : ""
                        } ${
                          index === breadcrumb.items.length - 1
                            ? "breadcrumb-current"
                            : "breadcrumb-home"
                        }`}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span
                        className={
                          index === breadcrumb.items.length - 1
                            ? "breadcrumb-current"
                            : "breadcrumb-home"
                        }
                      >
                        {item.text}
                      </span>
                    )}
                    {index < breadcrumb.items.length - 1 && (
                      <span className="breadcrumb-separator">/</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Job Details */}
            {jobDetails && (
              <div className="job-hero-details">
                <div className="job-hero-company">
                  <img
                    src={jobDetails.logo}
                    alt={`${jobDetails.company} Logo`}
                    className="job-hero-company-logo"
                  />
                  <span className="job-hero-company-name">
                    {jobDetails.company}
                  </span>
                </div>
                <div className="job-hero-meta">
                  <div className="job-hero-meta-item">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{jobDetails.company}</span>
                  </div>
                  <div className="job-hero-meta-item">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {jobDetails.location}{" "}
                      {jobDetails.isRemote ? "Remote" : ""}
                    </span>
                  </div>
                  <div className="job-hero-meta-item">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{jobDetails.salary}</span>
                  </div>
                  <div className="job-hero-meta-item">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{jobDetails.level}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="job-hero-title">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />

              {description && (
                <p
                  className="job-hero-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              {/* Search Bar */}
              {showSearchBar && (
                <div className="mt-6 input-job-hero">
                  <div className="relative flex items-center align-center">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center align-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <Input
                      type="text"
                      placeholder={searchPlaceholder}
                      size="lg"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {actionButtons && (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={actionButtons.onLike}
                    className="job-hero-action-button like-button"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </button>
                  <button
                    onClick={actionButtons.onDislike}
                    className="job-hero-action-button dislike-button"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.834a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Image Collage */}
        <div className="job-hero-image-container">
          {/* Main Image */}
          <div className="job-hero-image">
            <img src={image} alt={imageAlt} />
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="vector-job-hero"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default JobHero;
