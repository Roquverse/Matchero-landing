import { Link, useLocation } from "react-router-dom";
import "../assets/Styles/job-detail-hero.css";

interface JobDetailHeroProps {
  backgroundColor?: string;
  title: string;
  company: string;
  logo: string;
  jobLocation: string;
  isRemote: boolean;
  salary: string;
  level: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onSaveClick?: () => void;
  saveCount?: number;
  className?: string;
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const JobDetailHero = ({
  backgroundColor = "bg-cyan-20",
  title,
  company,
  logo,
  jobLocation,
  isRemote,
  salary,
  level,
  buttonText = "Apply to Palmpay",
  onButtonClick,
  onSaveClick,
  saveCount = 0,
  className = "",
  breadcrumb,
}: JobDetailHeroProps) => {
  const location = useLocation();

  return (
    <div className="job-detail-hero-container">
      <section
        className={`${backgroundColor} job-detail-hero-section ${className}`}
      >
        <div className="job-detail-hero-content">
          <div className="job-detail-hero-frame">
            {/* Breadcrumb */}
            {breadcrumb && (
              <div className="job-detail-hero-breadcrumb">
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
            <div className="job-detail-hero-content-container">
              {/* Company Logo and Job Title */}
              <div className="job-detail-hero-header">
                <div className="job-detail-hero-logo-section">
                  <div className="job-detail-hero-logo-container">
                    <img
                      src={logo}
                      alt={`${company} Logo`}
                      className="job-detail-hero-logo"
                    />
                  </div>
                  <h1 className="job-detail-hero-title">{title}</h1>
                </div>
              </div>

              {/* Job Details */}
              <div className="job-detail-hero-details">
                <div className="job-detail-hero-company-name">{company}</div>
                <div className="job-detail-hero-meta">
                  <div className="job-detail-hero-meta-item">
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
                      {jobLocation} {isRemote ? "Remote" : ""}
                    </span>
                  </div>
                  <div className="job-detail-hero-meta-item">
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
                    <span>{salary}</span>
                  </div>
                  <div className="job-detail-hero-meta-item">
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
                    <span>{level}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="job-detail-hero-actions">
                {buttonText && onButtonClick && (
                  <button
                    onClick={onButtonClick}
                    className="job-detail-hero-apply-button"
                  >
                    {buttonText}
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </button>
                )}
                {onSaveClick && (
                  <button
                    onClick={onSaveClick}
                    className="job-detail-hero-save-button"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {saveCount}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="vector-job-detail"
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

export default JobDetailHero;
