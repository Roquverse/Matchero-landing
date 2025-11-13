import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "../assets/Styles/page-hero.css";

interface PageHeroProps {
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const PageHero = ({ breadcrumb }: PageHeroProps) => {
  const location = useLocation();

  const handleButtonClick = () => {
    console.log("Request demo clicked");
  };

  return (
    <div className="candidate-hero-page">
      <section className="candidate-hero-section">
        <div className="candidate-hero-container">
          {breadcrumb && (
            <div className="candidate-hero-breadcrumb">
              {breadcrumb.items.map((item, index) => (
                <div key={index} className="candidate-hero-breadcrumb-item">
                  {index === 0 && (
                    <svg
                      className="candidate-hero-breadcrumb-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  )}
                  {item.link ? (
                    <Link
                      to={item.link}
                      className={`candidate-hero-breadcrumb-link ${
                        location.pathname === item.link ? "active" : ""
                      } ${
                        index === breadcrumb.items.length - 1
                          ? "candidate-hero-breadcrumb-current"
                          : ""
                      }`}
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="candidate-hero-breadcrumb-current">
                      {item.text}
                    </span>
                  )}
                  {index < breadcrumb.items.length - 1 && (
                    <span className="candidate-hero-breadcrumb-separator">
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="candidate-hero-content">
            <div className="candidate-hero-left">
              <h1
                className="candidate-hero-title"
                dangerouslySetInnerHTML={{
                  __html: "Your next role, <em>intelligently matched</em>",
                }}
              />
              <p className="candidate-hero-description">
                No endless job listings. No generic suggestions. We bring you
                roles that align with your skills, values, and ambition
              </p>

              <div className="candidate-hero-cta">
                <Button
                  variant="filled"
                  color="green"
                  size="md"
                  onClick={handleButtonClick}
                  className="candidate-hero-button"
                  icon={
                    <svg
                      className="w-4 h-4"
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
                  }
                >
                  Join free. Start matching
                </Button>
              </div>
            </div>

            <div className="candidate-hero-right">
              <div className="candidate-hero-image-wrapper">
                <img
                  className="candidate-hero-image"
                  src="NewCandidateHero.png"
                  alt="Candidates collaborating"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="candidate-hero-wave"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default PageHero;
