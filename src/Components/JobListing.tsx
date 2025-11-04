import { Link } from "react-router-dom";
import "../assets/Styles/job-listing.css";
import JobCard from "./JobCard";

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
    <section className={`py-16 ${className || ""}`}>
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
