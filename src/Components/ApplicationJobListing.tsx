import JobCard from "./JobCard";
import "../assets/Styles/application-job-listing.css";

interface ApplicationJobListingProps {
  maxCards?: number;
  className?: string;
}

const ApplicationJobListing = ({
  maxCards,
  className,
}: ApplicationJobListingProps = {}) => {
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
  ];

  const displayCards = maxCards ? jobCards.slice(0, maxCards) : jobCards;

  return (
    <section className={`application-job-listing-section ${className || ""}`}>
      <div className="application-job-listing-container">
        <div className="mb-10">
          <h2 className="application-jobs-title">Explore open roles</h2>
        </div>

        <div className="application-jobs-grid">
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

        <div className="application-jobs-view-all">
          <a href="/application" className="application-view-all-button">
            View all open roles →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationJobListing;
