import { Link } from "react-router-dom";
import Button from "./Button";
import "../assets/Styles/page-hero.css";
// import "../assets/Styles/decision-hero.css";

interface PageHeroProps {
  backgroundClass?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  privacyText?: string;
  privacyLink?: string;
  videoText?: string;
  hideInput?: boolean;
  hideVideoLink?: boolean;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  onVideoClick?: () => void;
  className?: string;
  breadcrumb?: {
    items: Array<{
      text: string;
      link?: string;
    }>;
  };
}

const PageHero = ({
  backgroundClass = "bg-cyan-20",
  title = `Your next role, <em>intelligently</em> matched.`,
  description = "No endless job listings. No generic suggestions. We bring you roles that align with your skills, values, and ambition.",
  image = "/NewCandidateHero.png",
  imageAlt = "Page hero image",
  buttonText = "Join free. Start matching.",
  onButtonClick,
  className = "",
  breadcrumb = {
    items: [{ text: "Home", link: "/" }, { text: "Candidate experience" }],
  },
}: PageHeroProps) => {
  return (
    <section
      className={`candidate-page-hero-section ${backgroundClass} ${className}`.trim()}
    >
      <div className="page-hero-overlay" />
      <div className="candidate-page-hero-container">
        {breadcrumb && (
          <nav
            className="candidate-page-hero-breadcrumb"
            aria-label="Breadcrumb"
          >
            {breadcrumb.items.map((item, index) => (
              <div key={index} className="candidate-page-hero-breadcrumb-item">
                {item.link ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
                {index < breadcrumb.items.length - 1 && (
                  <span className="candidate-page-hero-breadcrumb-separator">
                    /
                  </span>
                )}
              </div>
            ))}
          </nav>
        )}

        <div className="page-hero-grid">
          <div className="decision-hero-left">
            <h1
              className="decision-hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {description && (
              <p
                className="decision-hero-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <div className="decision-hero-cta">
              <Button
                variant="filled"
                color="green"
                size="lg"
                onClick={onButtonClick}
                className="decision-hero-button"
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
                {buttonText}
              </Button>
            </div>
          </div>

          <div className="candidate-hero-right">
            <div className="candidate-hero-visual">
              <img
                src={image}
                alt={imageAlt}
                className="candidate-hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="decision-hero-wave"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default PageHero;
