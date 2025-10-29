import { Link } from "react-router-dom";
import "../assets/Styles/job-listing.css";

interface JobCardProps {
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 3.33325L12.6667 7.99992L8 12.6666"
                stroke="#3A6202"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface JobListingProps {
  maxCards?: number;
  className?: string;
}

const JobListing = ({ maxCards, className }: JobListingProps = {}) => {
  const jobCards = [
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Senior Product Designer",
      location: "Lagos, Nigeria",
      isRemote: true,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 1,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "Senior Security Engineer",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 2,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Frontend Developer",
      location: "Lagos, Nigeria",
      isRemote: false,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 3,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "Product Manager",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 4,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Backend Engineer",
      location: "Lagos, Nigeria",
      isRemote: true,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 5,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "UX Designer",
      location: "London, UK",
      isRemote: false,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 6,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Data Scientist",
      location: "Lagos, Nigeria",
      isRemote: true,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 7,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "DevOps Engineer",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 8,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "Mobile Developer",
      location: "Lagos, Nigeria",
      isRemote: false,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 9,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "Full Stack Developer",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 10,
    },
    {
      company: "Palmpay",
      logo: "/palmpay.png",
      title: "QA Engineer",
      location: "Lagos, Nigeria",
      isRemote: true,
      image: "/blog1.png",
      imageAlt: "Palmpay Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 11,
    },
    {
      company: "ZOPA",
      logo: "/zopa.png",
      title: "Technical Writer",
      location: "London, UK",
      isRemote: true,
      image: "/blog2.png",
      imageAlt: "ZOPA Team",
      logoBackgroundColor: "#e5f5f9",
      jobId: 12,
    },
  ];

  // Limit cards if maxCards is specified
  const displayCards = maxCards ? jobCards.slice(0, maxCards) : jobCards;

  return (
    <section className={`py-16 job-listing-section ${className || ""}`}>
      <div className="w-full job-listing-container">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="htw-heading">Explore open roles</h2>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayCards.map((job, index) => (
            <JobCard
              key={index}
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

        {/* View All Button */}
        <div>
          <Link to="/application" className="view-all-button">
            View all open roles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListing;
