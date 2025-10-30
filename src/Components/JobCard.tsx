import { Link } from "react-router-dom";

export interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  isRemote: boolean;
  image: string;
  imageAlt: string;
  logoBackgroundColor?: string;
  jobId: number;
}

const JobCard = ({
  company,
  logo,
  title,
  location,
  isRemote,
  image,
  imageAlt,
  logoBackgroundColor = "#e5f5f9",
  jobId,
}: JobCardProps) => {
  return (
    <div className="bg-white shadow-lg job-card-container">
      <div
        className="job-card-image"
        style={{ backgroundColor: logoBackgroundColor }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Logo Overlay */}
        <div className="job-card-logo-overlay">
          <img src={logo} alt={`${company} Logo`} className="job-card-logo" />
        </div>
      </div>
      <div className="job-card-content">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{company}</h3>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">{title}</h4>
        <div className="flex items-center text-gray-600 mb-4 job-card-location">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="semibold">{location}</span>
          {isRemote && <span className="ml-1">• Remote</span>}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link to="/candidate/signup" className="job-card-match-button">
            Match me
          </Link>
          <Link to={`/job/${jobId}`} className="job-card-button">
            View role{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33337 8H12.6667"
                stroke="#3A6202"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33325L12.6667 7.99992L8 12.6666"
                stroke="#3A6202"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
